# Förderverein U20 Herren Lacrosse – Landing Page

Statische Landing Page (reines HTML, CSS und ein wenig JavaScript) für einen Förderverein
der männlichen U20-Nationalmannschaft im Deutschen Lacrosse Verband (DLaxV).

- Kein Build-Schritt, kein Framework, keine Abhängigkeiten
- Keine Cookies, kein Tracking, keine externen Schriften (DSGVO-freundlich, kein Cookie-Banner nötig)
- Responsive (Mobile first), barrierearm (Skip-Link, Fokus-Styles, reduzierte Bewegung)
- Impressum und Datenschutzerklärung nach DDG, MStV und DSGVO als Vorlage mit Platzhaltern

## Struktur

```
index.html          Landing Page
impressum.html      Impressum (Vorlage, Platzhalter ersetzen)
datenschutz.html    Datenschutzerklärung (Vorlage, Platzhalter ersetzen)
css/style.css       Stylesheet, Farben in :root anpassen
js/main.js          Mobile-Menü, Scroll-Animation, IBAN kopieren
assets/img/         Bild-Platzhalter (SVG) und Logo
assets/docs/        Ablage für Mitgliedsantrag, Satzung (PDF)
.github/workflows/  Deployment auf GitHub Pages
```

## Lokal ansehen

Datei `index.html` direkt im Browser öffnen. Oder mit einem beliebigen Webserver, zum Beispiel:

```
python3 -m http.server 8000
```

## Bilder ersetzen

Die Platzhalter liegen in `assets/img/` als SVG mit eingezeichneter Zielgröße.
Eigene Fotos (JPG/WebP) einfügen und im HTML den Dateinamen im `src`-Attribut anpassen.

| Datei                    | Verwendung                  | Empfohlene Größe |
|--------------------------|-----------------------------|------------------|
| hero-team.svg            | Hero-Hintergrund (Teamfoto) | 1600 x 900       |
| action-1.svg bis 3       | Spielszenen                 | 1200 x 800       |
| player-1.svg bis 3       | Spieler-Portraits           | 800 x 1000       |
| vorstand-1.svg bis 3     | Vorstand                    | 600 x 600        |
| sponsor-1.svg bis 4      | Partner-Logos               | 400 x 200        |
| logo.svg / favicon.svg   | Vereinslogo                 | quadratisch      |
| og-image.svg             | Social-Media-Vorschau       | 1200 x 630       |

Fotos von Spielern nur mit schriftlicher Einwilligung veröffentlichen (bei Minderjährigen auch der Eltern).

## Farben anpassen

In `css/style.css` ganz oben im Block `:root`:

```css
--c-black: #101214;  /* Schwarz */
--c-gold:  #F2B705;  /* Gold */
--c-red:   #D42A2A;  /* Rot */
```

Die Werte orientieren sich an den Nationalfarben, die der DLaxV im Auftritt verwendet.
Bitte mit dem offiziellen Logo bzw. den CI-Vorgaben des Verbands abgleichen und die
Verwendung von Verbandsname und -logo mit dem DLaxV abstimmen.

## Veröffentlichen

### GitHub Pages (empfohlen für den Entwurf)

1. Repository → **Settings → Pages**
2. Unter **Build and deployment → Source** die Option **GitHub Actions** wählen
3. Der Workflow `.github/workflows/pages.yml` läuft bei jedem Push auf `main`
   und veröffentlicht die Seite unter
   https://kuekerino.github.io/foerderverein-dummy/

Alternative ohne Workflow: Source **Deploy from a branch**, Branch `main`, Ordner `/ (root)`.
Die Datei `.nojekyll` sorgt dafür, dass GitHub die Dateien unverändert ausliefert.

### Überall sonst

Da es nur statische Dateien sind, reicht es, den Repository-Inhalt hochzuladen:

- Netlify, Cloudflare Pages, Vercel: Repository verbinden, Build-Befehl leer lassen, Publish-Verzeichnis `.`
- Klassischer Webhoster (FTP/SFTP): Alle Dateien in das Web-Verzeichnis kopieren
- Eigener Server: Ordner mit nginx, Apache oder Caddy ausliefern

Nach einem Hoster-Wechsel den Abschnitt „Hosting“ in `datenschutz.html` anpassen.

## Vor Veröffentlichung erledigen

- [ ] Alle Platzhalter in `impressum.html` und `datenschutz.html` ersetzen (gelb markiert)
- [ ] Vereinsname, Adresse, E-Mail und Telefon in `index.html` (Kontakt, Footer) eintragen
- [ ] IBAN, BIC und Bank im Abschnitt „Spenden“ eintragen
- [ ] Beitragsstufen an die Beitragsordnung anpassen
- [ ] `assets/docs/mitgliedsantrag.pdf` und `satzung.pdf` ablegen
- [ ] Bilder ersetzen, Bildnachweise im Impressum ergänzen
- [ ] Termine aktualisieren
- [ ] Verwendung von DLaxV-Name und -Logo mit dem Verband klären
