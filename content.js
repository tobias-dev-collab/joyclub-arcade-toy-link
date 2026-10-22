(() => {
  "use strict";
  // Liest im JOYclub-Livestream-Chat die Meldungen der Arcade mit und meldet
  // dem Hintergrund, wenn DEIN Name gewinnt. Es wird nichts gesendet oder
  // gespeichert; der Chat bleibt unverändert.
  const MESSAGE = ".text_chat_user_message_content[aria-label]";
  const MARKER = " schreibt: ";
  const RACES = "Duck Race|Turbo Turtle Rally|Neon Hover Sprint|Penis- & Muschi-Rennen";
  const WIN = new RegExp(`(?:🏁\\s*)?(.+?) gewinnt (?:${RACES}) und bekommt \\d+ Punkte!`);
  const SECOND = /Platz 2: (.+?)(?: · Platz 3: |$)/;
  const THIRD = /Platz 3: (.+?)\s*$/;
  const JACKPOT = /Jackpot für (.+?): \+\d+ Punkte!/;
  const seen = new WeakSet();
  const recent = new Map();
  let settings = {myName: "", hostName: "", enabled: true};
  const norm = s => String(s || "").replace(/\s+/g, " ").trim().toLocaleLowerCase("de-DE");

  chrome.storage.local.get(["myName", "hostName", "enabled"], v => { settings = {...settings, ...v}; });
  chrome.storage.onChanged.addListener(changes => { for (const [k, c] of Object.entries(changes)) settings[k] = c.newValue; });

  function handle(label) {
    const at = label.indexOf(MARKER);
    if (at <= 0) return;
    const author = label.slice(0, at), text = label.slice(at + MARKER.length).trim();
    const me = norm(settings.myName);
    if (!me || settings.enabled === false) return;
    if (settings.hostName && norm(author) !== norm(settings.hostName)) return;   // nur echte Arcade-Meldungen
    // Gerenderte Nachrichten können neu aufgebaut werden – dieselbe Meldung nur einmal auswerten.
    const now = Date.now(), key = norm(label);
    if (now - (recent.get(key) || 0) < 120000) return;
    recent.set(key, now);
    if (recent.size > 300) recent.delete(recent.keys().next().value);
    let kind = "";
    const win = WIN.exec(text), second = SECOND.exec(text), third = THIRD.exec(text), jackpot = JACKPOT.exec(text);
    if (win && norm(win[1]) === me) kind = "win";
    else if (win && second && norm(second[1]) === me) kind = "second";
    else if (win && third && norm(third[1]) === me) kind = "third";
    else if (jackpot && norm(jackpot[1]) === me) kind = "jackpot";
    if (kind) { try { chrome.runtime.sendMessage({type: "TOYLINK_TRIGGER", kind}); } catch {} }
  }

  function scan(initial) {
    for (const el of document.querySelectorAll(MESSAGE)) {
      if (seen.has(el)) continue;
      seen.add(el);
      const label = el.getAttribute("aria-label") || "";
      if (initial) { recent.set(norm(label), Date.now()); continue; }   // alte Nachrichten nie auslösen
      handle(label);
    }
  }

  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    setTimeout(() => { queued = false; scan(false); }, 150);
  });
  scan(true);
  if (document.body) observer.observe(document.body, {childList: true, subtree: true});
})();
