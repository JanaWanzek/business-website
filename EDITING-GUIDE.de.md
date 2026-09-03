# Anleitung zum Bearbeiten der Website (für Nicht-Programmierer:innen)

Diese Anleitung richtet sich an alle, die Texte, Farben, Bilder oder das Layout dieser
Website ändern möchten — **ganz ohne Programmierkenntnisse**. Sie zeigt genau, wo was
zu finden ist und wie man Änderungen vorher in Ruhe ansehen kann, bevor sie jemand
anderes sieht.

Die Website ist mit einem Framework namens **Angular** gebaut. Das bedeutet nur, dass
die Seite in viele kleine Dateien aufgeteilt ist statt in eine einzige riesige Datei —
sobald man das Muster kennt, findet man sich schnell zurecht.

---

## 1. Einmalige Einrichtung (nur einmal nötig)

Du brauchst drei kostenlose Programme auf deinem Computer:

1. **Visual Studio Code** (der Editor, mit dem du Dateien öffnest und änderst)
   → https://code.visualstudio.com/
2. **Node.js** (damit du die Website auf deinem eigenen PC laufen lassen kannst, um
   Änderungen anzusehen)
   → https://nodejs.org/ (die Version "LTS" wählen)
3. **Git** (speichert den Verlauf von Änderungen und wird zum Einrichten des Projekts
   gebraucht)
   → https://git-scm.com/downloads

Nachdem Node.js installiert ist, prüfe kurz, ob es funktioniert: Öffne **VS Code**,
gehe im oberen Menü auf **Terminal → New Terminal** und tippe:

```
node -v
```

Wenn eine Versionsnummer erscheint (z. B. `v20.x.x`), ist alles bereit.

---

## 2. Das Projekt öffnen

1. Öffne **VS Code**.
2. **File → Open Folder…** → den Projektordner `jana-website` auswählen.
3. Öffne das eingebaute Terminal: **Terminal → New Terminal**.
4. Nur beim allerersten Mal: Installiere die benötigten Pakete, indem du eintippst:

   ```
   npm install
   ```

   (Das lädt alles herunter, was die Website zum Laufen braucht. Kann ein bis zwei
   Minuten dauern. Das machst du nur einmal — außer es wird dir später erneut
   gesagt.)

---

## 3. Änderungen live ansehen (sehr wichtig!)

Nie raten, wie eine Änderung aussieht — immer live ansehen:

1. Im VS-Code-Terminal eintippen:

   ```
   npm start
   ```

2. Warten, bis eine Meldung erscheint, dass alles erfolgreich kompiliert wurde.
3. Einen Webbrowser öffnen und zu **http://localhost:4200** gehen.
4. Das Terminal währenddessen laufen lassen. Ab jetzt gilt: **jedes Mal, wenn du eine
   Datei speicherst, aktualisiert sich der Browser automatisch** und zeigt deine
   Änderung innerhalb von ein bis zwei Sekunden.
5. Zum Beenden der Vorschau ins Terminal klicken und `Ctrl + C` drücken.

Diese Vorschau ist nur auf deinem eigenen Computer sichtbar — ein sicherer
Spielplatz. Nichts davon geht live auf die echte Website, bis es bewusst
veröffentlicht wird.

---

## 4. Wie die Website aufgebaut ist

Jede Seite der Website liegt in einem eigenen Ordner unter `src/app/features/`.
Jeder Ordner enthält eine `.html`-Datei (der Text/die Struktur, die man sieht) und
eine passende `.scss`-Datei (Farben/Abstände/Design nur für diesen Bereich).

