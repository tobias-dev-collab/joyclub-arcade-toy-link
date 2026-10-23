(() => {
  "use strict";
  // Wird nach Installation/Update auch in schon offene Tabs eingespielt (background.js).
  // Eine noch gültige Kopie läuft schon? Dann nicht doppelt starten.
  const alive = () => { try { return !!chrome.runtime?.id; } catch { return false; } };
  if (globalThis.__toyLinkAlive?.()) return;
  globalThis.__toyLinkAlive = alive;
  // Liest im JOYclub-Livestream-Chat die Meldungen der Arcade mit und meldet
  // dem Hintergrund, wenn DEIN Name gewinnt. Es wird nichts gesendet; der Chat
  // bleibt unverändert. Zur Fehlersuche merkt sich das Tool die zuletzt
  // gesehene Arcade-Meldung (nur lokal, im Toy-Link-Fenster sichtbar).
  const MESSAGE = ".text_chat_user_message_content";
  const MARKER = " schreibt: ";
  const RACES = "Duck Race|Turbo Turtle Rally|Neon Hover Sprint|Penis- & Muschi-Rennen|Penis-Rennen";
  const WIN = new RegExp(`(?:🏁\\s*)?(.+?) gewinnt (?:${RACES})(?: und bekommt \\d+ Punkte!)?`);
  const SECOND = /Platz 2: (.+?)(?: · Platz 3: |$)/;
  const THIRD = /Platz 3: (.+?)\s*$/;
  const JACKPOT = /Jackpot für (.+?): \+\d+ Punkte!/;
  // JOYclub verwendet Chat-Elemente wieder und schreibt neue Nachrichten hinein.
  // Deshalb pro Element den zuletzt gelesenen Inhalt merken (nicht nur "schon gesehen")
  // und jede Meldung genau einmal auswerten.
  const lastContent = new WeakMap();
  const done = new Set();
  let settings = {myName: "", hostName: "", enabled: true};
  // Namen vergleichen ohne Groß/Klein, Leerzeichen-Unterschiede, Geschlechtssymbole und Emoji
  const norm = s => String(s || "").normalize("NFKC").replace(/[♀♂⚥⚤]|\p{Extended_Pictographic}|️/gu, "")
    .replace(/\s+/g, " ").trim().toLocaleLowerCase("de-DE");

  chrome.storage.local.get(["myName", "hostName", "enabled"], v => { settings = {...settings, ...v}; });
  chrome.storage.onChanged.addListener(changes => { for (const [k, c] of Object.entries(changes)) if (k in settings) settings[k] = c.newValue; });

  // Diagnose: geht nur an eine Arcade auf DIESEM PC (falls sie läuft), sonst nirgendwohin.
  const frame = window === window.top ? "top" : "frame";
  function diag(text) { try { chrome.runtime.sendMessage({type: "TOYLINK_DIAG", text: `${frame} ${text}`}); } catch {} }
  function report(text, result) {
    try { chrome.storage.local.set({lastSeen: {text: text.slice(0, 200), result, at: Date.now()}}); } catch {}
    diag(`${result} | ${text.slice(0, 40)}`);
  }

  function readMessage(el) {
    // Bevorzugt: "<Name> schreibt: <Text>" aus dem aria-label. Sonst der sichtbare Text.
    const label = el.getAttribute("aria-label") || "";
    const at = label.indexOf(MARKER);
    if (at > 0) return {author: label.slice(0, at).trim(), text: label.slice(at + MARKER.length).trim()};
    return {author: "", text: (label || el.textContent || "").replace(/\s+/g, " ").trim()};
  }

  function handle({author, text}) {
    const win = WIN.exec(text), jackpot = JACKPOT.exec(text);
    if (!win && !jackpot) return;                          // keine Arcade-Meldung
    const key = norm(text);
    if (done.has(key)) return;                             // dieselbe Meldung, nur neu gezeichnet
    done.add(key);
    if (done.size > 3000) done.delete(done.values().next().value);
    const me = norm(settings.myName);
    if (settings.enabled === false) return report(text, "Toy-Link ist ausgeschaltet");
    if (!me) return report(text, "Kein eigener Name eingetragen");
    if (settings.hostName && author && norm(author) !== norm(settings.hostName))
      return report(text, `Ignoriert: kam von „${author}“, nicht vom eingetragenen Streamer`);
    let kind = "";
    const second = SECOND.exec(text), third = THIRD.exec(text);
    if (win && norm(win[1]) === me) kind = "win";
    else if (win && second && norm(second[1]) === me) kind = "second";
    else if (win && third && norm(third[1]) === me) kind = "third";
    else if (jackpot && norm(jackpot[1]) === me) kind = "jackpot";
    if (!kind) return report(text, `Nicht dein Name (gewonnen hat „${(win || jackpot)[1]}“)`);
    report(text, {win: "Dein Sieg – Toy ausgelöst", second: "Platz 2 – Toy ausgelöst", third: "Platz 3 – Toy ausgelöst", jackpot: "Jackpot – Toy ausgelöst"}[kind]);
    try { chrome.runtime.sendMessage({type: "TOYLINK_TRIGGER", kind}); } catch {}
  }

  function scan(initial) {
    for (const el of document.querySelectorAll(MESSAGE)) {
      const msg = readMessage(el), content = msg.author + "|" + msg.text;
      if (lastContent.get(el) === content) continue;
      lastContent.set(el, content);
      if (initial) { done.add(norm(msg.text)); continue; }   // alte Nachrichten nie auslösen
      handle(msg);
    }
  }

  // Ersatzweg, falls der Chat bei Zuschauern anders aufgebaut ist: neu
  // eingefügte Elemente mit kurzem Text direkt nach Arcade-Meldungen durchsuchen.
  // Der Absender wird dann aus der umgebenden Chatzeile gelesen.
  function scanAdded(nodes) {
    for (const node of nodes) {
      const el = node.nodeType === 1 ? node : node.parentElement;
      if (!el || el.closest?.(MESSAGE) || el.querySelector?.(MESSAGE)) continue;   // schon über den Hauptweg erfasst
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (text.length > 600) continue;
      if (!(WIN.test(text) || JACKPOT.test(text))) { if (/gewinnt|Jackpot/.test(text)) diag(`unerkannt: ${text.slice(0, 50)}`); continue; }
      // kleinste Teilstruktur, die nur die Meldung enthält
      const start = text.search(/🏁|\S+ gewinnt |Jackpot für /);
      const body = text.slice(Math.max(0, start));
      let author = "";
      if (settings.hostName) {
        let row = el;
        for (let i = 0; i < 5 && row; i++, row = row.parentElement) {
          const around = (row.textContent || "").replace(/\s+/g, " ");
          if (around.length > 800) break;
          if (norm(around).includes(norm(settings.hostName))) { author = settings.hostName; break; }
        }
        if (!author) author = "unbekannt";
      }
      handle({author, text: body});
    }
  }

  let queued = false, added = [];
  const observer = new MutationObserver(records => {
    for (const r of records) { if (r.type === "characterData") added.push(r.target); else { added.push(...r.addedNodes); if (r.target) added.push(r.target); } }
    if (added.length > 2000) added = added.slice(-2000);
    if (queued) return;
    queued = true;
    setTimeout(() => { queued = false; const nodes = added; added = []; scan(false); scanAdded(nodes); }, 200);
  });
  scan(true);
  const every = (fn, ms) => { const id = setInterval(() => { if (!alive()) { clearInterval(id); observer.disconnect(); return; } fn(); }, ms); };
  every(() => scan(false), 2000);   // Sicherheitsnetz, falls eine Änderung kein Ereignis auslöst
  const start = () => { if (document.body) observer.observe(document.body, {childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["aria-label"]}); else setTimeout(start, 200); };
  start();
  const census = () => {
    const all = document.querySelectorAll(MESSAGE).length, aria = document.querySelectorAll(MESSAGE + "[aria-label]").length;
    const body = document.body ? document.body.innerText || "" : "";
    return `msgs=${all} aria=${aria} gewinnt=${(body.match(/ gewinnt /g) || []).length} name=${settings.myName ? "ja" : "nein"} host=${settings.hostName ? "ja" : "nein"}`;
  };
  let lastCensus = "";
  setTimeout(() => { lastCensus = census(); diag(`start ${location.pathname.slice(0, 25)} ${lastCensus}`); }, 3000);
  every(() => { const c = census(); if (c !== lastCensus) { lastCensus = c; diag(c); } }, 15000);
  try { chrome.storage.local.set({contentAlive: {at: Date.now(), url: location.hostname + location.pathname.slice(0, 40)}}); } catch {}
})();
