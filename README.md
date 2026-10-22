# JOYclub Arcade Toy-Link

**Gewinnst du im Livestream, spürst du es.** Toy-Link ist eine kleine Erweiterung für Chrome und Edge. Sie lässt dein eigenes Toy vibrieren, sobald du in der JOYclub Arcade ein Rennen gewinnst oder bei Devil Slots den Jackpot knackst. Für Platz 2 und 3 gibt es ein kürzeres Signal.

- Läuft komplett **auf deinem eigenen PC** über die kostenlose App [Intiface Central](https://intiface.com/central).
- Funktioniert mit allen Toys, die Intiface unterstützt, zum Beispiel Lovense, We-Vibe, Satisfyer Connect, Kiiroo und Magic Motion. Die vollständige Liste findest du auf [iostindex.com](https://iostindex.com).
- Die Erweiterung **liest nur mit**. Sie schreibt nichts in den Chat, sendet keine Daten ins Internet und braucht kein Konto.

---

## Inhalt

1. [Was du brauchst](#1-was-du-brauchst)
2. [Intiface Central einrichten](#2-intiface-central-einrichten)
3. [Toy-Link herunterladen](#3-toy-link-herunterladen)
4. [Erweiterung in Chrome oder Edge installieren](#4-erweiterung-in-chrome-oder-edge-installieren)
5. [Toy-Link einstellen und testen](#5-toy-link-einstellen-und-testen)
6. [Im Livestream](#6-im-livestream)
7. [Wenn es nicht vibriert](#7-wenn-es-nicht-vibriert)
8. [Aktualisieren](#8-aktualisieren)
9. [Deinstallieren](#9-deinstallieren)
10. [Datenschutz und Sicherheit](#10-datenschutz-und-sicherheit)
11. [Häufige Fragen](#11-häufige-fragen)
12. [Für Streamer](#12-für-streamer)

---

## 1. Was du brauchst

| | |
| --- | --- |
| **Computer** | Windows 10/11 oder macOS. Handy und Tablet werden nicht unterstützt. |
| **Browser** | Google Chrome oder Microsoft Edge, jeweils eine aktuelle Version (mindestens 116) |
| **Bluetooth** | Am PC eingebaut oder als USB-Stick. Manche Lovense-Toys gehen auch über den Lovense-USB-Dongle. |
| **Toy** | Ein Bluetooth-Toy, das Intiface unterstützt ([Liste](https://iostindex.com)) |
| **Software** | [Intiface Central](https://intiface.com/central), kostenlos |

Die Einrichtung dauert beim ersten Mal etwa 10 Minuten.

---

## 2. Intiface Central einrichten

Intiface Central ist die App, die dein Toy über Bluetooth steuert. Toy-Link sagt Intiface nur, wann es vibrieren soll.

1. Lade Intiface Central von **<https://intiface.com/central>** herunter und installiere es.
2. Öffne Intiface Central.
3. Klick oben auf den großen **Start-Knopf** (▶, „Start Server“). Er wird danach rot bzw. zeigt „Stop Server“, und der Server läuft.
4. Wechsle links zu **Devices** und klick auf **Start Scanning**.
5. Schalte dein Toy ein, wie beim normalen Koppeln. Warte, bis es in der Liste auftaucht.
6. Klick auf **Stop Scanning**.

> **Lovense-Nutzer:** Schließ vorher die Lovense-App (Lovense Remote / Lovense Connect) komplett, auch auf dem Handy. Ein Toy kann nur mit einer App gleichzeitig verbunden sein.

> **Tipp:** Unter *Settings* kannst du „Start Server when Intiface Central launches“ einschalten. Dann musst du beim nächsten Mal nicht mehr auf Start klicken.

Prüf unter *Settings → Server Port* kurz die Portnummer. Standard ist **12345**. Brauchst du sie später, steht sie hier.

---

## 3. Toy-Link herunterladen

1. Klick oben auf dieser Seite auf den grünen Knopf **`<> Code`** und dann auf **Download ZIP**.
2. Leg die ZIP-Datei an einen festen Ort, zum Beispiel in `Dokumente`.
3. Entpacke sie: Rechtsklick auf die Datei, **Alle extrahieren…** (Windows) bzw. Doppelklick (Mac).

Du erhältst einen Ordner namens **`joyclub-arcade-toy-link-main`**.

> **Wichtig:** Lass diesen Ordner liegen und lösch ihn nicht. Chrome lädt die Erweiterung direkt aus diesem Ordner. Löschst oder verschiebst du ihn, verschwindet Toy-Link aus dem Browser.

> **Achtung, doppelter Ordner:** Windows legt beim Entpacken manchmal einen Ordner im Ordner an (`joyclub-arcade-toy-link-main\joyclub-arcade-toy-link-main`). Richtig ist der Ordner, in dem die Datei **`manifest.json`** direkt liegt.

---

## 4. Erweiterung in Chrome oder Edge installieren

Toy-Link ist nicht im Chrome Web Store. Du lädst die Erweiterung deshalb einmalig über den Entwicklermodus. Das ist ungefährlich und dauert eine Minute.

### Google Chrome

1. Gib in die Adresszeile **`chrome://extensions`** ein und drück Enter.
2. Schalte oben rechts **Entwicklermodus** ein.
3. Klick oben links auf **Entpackte Erweiterung laden**.
4. Wähle den Ordner aus Schritt 3, also den Ordner mit der `manifest.json` darin, und klick auf **Ordner auswählen**.
5. In der Liste erscheint die Kachel **JOYclub Arcade Toy-Link**. Achte darauf, dass der Schalter darauf eingeschaltet ist.
6. Klick in der Browserleiste oben rechts auf das **Puzzle-Symbol** 🧩. Klick neben „JOYclub Arcade Toy-Link“ auf die **Stecknadel**, damit das Symbol immer sichtbar ist.

### Microsoft Edge

1. Gib in die Adresszeile **`edge://extensions`** ein und drück Enter.
2. Schalte links unten **Entwicklermodus** ein.
3. Klick auf **Entpackt laden**.
4. Wähle wieder den Ordner mit der `manifest.json` und bestätige.
5. Klick oben rechts auf das **Puzzle-Symbol** und dann bei Toy-Link auf das **Auge-Symbol** („In Symbolleiste anzeigen“).

> Manchmal zeigt der Browser beim Start einen Hinweis wie „Erweiterungen im Entwicklermodus deaktivieren“. Klick dort auf **Abbrechen** bzw. schließ den Hinweis, sonst wird Toy-Link ausgeschaltet.

---

## 5. Toy-Link einstellen und testen

Klick auf das Toy-Link-Symbol in der Browserleiste. Es öffnet sich ein kleines Fenster:

| Feld | Was eintragen |
| --- | --- |
| **Toy-Link aktiv** | Haken setzen (Hauptschalter) |
| **Dein JOYclub-Name** | Dein Name **genau so, wie er im Chat steht**, mit Unterstrichen, Zahlen und Punkten. Groß- und Kleinschreibung, doppelte Leerzeichen, Emoji und Geschlechtssymbole (♀ ♂) sind egal. |
| **Name des Streamers** | Der JOYclub-Name des Streamers, in dessen Livestream die Arcade läuft. Dann zählen nur dessen Meldungen, und niemand kann dein Toy mit einer gefälschten Chatnachricht auslösen. **Sehr empfohlen.** |
| **Stärke** | Maximale Stärke von 10 bis 100 %. Zum Start eignen sich 50–70 %. |
| **Vibrieren bei** | Sieg (Platz 1), Platz 2 und 3, Jackpot bei Devil Slots, jeweils einzeln an- oder abschaltbar |
| **Intiface-Adresse** | Bleibt normalerweise `ws://127.0.0.1:12345`. Nur ändern, wenn du in Intiface einen anderen Port eingestellt hast. |

Die Eingaben werden automatisch gespeichert.

**Jetzt testen:**

1. Intiface Central ist offen, der Server läuft, und dein Toy steht unter *Devices*.
2. Klick im Toy-Link-Fenster auf **Toy suchen**. Unten erscheint grün „Verbunden: *Name deines Toys*“.
3. Klick auf **Test**. Dein Toy vibriert etwa 2 Sekunden lang ansteigend.
4. **Stopp** beendet jede Vibration sofort.

Klappt der Test, ist alles fertig. Lade zum Schluss den JOYclub-Livestream-Tab einmal neu (F5), falls er schon offen war.

**Läuft der Chat-Leser?** Öffne den Livestream und dann das Toy-Link-Fenster. Unten steht „Chat-Leser aktiv auf joyclub.de/…“. Steht dort „Chat-Leser noch nicht aktiv“, lade den Livestream-Tab neu.

---

## 6. Im Livestream

- Lass **Intiface Central während des Streams geöffnet** und den Server gestartet.
- Spiel wie gewohnt mit, zum Beispiel mit `!duck`, `!turtle`, `!hover` oder den anderen Rennbefehlen.
- Gewinnst du, schreibt die Arcade kurz darauf etwa „🏁 *Dein Name* gewinnt … und bekommt 50 Punkte!“ in den Chat. Toy-Link erkennt das und dein Toy legt los.

| Ereignis | Muster |
| --- | --- |
| Sieg (Platz 1) | ca. 5 Sekunden, ansteigend mit mehreren Höhepunkten |
| Platz 2 | ca. 2 Sekunden |
| Platz 3 | ca. 1,5 Sekunden, sanfter |
| Jackpot (Devil Slots) | drei kurze Stöße, dann ein langer |

Nach jedem Signal gibt es 8 Sekunden Pause, damit nichts doppelt auslöst. Alte Nachrichten, die schon beim Öffnen des Chats da waren, lösen nie etwas aus.

**Sofort aufhören:** Toy-Link-Symbol anklicken, dann **Stopp**. Oder den Haken bei **Toy-Link aktiv** entfernen.

---

## 7. Wenn es nicht vibriert

**Zuerst hier nachsehen:** Öffne das Toy-Link-Fenster. Im Kasten **„Zuletzt im Chat gesehen“** steht die letzte Siegermeldung, die Toy-Link erkannt hat, und warum es ausgelöst hat oder nicht:

| Anzeige | Bedeutung |
| --- | --- |
| *Dein Sieg / Platz 2 / Platz 3 / Jackpot – Toy ausgelöst* | Alles richtig erkannt. Vibriert trotzdem nichts, liegt es an Intiface oder dem Toy (siehe Tabelle unten). |
| *Nicht dein Name (gewonnen hat „…“)* | Jemand anderes hat gewonnen, oder dein Name ist anders eingetragen als im Chat. Vergleiche die Schreibweise. |
| *Ignoriert: kam von „…“, nicht vom eingetragenen Streamer* | Der Streamer-Name stimmt nicht. Korrigiere ihn oder lass das Feld zum Testen leer. |
| *Kein eigener Name eingetragen* | Trag deinen JOYclub-Namen ein. |
| *Toy-Link ist ausgeschaltet* | Setz den Haken bei **Toy-Link aktiv**. |
| Kasten fehlt ganz | Toy-Link hat noch keine Siegermeldung gesehen. Entweder gab es noch kein Rennen, oder der Streamer hat die Siegermeldungen im Chat nicht eingeschaltet. |

| Meldung / Problem | Lösung |
| --- | --- |
| **„Intiface Central nicht erreichbar“** | Intiface öffnen und den Server starten (▶). Die Intiface-Adresse in Toy-Link muss zum Port in Intiface passen (*Settings → Server Port*, Standard `12345`). |
| **„Kein Toy gefunden“** | Toy einschalten und in Intiface unter *Devices* **Start Scanning**, bis es erscheint. Bei Lovense die Lovense-App schließen. Bluetooth am PC eingeschaltet? |
| **„Intiface antwortet nicht“** | Intiface Central einmal schließen, neu öffnen, Server starten, dann in Toy-Link **Toy suchen**. |
| **Test geht, im Stream passiert nichts** | 1. Stimmt dein Name **exakt** mit dem Chat überein? 2. Ist der Streamer-Name richtig geschrieben? Im Zweifel das Feld leeren und testen. 3. Hat der Streamer die Siegermeldungen im Chat eingeschaltet? Steht nach dem Rennen keine „… gewinnt …“-Nachricht im Chat, liegt es daran. 4. Livestream-Tab neu laden (F5). |
| **„Chat-Leser noch nicht aktiv“** | Den Livestream-Tab neu laden (F5). Nach einem Update von Toy-Link ist das immer nötig. |
| **Toy-Link-Symbol fehlt** | Puzzle-Symbol 🧩 anklicken und Toy-Link anheften (siehe Schritt 4). |
| **Erweiterung ist plötzlich weg oder ausgegraut** | Der Ordner aus Schritt 3 wurde verschoben oder gelöscht, oder der Entwicklermodus wurde ausgeschaltet. Ordner wiederherstellen bzw. Entwicklermodus einschalten und unter `chrome://extensions` auf **Neu laden** ↻ klicken. |
| **Fehler „Manifest-Datei fehlt“ beim Laden** | Du hast den falschen Ordner gewählt. Nimm den Ordner, in dem die `manifest.json` direkt liegt (siehe Hinweis „doppelter Ordner“). |
| **Toy vibriert nicht mehr / hört nicht auf** | Im Toy-Link-Fenster **Stopp** drücken. Hilft das nicht, in Intiface Central den Server stoppen; das hält jedes Toy sofort an. |

Unten im Toy-Link-Fenster stehen immer die letzte Auslösung bzw. der letzte Fehler. Das hilft beim Eingrenzen.

---

## 8. Aktualisieren

1. Lade wie in Schritt 3 die neue ZIP-Datei herunter.
2. Ersetze den Inhalt deines bisherigen Toy-Link-Ordners durch die neuen Dateien. Ordnername und Ort bleiben gleich.
3. Öffne `chrome://extensions` (bzw. `edge://extensions`) und klick bei Toy-Link auf **Neu laden** ↻.
4. Lade den Livestream-Tab neu.

Deine Einstellungen (Name, Stärke usw.) bleiben dabei erhalten. Welche Version du hast, steht auf der Kachel unter `chrome://extensions`. Was sich geändert hat, steht im [CHANGELOG](CHANGELOG.md).

---

## 9. Deinstallieren

1. `chrome://extensions` bzw. `edge://extensions` öffnen.
2. Bei Toy-Link auf **Entfernen** klicken.
3. Den Toy-Link-Ordner löschen. Den Entwicklermodus kannst du wieder ausschalten.

---

## 10. Datenschutz und Sicherheit

- **Nur lesen:** Toy-Link liest auf `joyclub.de` ausschließlich die Chatnachrichten im Livestream mit und sucht darin nach Arcade-Meldungen mit deinem Namen. Es schreibt nichts in den Chat und klickt nichts an.
- **Nichts verlässt deinen PC:** Verbindungen gibt es nur zu Programmen auf deinem eigenen Rechner (`127.0.0.1`): zu Intiface Central und, falls auf demselben PC eine JOYclub Arcade läuft, zu deren Fehlerprotokoll. Das betrifft praktisch nur Streamer, die Toy-Link selbst testen. Bei Zuschauern läuft keine Arcade, dort geht diese Meldung ins Leere. Es gibt keine Server im Internet, keine Analyse und kein Tracking.
- **Gespeichert wird nur lokal im Browser:** dein Name, der Streamer-Name, die Stärke, die Schalter, Zeit und Art der letzten Auslösung sowie die zuletzt erkannte Siegermeldung (für die Anzeige „Zuletzt im Chat gesehen“).
- **Berechtigungen:** Die Erweiterung hat Zugriff auf `joyclub.de`, auf den eigenen Speicher (`storage`) und auf die lokale Arcade-Adresse `127.0.0.1:8766`. Andere Webseiten sieht sie nicht.
- **Schutz vor Missbrauch:** Mit eingetragenem Streamer-Namen zählen nur dessen Meldungen. Nach jedem Signal gibt es 8 Sekunden Sperre. Die Stärke deckelst du selbst.
- **Offener Quellcode:** Alles steht in den fünf Dateien dieses Repos und lässt sich nachlesen.

Für Streamer: Läuft Toy-Link auf demselben PC wie die Arcade, erscheinen seine Diagnosezeilen (beginnend mit „toylink“, markiert als „Browser-Diagnose“) im Regiepult im Chat-Protokoll, sofern dort die Diagnose eingeschaltet ist. So lässt sich nachvollziehen, was die Erweiterung im Chat sieht.

---

## 11. Häufige Fragen

**Muss ich etwas bezahlen oder mich anmelden?**
Nein. Toy-Link und Intiface Central sind kostenlos und brauchen kein Konto.

**Geht das am Handy?**
Nein. Chrome und Edge erlauben auf Handys keine Erweiterungen dieser Art. Du brauchst einen Windows-PC oder einen Mac.

**Kann ich mehrere Toys gleichzeitig nutzen?**
Ja. Alle Toys, die in Intiface verbunden sind, vibrieren gemeinsam.

**Sieht der Streamer oder der Chat, dass ich Toy-Link nutze?**
Nein. Toy-Link sendet nichts, weder in den Chat noch an den Streamer.

**Kann jemand anderes mein Toy auslösen?**
Nur über eine echte Siegermeldung mit deinem Namen. Trag den Streamer-Namen ein, dann zählen ausschließlich Meldungen vom Konto des Streamers.

**Ich habe meinen JOYclub-Namen geändert.**
Trag den neuen Namen im Toy-Link-Fenster ein, fertig.

**Funktioniert das auch mit anderen Browsern (Firefox, Safari, Opera)?**
Offiziell nur mit Chrome und Edge. Brave und Opera basieren auf Chrome und funktionieren meist ebenfalls über den Entwicklermodus.

---

## 12. Für Streamer

Damit Toy-Link bei deinen Zuschauern reagiert, muss die Arcade Siegermeldungen in den Chat schreiben:

- Im **Regiepult → Optionen** den Schalter **„Toy-Link: Sieger und Jackpots immer im Chat melden“** einschalten. Damit gehen nur diese Meldungen in den Chat, auch wenn die übrigen Chat-Antworten aus sind.
- Die Arcade-Chrome-Erweiterung muss verbunden sein (grüner Punkt oben rechts im Regiepult).
- Sag deinen Zuschauern deinen **genauen JOYclub-Namen** für das Feld „Name des Streamers“.

Diesen Link kannst du im Stream oder in deinem Profil teilen, sobald das Repo öffentlich ist:
`https://github.com/tobias-dev-collab/joyclub-arcade-toy-link`
