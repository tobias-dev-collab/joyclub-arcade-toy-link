"use strict";
const DEFAULTS = {myName: "", hostName: "", intifaceUrl: "ws://127.0.0.1:12345", strength: 70, enabled: true, onWin: true, onPodium: true, onJackpot: true};
const $ = id => document.getElementById(id);
const status = (text, kind = "") => { const s = $("status"); s.textContent = text; s.className = kind; };

chrome.storage.local.get([...Object.keys(DEFAULTS), "lastEvent", "lastError"], v => {
  const s = {...DEFAULTS, ...v};
  for (const k of ["myName", "hostName", "intifaceUrl"]) $(k).value = s[k];
  for (const k of ["enabled", "onWin", "onPodium", "onJackpot"]) $(k).checked = s[k] !== false;
  $("strength").value = s.strength; $("strengthLabel").textContent = s.strength + " %";
  if (!s.myName) status("Trag deinen JOYclub-Namen ein und verbinde dein Toy in Intiface Central.");
  else if (v.lastError) status("Letzter Fehler: " + v.lastError, "bad");
  else if (v.lastEvent) status(`Zuletzt ausgelöst: ${{win: "Sieg", second: "Platz 2", third: "Platz 3", jackpot: "Jackpot"}[v.lastEvent.kind] || v.lastEvent.kind} um ${new Date(v.lastEvent.at).toLocaleTimeString("de-DE")}`, "ok");
});
for (const k of ["myName", "hostName", "intifaceUrl"]) $(k).addEventListener("change", e => chrome.storage.local.set({[k]: e.target.value.trim()}));
for (const k of ["enabled", "onWin", "onPodium", "onJackpot"]) $(k).addEventListener("change", e => chrome.storage.local.set({[k]: e.target.checked}));
$("strength").addEventListener("input", e => { $("strengthLabel").textContent = e.target.value + " %"; chrome.storage.local.set({strength: Number(e.target.value)}); });

function ask(type, extra = {}) { return new Promise(r => chrome.runtime.sendMessage({type, ...extra}, x => r(x || {ok: false, error: chrome.runtime.lastError?.message || "Keine Antwort"}))); }
$("connect").onclick = async () => {
  status("Suche Toy über Intiface …");
  const r = await ask("TOYLINK_STATUS");
  r.ok ? status("Verbunden: " + r.devices.join(", "), "ok") : status(r.error, "bad");
  chrome.storage.local.remove("lastError");
};
$("test").onclick = async () => { status("Test läuft …"); const r = await ask("TOYLINK_TEST", {kind: "test"}); r.ok ? status("Test fertig – hast du's gespürt?", "ok") : status(r.error, "bad"); };
$("stop").onclick = async () => { await ask("TOYLINK_STOP"); status("Gestoppt."); };

function showSeen(v){
  if(!v) return;
  $("seen").hidden = false;
  $("seenText").textContent = v.text;
  $("seenResult").textContent = `${new Date(v.at).toLocaleTimeString("de-DE")} · ${v.result}`;
}
chrome.storage.local.get("lastSeen", v => showSeen(v.lastSeen));
chrome.storage.onChanged.addListener(c => { if (c.lastSeen) showSeen(c.lastSeen.newValue); });
chrome.storage.local.get("contentAlive", v => {
  if (!v.contentAlive) return;
  const mins = Math.round((Date.now() - v.contentAlive.at) / 60000);
  $("alive").textContent = `Chat-Leser aktiv auf ${v.contentAlive.url} (geladen vor ${mins} min)`;
});