| Seite (was man im Browser sieht) | Ordner zum Öffnen |
|---|---|
| Startseite — Hero-Banner (oben) | `src/app/features/home/components/hero/` |
| Startseite — Bereich "Über mich" | `src/app/features/home/components/about/` |
| Startseite — Leistungs-Vorschau-Karten | `src/app/features/home/components/services-preview/` |
| Startseite — Testimonials | `src/app/features/home/components/testimonials/` |
| Startseite — FAQ | `src/app/features/home/components/faq/` |
| Seite "Für Organisationen" | `src/app/features/services/services/` |
| Seite "Coaching" | `src/app/features/coaching/coaching/` |
| Seite "Workshops" | `src/app/features/workshops/workshops/` |
| Seite "Kontakt" | `src/app/features/contact/contact/` |
| Obere Navigationsleiste | `src/app/core/component/navbar/` |
| Footer (unten auf jeder Seite) | `src/app/core/component/footer/` |

In jedem dieser Ordner findest du immer 3 Dateitypen — **nur die ersten beiden
solltest du anfassen**:

- **`.html`** → Text und Struktur (gefahrlos zu bearbeiten)
- **`.scss`** → Farben, Abstände, Schriftarten für diesen Bereich (gefahrlos zu
  bearbeiten)
- **`.ts`** → die Programmierlogik (⚠️ bitte nicht anfassen, außer eine
  Entwickler:in sagt dir ausdrücklich, dass es okay ist)

---

## 5. Texte ändern

1. Öffne die passende `.html`-Datei aus der Tabelle oben (z. B. für die Überschrift
   auf der Startseite die Datei `hero.html`).
2. Finde den Satz, den du ändern willst, zwischen den Zeichen `>` und `<`. Beispiel:

   ```html
   <h1>Jana Wanzek</h1>
   <p class="tagline">Struktur. Haltung. Wirkung.</p>
   ```

   Um den Slogan zu ändern, einfach den Text zwischen `<p class="tagline">` und
   `</p>` neu eintippen — alles andere (die spitzen Klammern `<...>`) genau so
   lassen, wie es ist.
3. Datei speichern (`Ctrl + S`). Im Browser nachsehen — er aktualisiert sich
   automatisch.

**Faustregel:** nur die Wörter ändern. Niemals `<...>`-Symbole löschen oder
hinzufügen, außer du folgst einer strukturellen Änderung wie in Abschnitt 7
beschrieben.

---

## 6. Farben ändern

Fast alle Farben der Website kommen aus **einer zentralen Datei** — so kannst du das
Farbschema der ganzen Website ändern, indem du nur an einer Stelle ein paar Werte
anpasst:

📄 Öffne **`src/styles.scss`** — ganz oben steht Folgendes:

```scss
:root {
  --primary: #3D5A50;        /* Hauptfarbe der Marke (Buttons, Links, Akzente) */
  --primary-dark: #2A3F37;   /* dunklerer Ton, für Hover-Effekte */
  --primary-light: #6B8C80;  /* hellerer Ton, für kleine Beschriftungen */
  --accent: #C4A882;         /* zweite Akzentfarbe (z. B. Trennlinien) */

  --text-dark: #1A1A1A;      /* Haupttextfarbe */
  --text-medium: #444;
  --text-light: #777;

  --background-light: #F7F5F2;
  --background-white: #FFFFFF;
  --border-light: #E8E4DF;
}
```

Jede Farbe ist als "Hex-Code" geschrieben, z. B. `#3D5A50`. So änderst du eine Farbe:

1. Eine neue Farbe visuell mit einem kostenlosen Farbwähler aussuchen, z. B.
   https://htmlcolorcodes.com/
2. Den dort angezeigten Code kopieren (beginnt mit `#`, z. B. `#5A7D6C`).
3. Den bestehenden Code in der passenden Zeile ersetzen — dabei das `#` und das
   Semikolon `;` am Ende beibehalten.
4. Speichern und im Browser nachsehen — da jede Seite dieselben Variablen
   verwendet, aktualisiert eine einzige Änderung Buttons, Überschriften und Akzente
   überall gleichzeitig.

