"use strict";
// Minimaler Buttplug-Client (Protokoll v3) für Intiface Central.
// Alles bleibt lokal: Die Erweiterung spricht nur mit Intiface auf diesem PC.

const DEFAULTS = {intifaceUrl: "ws://127.0.0.1:12345", strength: 70, enabled: true,
                  onWin: true, onPodium: true, onJackpot: true};
// Muster: [Stärke 0–1, Dauer in ms]
const PATTERNS = {
  win:     [[.35, 300], [.6, 300], [1, 1400], [.4, 250], [1, 900], [.7, 400], [1, 1200]],
  second:  [[.6, 700], [.25, 250], [.8, 900]],
  third:   [[.5, 600], [.2, 200], [.5, 600]],
  jackpot: [[1, 200], [0, 120], [1, 200], [0, 120], [1, 200], [0, 120], [1, 1500]],
  test:    [[.3, 500], [.7, 500], [1, 700]],
};
const COOLDOWN_MS = 8000;

let ws = null, connecting = null, nextId = 1, idleTimer = null, playToken = 0, lastTrigger = 0;
const pending = new Map();
const devices = new Map();

async function settings() { return {...DEFAULTS, ...(await chrome.storage.local.get(Object.keys(DEFAULTS)))}; }

function addDevice(d) {
  const scalars = (d.DeviceMessages?.ScalarCmd || []).map((f, i) => ({index: i, type: f.ActuatorType}))
    .filter(f => ["Vibrate", "Oscillate"].includes(f.type));
  if (scalars.length) devices.set(d.DeviceIndex, {name: d.DeviceDisplayName || d.DeviceName, scalars});
}

function send(type, body = {}) {
  return new Promise((resolve, reject) => {
    if (!ws || ws.readyState !== WebSocket.OPEN) return reject(new Error("Nicht mit Intiface verbunden."));
    const Id = nextId++;
    pending.set(Id, {resolve, reject});
    ws.send(JSON.stringify([{[type]: {...body, Id}}]));
    setTimeout(() => { if (pending.delete(Id)) reject(new Error("Intiface antwortet nicht.")); }, 5000);
  });
}

function connect(url) {
  if (ws && ws.readyState === WebSocket.OPEN) return Promise.resolve();
  if (connecting) return connecting;
  connecting = new Promise((resolve, reject) => {
    let socket;
    try { socket = new WebSocket(url); } catch (e) { reject(new Error("Ungültige Intiface-Adresse.")); return; }
    const timeout = setTimeout(() => { reject(new Error("Intiface Central nicht erreichbar – läuft die App und ist der Server gestartet?")); try { socket.close(); } catch {} }, 5000);
    socket.onmessage = event => {
      let list = [];
      try { list = JSON.parse(event.data); } catch { return; }
      for (const message of list) {
        const [type, body] = Object.entries(message)[0] || [];
        if (type === "DeviceAdded") addDevice(body);
        else if (type === "DeviceRemoved") devices.delete(body.DeviceIndex);
        if (body && pending.has(body.Id)) {
          const p = pending.get(body.Id); pending.delete(body.Id);
          type === "Error" ? p.reject(new Error(body.ErrorMessage || "Fehler von Intiface")) : p.resolve({type, body});
        }
      }
    };
    socket.onclose = () => {
      if (ws === socket) ws = null;
      devices.clear();
      for (const p of pending.values()) p.reject(new Error("Verbindung zu Intiface getrennt."));
      pending.clear();
    };
    socket.onerror = () => {};
    socket.onopen = async () => {
      ws = socket;
      try {
        await send("RequestServerInfo", {ClientName: "JOYclub Arcade Toy-Link", MessageVersion: 3});
        const {body} = await send("RequestDeviceList");
        for (const d of body.Devices || []) addDevice(d);
        clearTimeout(timeout);
        resolve();
      } catch (e) { clearTimeout(timeout); reject(e); try { socket.close(); } catch {} }
    };
  }).finally(() => { connecting = null; });
  return connecting;
}

async function ensureDevices(url) {
  await connect(url);
  if (!devices.size) {
    // Noch kein Toy verbunden: kurz suchen lassen.
    try { await send("StartScanning"); } catch {}
    await new Promise(r => setTimeout(r, 4000));
    try { await send("StopScanning"); } catch {}
  }
  if (!devices.size) throw new Error("Kein Toy gefunden. Verbinde es zuerst in Intiface Central.");
  keepAliveForAWhile();
  return [...devices.values()].map(d => d.name);
}

function keepAliveForAWhile() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => { try { ws && ws.close(); } catch {} }, 120000);
}

async function setLevel(level) {
  const jobs = [];
  for (const [index, d] of devices) {
    jobs.push(send("ScalarCmd", {DeviceIndex: index, Scalars: d.scalars.map(f => ({Index: f.index, Scalar: Math.max(0, Math.min(1, level)), ActuatorType: f.type}))}).catch(() => {}));
  }
  await Promise.all(jobs);
}

async function play(kind) {
  const s = await settings();
  const steps = PATTERNS[kind];
  if (!steps) return;
  await ensureDevices(s.intifaceUrl);
  const token = ++playToken, factor = Math.max(.1, Math.min(1, Number(s.strength) / 100));
  try {
    for (const [level, ms] of steps) {
      if (token !== playToken) return;
      await setLevel(level * factor);
      await new Promise(r => setTimeout(r, ms));
    }
  } finally {
    if (token === playToken) {
      for (const index of devices.keys()) await send("StopDeviceCmd", {DeviceIndex: index}).catch(() => {});
    }
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (sender.id !== chrome.runtime.id) return;
  if (message?.type === "TOYLINK_TRIGGER") {
    (async () => {
      const s = await settings();
      const kind = message.kind;
      const allowed = s.enabled !== false && ((kind === "win" && s.onWin) || ((kind === "second" || kind === "third") && s.onPodium) || (kind === "jackpot" && s.onJackpot));
      if (!allowed || Date.now() - lastTrigger < COOLDOWN_MS) return sendResponse({ok: false});
      lastTrigger = Date.now();
      await chrome.storage.local.set({lastEvent: {kind, at: Date.now()}});
      play(kind).then(() => sendResponse({ok: true})).catch(e => { chrome.storage.local.set({lastError: e.message}); sendResponse({ok: false, error: e.message}); });
    })();
    return true;
  }
  if (message?.type === "TOYLINK_STATUS") {
    settings().then(s => ensureDevices(s.intifaceUrl)).then(names => sendResponse({ok: true, devices: names}))
      .catch(e => sendResponse({ok: false, error: e.message}));
    return true;
  }
  if (message?.type === "TOYLINK_TEST") {
    play(message.kind || "test").then(() => sendResponse({ok: true})).catch(e => sendResponse({ok: false, error: e.message}));
    return true;
  }
  if (message?.type === "TOYLINK_STOP") {
    playToken++;
    Promise.all([...devices.keys()].map(i => send("StopDeviceCmd", {DeviceIndex: i}).catch(() => {}))).then(() => sendResponse({ok: true}));
    return true;
  }
});
