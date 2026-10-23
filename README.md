# JOYclub Arcade Toy-Link

> **Nur für Erwachsene (ab 18).** Toy-Link steuert Sexspielzeug und ist für Livestreams auf JOYclub gedacht, einer Plattform für Erwachsene.

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
13. [Lizenz](#13-lizenz)

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

> **Windows – Firewall-Abfrage:** Beim ersten Start des Servers fragt Windows eventuell, ob Intiface Central „im Netzwerk kommunizieren“ darf. Klick auf **Zugriff zulassen**. Toy-Link verbindet sich nur innerhalb deines PCs, die Freigabe für **private Netzwerke** reicht also.

> **Mac – Bluetooth-Berechtigung:** Beim ersten Scannen fragt macOS, ob Intiface Central Bluetooth verwenden darf. Klick auf **Erlauben**. Hast du versehentlich abgelehnt, findet Intiface kein Toy: Öffne *Systemeinstellungen → Datenschutz & Sicherheit → Bluetooth*, schalte Intiface Central ein und starte Intiface neu.

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

Ein schon offener JOYclub-Tab muss nach der Installation **nicht** neu geladen werden. Toy-Link klinkt sich selbst in offene JOYclub-Tabs ein.

---

## 5. Toy-Link einstellen und testen

### Stream festlegen (empfohlen)

1. Öffne in Chrome bzw. Edge den **Livestream des Streamers**, bei dem die Arcade läuft.
2. Klick auf das Toy-Link-Symbol in der Browserleiste.
3. Klick im Kasten **Stream** auf **Diesen Stream festlegen**.

Ab dann reagiert Toy-Link **nur in diesem Stream**. Der Name des Streamers wird dabei automatisch ins Feld „Name des Streamers“ übernommen. So kann niemand im Chat oder in einem anderen Stream dein Toy auslösen. Im Kasten steht danach der Stream mit einem grünen Haken „✓ dieser Tab“, solange du in genau diesem Stream bist.

Willst du Toy-Link später in einem anderen Stream nutzen, öffne diesen und klick dort wieder auf **Diesen Stream festlegen**. **Aufheben** entfernt die Festlegung; dann reagiert Toy-Link in jedem Livestream.

> Der Knopf ist ausgegraut, wenn der aktuelle Tab kein JOYclub-Livestream ist oder dieser Stream schon festgelegt ist.

### Die übrigen Felder

| Feld | Was eintragen |
| --- | --- |
| **Toy-Link aktiv** | Haken setzen (Hauptschalter) |
| **Dein JOYclub-Name** | Dein Name **genau so, wie er im Chat steht**, mit Unterstrichen, Zahlen und Punkten. Groß- und Kleinschreibung, doppelte Leerzeichen, Emoji und Geschlechtssymbole (♀ ♂) sind egal. |
| **Name des Streamers** | Wird beim Festlegen des Streams automatisch ausgefüllt. Wird er nicht erkannt, trag den JOYclub-Namen des Streamers selbst ein. Dann zählen nur dessen Meldungen. |
| **Stärke** | Maximale Stärke von 10 bis 100 %. Zum Start eignen sich 50–70 %. |
| **Vibrieren bei** | Sieg (Platz 1), Platz 2 und 3, Jackpot bei Devil Slots, jeweils einzeln an- oder abschaltbar |
| **Intiface-Adresse** | Bleibt normalerweise `ws://127.0.0.1:12345`. Nur ändern, wenn du in Intiface einen anderen Port eingestellt hast. |

Die Eingaben werden automatisch gespeichert.

### Testen

1. Intiface Central ist offen, der Server läuft, und dein Toy steht unter *Devices*.
2. Klick im Toy-Link-Fenster auf **Toy suchen**. Unten erscheint grün „Verbunden: *Name deines Toys*“.
3. Klick auf **Test**. Dein Toy vibriert etwa 2 Sekunden lang ansteigend.
4. **Stopp** beendet jede Vibration sofort.

**Läuft der Chat-Leser?** Öffne den Livestream und dann das Toy-Link-Fenster. Unten steht „Chat-Leser aktiv auf joyclub.de/…“. Steht dort „Chat-Leser noch nicht aktiv – Livestream öffnen“, öffne den Livestream bzw. lade ihn einmal neu (F5).

---

## 6. Im Livestream

**Das muss während des ganzen Streams offen bleiben:**

- **Intiface Central** mit gestartetem Server.
- **Chrome bzw. Edge mit dem Livestream-Tab.** Der Tab darf im Hintergrund liegen, aber nicht geschlossen werden. Toy-Link liest nur mit, solange der Livestream in einem Tab geöffnet ist. Nutzt du die Funktion **Speicher sparen** (Chrome: *Einstellungen → Leistung*; Edge: *Ruhezustand für Tabs*), trag dort `joyclub.de` bei den Websites ein, die immer aktiv bleiben, damit der Tab nicht schlafen gelegt wird.
- **Dein PC muss wach bleiben.** Geht er in den Ruhemodus oder Standby, reißen die Verbindungen ab. Stell das Energiesparen für die Dauer des Streams ab oder höher. Nach dem Aufwachen: Intiface-Server prüfen und den Livestream-Tab neu laden.
- **Das Toy** eingeschaltet und mit genug Akku. Schaltet es sich selbst ab, verschwindet es aus Intiface; einschalten und in Intiface neu scannen.

Dann spiel wie gewohnt mit, zum Beispiel mit `!duck`, `!turtle`, `!hover` oder den anderen Rennbefehlen. Gewinnst du, schreibt die Arcade kurz darauf etwa „🏁 *Dein Name* gewinnt … und bekommt 50 Punkte!“ in den Chat. Toy-Link erkennt das und dein Toy legt los.

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
| *Ignoriert: nicht der festgelegte Stream* | Die Meldung kam aus einem anderen Livestream als dem festgelegten. Leg den richtigen Stream fest oder heb die Festlegung auf. |
| *Ignoriert: kam von „…“, nicht vom eingetragenen Streamer* | Der Streamer-Name stimmt nicht. Korrigiere ihn oder lass das Feld zum Testen leer. |
| *Kein eigener Name eingetragen* | Trag deinen JOYclub-Namen ein. |
| *Toy-Link ist ausgeschaltet* | Setz den Haken bei **Toy-Link aktiv**. |
| Kasten fehlt ganz | Toy-Link hat noch keine Siegermeldung gesehen. Entweder gab es noch kein Rennen, oder der Streamer hat die Siegermeldungen im Chat nicht eingeschaltet. |

| Meldung / Problem | Lösung |
| --- | --- |
| **„Intiface Central nicht erreichbar“** | Intiface öffnen und den Server starten (▶). Die Intiface-Adresse in Toy-Link muss zum Port in Intiface passen (*Settings → Server Port*, Standard `12345`). Unter Windows prüfen, ob die Firewall-Abfrage abgelehnt wurde (siehe Schritt 2). |
| **„Kein Toy gefunden“** | Toy einschalten und in Intiface unter *Devices* **Start Scanning**, bis es erscheint. Bei Lovense die Lovense-App schließen. Bluetooth am PC eingeschaltet? Am Mac die Bluetooth-Berechtigung prüfen (siehe Schritt 2). |
| **„Intiface antwortet nicht“** | Intiface Central einmal schließen, neu öffnen, Server starten, dann in Toy-Link **Toy suchen**. |
| **Test geht, im Stream passiert nichts** | 1. Was steht unter „Zuletzt im Chat gesehen“? (Tabelle oben) 2. Stimmt dein Name **exakt** mit dem Chat überein? 3. Ist der richtige Stream festgelegt? 4. Hat der Streamer die Siegermeldungen im Chat eingeschaltet? Steht nach dem Rennen keine „… gewinnt …“-Nachricht im Chat, liegt es daran. 5. Livestream-Tab neu laden (F5). |
| **Ging erst, dann nicht mehr** | Meist war der PC kurz im Ruhemodus, das Toy hat sich abgeschaltet oder Intiface wurde geschlossen. Siehe Abschnitt 6. |
| **„Chat-Leser noch nicht aktiv“** | Den Livestream öffnen bzw. den Tab neu laden (F5). |
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

Offene Livestream-Tabs musst du nicht neu laden, Toy-Link klinkt sich selbst wieder ein. Deine Einstellungen (Name, Stärke, festgelegter Stream usw.) bleiben erhalten. Welche Version du hast, steht auf der Kachel unter `chrome://extensions`. Was sich geändert hat, steht im [CHANGELOG](CHANGELOG.md).

---

## 9. Deinstallieren

1. `chrome://extensions` bzw. `edge://extensions` öffnen.
2. Bei Toy-Link auf **Entfernen** klicken.
3. Den Toy-Link-Ordner löschen. Den Entwicklermodus kannst du wieder ausschalten.

---

## 10. Datenschutz und Sicherheit

- **Nur lesen:** Toy-Link liest auf `joyclub.de` ausschließlich die Chatnachrichten im Livestream mit und sucht darin nach Arcade-Meldungen mit deinem Namen. Es schreibt nichts in den Chat und klickt nichts an.
- **Nichts verlässt deinen PC:** Verbindungen gibt es nur zu Programmen auf deinem eigenen Rechner (`127.0.0.1`): zu Intiface Central und, falls auf demselben PC eine JOYclub Arcade läuft, zu deren Fehlerprotokoll. Das betrifft praktisch nur Streamer, die Toy-Link selbst testen. Bei Zuschauern läuft keine Arcade, dort geht diese Meldung ins Leere. Es gibt keine Server im Internet, keine Analyse und kein Tracking.
- **Gespeichert wird nur lokal im Browser:** dein Name, der Streamer-Name, der festgelegte Stream (Adresse und Titel), die Stärke, die Schalter, Zeit und Art der letzten Auslösung sowie die zuletzt erkannte Siegermeldung (für die Anzeige „Zuletzt im Chat gesehen“).
- **Berechtigungen** – und wofür sie gebraucht werden:

  | Berechtigung | Wofür |
  | --- | --- |
  | Zugriff auf `joyclub.de` | Den Livestream-Chat mitlesen |
  | `storage` | Deine Einstellungen speichern |
  | `tabs` | Beim Festlegen erkennen, welcher Livestream im aktuellen Tab offen ist |
  | `scripting` | Nach Installation oder Update den Chat-Leser in schon offene JOYclub-Tabs einspielen |
  | Zugriff auf `127.0.0.1:8766` | Diagnose an eine Arcade auf demselben PC (nur für Streamer relevant) |

  Andere Webseiten liest Toy-Link nicht.
- **Schutz vor Missbrauch:** Mit festgelegtem Stream zählen nur Meldungen aus diesem Stream, mit eingetragenem Streamer-Namen nur dessen Meldungen. Nach jedem Signal gibt es 8 Sekunden Sperre. Die Stärke deckelst du selbst.
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
Nur über eine echte Siegermeldung mit deinem Namen. Leg den Stream fest, dann zählen ausschließlich Meldungen aus diesem Stream vom Konto des Streamers.

**Ich schaue bei mehreren Streamern zu.**
Leg jeweils den Stream fest, in dem du gerade mitspielst, oder heb die Festlegung auf. Dann reagiert Toy-Link in jedem Livestream mit Arcade.

**Ich habe meinen JOYclub-Namen geändert.**
Trag den neuen Namen im Toy-Link-Fenster ein, fertig.

**Funktioniert das auch mit anderen Browsern (Firefox, Safari, Opera)?**
Offiziell nur mit Chrome und Edge. Brave und Opera basieren auf Chrome und funktionieren meist ebenfalls über den Entwicklermodus.

---

## 12. Für Streamer

Damit Toy-Link bei deinen Zuschauern reagiert, muss die Arcade Siegermeldungen in den Chat schreiben:

- Im **Regiepult → Optionen** den Schalter **„Toy-Link: Sieger und Jackpots immer im Chat melden“** einschalten. Damit gehen nur diese Meldungen in den Chat, auch wenn die übrigen Chat-Antworten aus sind.
- Die Arcade-Chrome-Erweiterung muss verbunden sein (grüner Punkt oben rechts im Regiepult).
- Sag deinen Zuschauern, dass sie in deinem Stream auf **Diesen Stream festlegen** klicken sollen.

Diesen Link kannst du im Stream oder in deinem Profil teilen, sobald das Repo öffentlich ist:
`https://github.com/tobias-dev-collab/joyclub-arcade-toy-link`

---

## 13. Lizenz

[MIT-Lizenz](LICENSE): Du darfst Toy-Link frei nutzen, verändern und weitergeben, solange der Lizenzhinweis erhalten bleibt. Die Nutzung erfolgt ohne Gewähr.