Wenn du die Farbe von nur **einem bestimmten Bereich** ändern willst (nicht die
ganze Website), öffne stattdessen die eigene `.scss`-Datei dieses Bereichs (siehe
Tabelle in Abschnitt 4) und ändere den Farbwert dort.

---

## 7. Strukturelle Änderungen (Blöcke verschieben, duplizieren, entfernen)

Die `.html`-Dateien bestehen aus wiederholten "Blöcken", jeweils eingerahmt von
einem Tag wie `<div>` oder `<section>`. Du kannst ganze Blöcke gefahrlos
verschieben oder duplizieren, solange du **immer den gesamten Block verschiebst/
kopierst — vom öffnenden Tag bis zum passenden schließenden Tag**.

Beispiel — die Seite "Für Organisationen" hat 4 sich wiederholende Angebots-Karten:

```html
<div class="offer-item">
  <h3>Prozessbegleitung</h3>
  <p>Begleitung von Veränderungs- und Entwicklungsprozessen – von der Analyse bis zur Umsetzung.</p>
</div>
```

- **Um eine 5. Karte hinzuzufügen**, einen ganzen Block
  `<div class="offer-item"> ... </div>` markieren, kopieren, direkt danach
  einfügen und den Text anpassen.
- **Um eine Karte zu entfernen**, einen ganzen Block (vom öffnenden `<div ...>`
  bis zum passenden `</div>`) markieren und löschen.
- **Um Karten umzusortieren**, einen ganzen Block ausschneiden und an der neuen
  Stelle einfügen.

💡 **Tipp:** In VS Code kannst du direkt hinter ein öffnendes Tag wie
`<div class="offer-item">` klicken — das passende schließende `</div>` wird dann
hervorgehoben. So siehst du genau, wo ein Block anfängt und aufhört, und
zerschneidest ihn nicht versehentlich.

⚠️ Sieht die Seite nach einer strukturellen Änderung kaputt aus (Dinge verrutscht
oder fehlen), wurde meist ein Tag ohne sein passendes Gegenstück gelöscht. Mit
`Ctrl + Z` rückgängig machen und nochmal versuchen.

---

## 8. Bilder hinzufügen und ändern

Alle echten Bilder dieser Website liegen im Ordner **`public/`** (ganz oben im
Projekt, neben `src/`) — das ist der Ordner, den Angular tatsächlich
veröffentlicht. Eine Datei, die dort als `public/mein-foto.jpg` abgelegt wird,
wird im HTML einfach als `src="mein-foto.jpg"` angesprochen (ohne Ordnernamen).

### Ein bestehendes Foto austauschen

1. Die neue Bilddatei per Drag & Drop in den Ordner `public/` ziehen (in der
   Dateiliste links in VS Code oder im Windows-Explorer).
2. Herausfinden, wo das alte Bild in einer `.html`-Datei eingebunden ist, z. B. in
   `about.html`:

   ```html
   <img src="jana.jpg" alt="Jana Wanzek – Prozessbegleiterin und Coach">
   ```

3. `src="jana.jpg"` durch den neuen Dateinamen ersetzen, z. B.
   `src="neues-foto.jpg"`.
4. Auch den Text bei `alt="..."` anpassen, damit er das neue Bild beschreibt (das
   hilft für Barrierefreiheit und Suchmaschinen).

### Ein komplett neues Foto hinzufügen (wo vorher keins war)

1. Die Bilddatei in `public/` ziehen, z. B. `public/team-event.jpg`.
2. Die `.html`-Datei des Bereichs öffnen, in dem das Bild erscheinen soll (siehe
   Tabelle in Abschnitt 4).
3. An der gewünschten Stelle eine neue `<img>`-Zeile eintippen, nach diesem Muster:

   ```html
   <img src="team-event.jpg" alt="Kurze Beschreibung des Bildes">
   ```

   Um zum Beispiel ein zweites Foto im Bereich "Über mich" (`about.html`)
   einzufügen, könntest du es direkt nach dem bestehenden Bild-Block ergänzen:

   ```html
   <div class="image">
     <img src="jana.jpg" alt="Jana Wanzek – Prozessbegleiterin und Coach">
   </div>
   <div class="image">
     <img src="team-event.jpg" alt="Jana beim Teamworkshop">
   </div>
   ```

