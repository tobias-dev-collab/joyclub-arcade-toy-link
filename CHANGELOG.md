# Changelog

## 1.0.4 – 2026-10-22
### Zuverlässigere Erkennung
- Siegermeldungen werden auch erkannt, wenn JOYclub Chat-Elemente wiederverwendet und neue Nachrichten hineinschreibt. Jede Meldung wird genau einmal ausgewertet.
- Ersatzweg, falls der Chat bei Zuschauern anders aufgebaut ist: Neu eingefügte Chatzeilen werden direkt nach Arcade-Meldungen durchsucht, der Absender wird aus der umgebenden Zeile gelesen.
- Zusätzliche Prüfung alle 2 Sekunden als Sicherheitsnetz.
- Erkennt auch Siegermeldungen ohne Punkteangabe und den Renn-Namen „Penis-Rennen“.
- Namensvergleich ignoriert jetzt neben Groß- und Kleinschreibung auch Emoji, Geschlechtssymbole und doppelte Leerzeichen.

### Fehlersuche
- Neuer Kasten „Zuletzt im Chat gesehen“ im Toy-Link-Fenster: letzte erkannte Siegermeldung und warum ausgelöst wurde oder nicht.
- Anzeige, ob der Chat-Leser auf der Livestream-Seite aktiv ist.
- Läuft auf demselben PC eine JOYclub Arcade, gehen kurze Diagnosezeilen an deren Protokoll (`127.0.0.1:8766`). Dafür neue Berechtigung für diese lokale Adresse.

## 1.0.0 – 2026-10-22
- Erste Version: Toy vibriert über Intiface Central bei Sieg, Platz 2/3 und Jackpot in der JOYclub Arcade.
- Einstellbar: eigener Name, Streamer-Name, Stärke, Auslöser einzeln, Intiface-Adresse.
- Toy suchen, Test und Stopp direkt im Erweiterungsfenster.