4. Speichern und im Browser nachsehen. Ein frisch hinzugefügtes Bild braucht oft
   noch etwas CSS, damit es nicht riesig oder seltsam platziert wirkt — in der
   passenden `.scss`-Datei dieses Bereichs nach einer Stilregel wie
   `.image img { ... }` suchen und für dein neues Bild wiederverwenden bzw.
   anpassen (z. B. `width: 100%; border-radius: 8px;`).

### Tipps für Bilddateien

- **Benennung:** nur Kleinbuchstaben, Zahlen und Bindestriche verwenden, keine
  Leerzeichen (`team-event.jpg`, nicht `Team Event.jpg`) — so vermeidest du
  kaputte Links.
- **Format:** `.jpg` für Fotos, `.png` für Bilder mit Transparenz, `.webp` für
  kleinere Dateigrößen.
- **Dateigröße:** Fotos möglichst unter ca. 500 KB halten, damit die Website
  schnell lädt. Kostenlose Tools wie https://squoosh.app/ können ein Bild vor dem
  Hinzufügen komprimieren.

---

## 9. Fehler sicher rückgängig machen

- **Während des Bearbeitens:** `Ctrl + Z` macht die letzte Änderung in der
  aktuellen Datei rückgängig.
- **Größeres Sicherheitsnetz:** Vor einer riskanten Änderung die ganze Datei
  kopieren und außerhalb des Projekts (z. B. auf dem Desktop) als Backup
  einfügen. Geht etwas kaputt, einfach das Backup zurückkopieren.
- Falls Git eingerichtet ist (bei der Person nachfragen, die dir dieses Projekt
  gegeben hat), wird jede gespeicherte Version des Projekts außerdem automatisch
  mitverfolgt — Änderungen gehen dadurch nie wirklich verloren.

---

## 10. Änderungen live veröffentlichen

Alles oben Beschriebene ändert nur die **Vorschau auf deinem eigenen Computer**
(`localhost:4200`). Es auf der echten, live geschalteten Website sichtbar zu
machen, ist ein separater, bewusster Schritt (normalerweise von der Person
erledigt, die Hosting/Deployment verwaltet). Sobald du mit deinen Änderungen in
der Vorschau zufrieden bist, gib ihr/ihm Bescheid, damit sie veröffentlicht werden
können.

---

## Schnellübersicht

| Ich möchte... | So geht's |
|---|---|
| Eine Überschrift oder einen Absatz ändern | Die `.html`-Datei der Seite öffnen (siehe Tabelle in §4), Text zwischen den Tags ändern |
| Die Hauptfarben der Website ändern | Den `:root { ... }`-Block ganz oben in `src/styles.scss` bearbeiten |
| Nur das Aussehen eines Bereichs ändern | Die eigene `.scss`-Datei dieses Bereichs bearbeiten |
| Ein Foto austauschen | Datei in `public/` ablegen, `src="..."` in der `.html`-Datei anpassen |
| Ein komplett neues Foto hinzufügen | Datei in `public/` ablegen, neue `<img src="...">`-Zeile in der `.html`-Datei ergänzen |
| Eine wiederholte Karte/einen Block hinzufügen/entfernen/umsortieren | Den ganzen Block kopieren/ausschneiden/einfügen — vom öffnenden bis zum passenden schließenden Tag |
| Meine Änderungen ansehen | `npm start` ausführen, laufen lassen, `http://localhost:4200` öffnen |
| Einen Fehler rückgängig machen | `Ctrl + Z`, oder aus einer Backup-Kopie der Datei wiederherstellen |
