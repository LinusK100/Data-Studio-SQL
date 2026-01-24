# Website-Prompt: UML Modeler - Professionelle Präsentations-Website

## Projekt-Übersicht

Erstelle eine moderne, professionelle Website zur Präsentation der iOS-App **"UML Modeler"** (auch bekannt als "UML-Modellierer"). Die Website soll die App visuell ansprechend präsentieren, alle Features detailliert erklären und Besucher zum Download motivieren.

---

## App-Informationen

### App-Name
**UML Modeler** (Deutsch: UML-Modellierer)

### App-Beschreibung
Eine leistungsstarke, vollständig offline-fähige iOS-App zur Erstellung professioneller UML-Klassendiagramme mit visueller Modellierung und Code-Generierung. Entwickelt speziell für iPhone und iPad mit modernem SwiftUI-Design.

### Hauptnutzen
- **Zeitersparnis**: Automatischer Code-Import wandelt Code in Sekunden in professionelle UML-Diagramme um
- **Professionelle Visualisierung**: Erstellen Sie übersichtliche Diagramme für Dokumentation, Präsentationen und Team-Kommunikation
- **Vollständig offline**: Alle Funktionen arbeiten ohne Internetverbindung
- **Native iOS-Erfahrung**: Modernes SwiftUI-Design mit intuitiver Bedienung

---

## Hauptfeatures (Detailliert)

### 1. Automatischer Code-Import
- **Unterstützte Sprachen**: Swift, Java, Python, C#
- **Import-Methoden**: 
  - Datei-Upload direkt aus dem Dateisystem
  - Direktes Einfügen von Code-Text
- **Automatische Erkennung**: 
  - Klassen werden automatisch erkannt
  - Attribute werden extrahiert
  - Methoden werden identifiziert
  - Konstruktoren werden erkannt
  - Getter/Setter werden unterschieden

### 2. UML-Klassen erstellen
- Professionelle Darstellung von UML-Klassen
- Attribute mit Datentypen und Sichtbarkeiten
- Methoden mit Parametern und Rückgabetypen
- Konstruktoren mit spezieller Hervorhebung
- Getter/Setter mit automatischer Erkennung
- Unterstützung für statische Elemente

### 3. UML-Objekte modellieren
- Visualisierung konkreter Objektinstanzen
- Spezifische Attributwerte für Objekte
- Separate Design-Einstellungen für Objekte
- Unterschiedliche Darstellung zu Klassen

### 4. Verbindungen erstellen
- **Unterstützte Beziehungstypen**:
  - Assoziation
  - Vererbung (Inheritance)
  - Abhängigkeit (Dependency)
  - Aggregation
  - Komposition
- Intelligente Verbindungslinien mit automatischer Routierung
- Beschriftungen für Verbindungen
- Multiplizitäten (Kardinalitäten)

### 5. Datenstrukturen modellieren
- Arrays und Listen
- Bäume (Trees)
- Graphen (Graphs)
- Stacks und Queues
- Hash-Tabellen
- Weitere gängige Datenstrukturen

### 6. Code-Generierung
- **Unterstützte Zielsprachen**:
  - Swift
  - Java
  - Python
  - C#
- Generierung aus vollständigen UML-Diagrammen
- Beibehaltung von Struktur und Beziehungen
- Exportierbarer Code für direkte Verwendung

### 7. Projektverwaltung
- **Organisation**:
  - Ordnerstruktur für Projekte
  - Verschachtelte Ordner
  - Favoriten-System
  - Suchfunktion
- **Projekt-Metadaten**:
  - Name, Beschreibung
  - Anwendung, Aufgabe, Spezifikation
  - Erstellungs- und Änderungsdatum
- **Sortierung**: Nach Name, Datum, Favoriten

### 8. Export-Funktionen
- **Formate**:
  - PNG (hochauflösend)
  - PDF (vektorbasiert)
- **Selektiver Export**:
  - Auswahl spezifischer Elemente
  - Design-Einstellungen ein-/ausschließen
  - Projekt-Konfigurationen exportieren
- **Projekt-Backup**:
  - `.umlproject` Format (komplettes Projekt)
  - `.json` Format (strukturierte Daten)
  - Vollständige Wiederherstellung möglich

### 9. Design-Anpassung
- **Design-Presets**:
  - **Classic**: Traditionelles UML-Design
  - **Modern**: Zeitgemäßes, cleanes Design
  - **Minimal**: Minimalistisches Design
  - **Colorful**: Buntes, ansprechendes Design
- **Anpassbare Elemente**:
  - Hintergrundfarben (UML-Klassen und -Objekte)
  - Rahmenfarben
  - Header-Farben (Hintergrund und Text)
  - Attribut-Farben
  - Methoden-Farben
  - Konstruktor-Farben (Orange)
  - Getter/Setter-Farben (Grün)
  - Trennlinien-Farben
- **Styling-Optionen**:
  - Rahmenbreite
  - Eckenradius
  - Schatten (Radius und Opazität)
  - Trennlinien-Breite
  - Schriftgrößen (Header, Attribute, Methoden, Labels)
- **Anzeige-Optionen**:
  - Labels für Attribute ein/aus
  - Labels für Methoden ein/aus
  - Labels für Getter/Setter ein/aus
  - Trennlinien ein/aus
- **Custom Presets**: Speichern eigener Design-Konfigurationen

### 10. Canvas-Features
- **Grid-Snap**: Präzise Ausrichtung am Raster
- **Zoom**: Hinein- und Herauszoomen
- **Mehrere Szenen**: Verschiedene Ansichten pro Projekt
- **Präzise Positionierung**: Pixelgenaue Platzierung
- **Drag & Drop**: Intuitive Bedienung
- **Multi-Touch**: Unterstützung für Gesten

### 11. Zusätzliche Features
- **UML-Notizen**: Textnotizen auf dem Canvas
- **Dark Mode**: Vollständige Unterstützung
- **iPad-Optimierung**: Spezielle Layouts für größere Bildschirme
- **iPhone-Optimierung**: Angepasste Navigation für kleinere Displays
- **Onboarding**: Willkommens-Tutorial für neue Nutzer
- **Hilfe & Support**: Integrierte Hilfe-Sektion mit Tipps und Best Practices

---

## Design-System für die Website

### Farbpalette (basierend auf App-Design)

#### Primärfarben
- **Blau**: `#007AFF` (iOS System Blue) - Hauptakzent
- **Lila**: `#AF52DE` (iOS System Purple) - Sekundärakzent
- **Orange**: `#FF9500` (iOS System Orange) - Hervorhebung (Konstruktoren)
- **Grün**: `#34C759` (iOS System Green) - Erfolg/Aktionen (Getter/Setter)
- **Türkis**: `#5AC8FA` (iOS System Teal) - Information

#### Design-Preset-Farben
- **Classic**: Neutrale Grautöne mit blauen Akzenten
- **Modern**: Weiß/Grau mit subtilen Schatten, blaue Akzente
- **Minimal**: Sehr reduzierte Farbpalette, viel Weißraum
- **Colorful**: Lebendige Farben für verschiedene Elemente

#### Hintergrundfarben
- **Light Mode**:
  - Primär: `#FFFFFF` (Weiß)
  - Sekundär: `#F2F2F7` (iOS System Gray 6)
  - Tertiär: `#E5E5EA` (iOS System Gray 5)
- **Dark Mode**:
  - Primär: `#000000` (Schwarz)
  - Sekundär: `#1C1C1E` (iOS System Gray 6 Dark)
  - Tertiär: `#2C2C2E` (iOS System Gray 5 Dark)

#### Textfarben
- **Light Mode**: `#000000` (Schwarz) für Primärtext, `#3A3A3C` für Sekundärtext
- **Dark Mode**: `#FFFFFF` (Weiß) für Primärtext, `#EBEBF5` für Sekundärtext

### Typografie
- **Hauptschrift**: System Font (San Francisco auf iOS, -apple-system auf Web)
- **Überschriften**:
  - H1: 42px, Bold, Rounded Design
  - H2: 32px, Bold
  - H3: 24px, Semibold
  - H4: 20px, Medium
- **Body-Text**: 16px, Regular
- **Kleiner Text**: 14px, Regular
- **Labels**: 12px, Medium

### Design-Elemente

#### Cards (Karten)
- **Standard Card**:
  - Hintergrund: System Background
  - Eckenradius: 18px
  - Border: Subtile Linie (0.5-1.2px, abhängig vom Theme)
  - Schatten: Leicht (Radius: 4-14px, Opacity: 0.06-0.4)
  - Padding: 20-24px

- **Enhanced Card**:
  - Stärkerer Schatten
  - Etwas dickere Border
  - Für wichtige Inhalte

- **Modern Card**:
  - Minimalistischer
  - Sehr subtile Borders
  - Weniger Schatten

#### Buttons
- **Primary Button**:
  - Hintergrund: Blau-Gradient oder solide Farbe
  - Text: Weiß
  - Eckenradius: 12px
  - Padding: 16px horizontal, 12px vertikal
  - Hover-Effekt: Leichtes Anheben (Transform: translateY(-2px))

- **Secondary Button**:
  - Hintergrund: Transparent mit Border
  - Text: Primärfarbe
  - Border: 1.5px

#### Badges & Icons
- **Icons**: SF Symbols Style (falls möglich) oder ähnliche Outline-Icons
- **Badge-Hintergrund**: Farbige Opacity (12-40% je nach Theme)
- **Icon-Größen**: 24px, 32px, 48px

### Animationen
- **Standard-Dauer**: 0.3s
- **Erweiterte Dauer**: 0.4s
- **Easing**: ease-in-out
- **Hover-Transitions**: 0.2s
- **Scroll-Animationen**: Fade-in beim Scrollen

### Spacing-System
- **Kleine Abstände**: 8px, 12px
- **Mittlere Abstände**: 16px, 20px, 24px
- **Große Abstände**: 32px, 40px, 48px
- **Sektion-Abstände**: 64px, 80px, 96px

---

## Website-Struktur & Layout

### 1. Hero-Section
- **Layout**: Full-width mit Gradient-Hintergrund
- **Inhalt**:
  - Große Überschrift: "UML Modeler" mit Gradient-Text (Blau zu Lila)
  - Untertitel: "Erstellen Sie professionelle UML-Diagramme direkt auf iPhone & iPad"
  - Call-to-Action Button: "Jetzt herunterladen" (App Store Link)
  - Hero-Image: Screenshot der App oder Mockup
- **Design**: 
  - Gradient-Hintergrund (Blau zu Lila, diagonal)
  - Zentrierter Inhalt
  - Subtile Animation beim Laden

### 2. Features-Section
- **Layout**: Grid-Layout (2-3 Spalten auf Desktop, 1 Spalte auf Mobile)
- **Feature-Cards**: Jede Card zeigt:
  - Icon (SF Symbols Style)
  - Titel
  - Beschreibung
  - Optional: Screenshot oder Illustration
- **Features zu zeigen**:
  1. Automatischer Code-Import (Blau)
  2. UML-Klassen erstellen (Grün)
  3. Verbindungen (Lila)
  4. Code-Generierung (Orange)
  5. Projektverwaltung (Türkis)
  6. Export-Funktionen (Indigo)

### 3. Design-Presets-Section
- **Layout**: 4 Spalten (Desktop), 2 Spalten (Tablet), 1 Spalte (Mobile)
- **Preset-Cards**: 
  - Vorschau des Designs
  - Name des Presets
  - Kurze Beschreibung
- **Presets**: Classic, Modern, Minimal, Colorful

### 4. Screenshots-Gallery
- **Layout**: Horizontal scrollbar oder Grid
- **Screenshots zeigen**:
  - Code-Import-Ansicht
  - Canvas mit UML-Diagramm
  - Design-Einstellungen
  - Projektverwaltung
  - Export-Optionen
- **Design**: Moderne Screenshot-Frames (iPhone/iPad Mockups)

### 5. Use-Cases-Section
- **Zielgruppen**:
  - Entwickler
  - Studenten
  - Software-Architekten
  - Teams
- **Layout**: Cards mit Icons und Beschreibungen

### 6. Vorteile-Section
- **Hauptvorteile**:
  - Zeitersparnis durch Automatisierung
  - Vollständig offline
  - Native iOS-Erfahrung
  - Flexible Export-Optionen
- **Layout**: Icons mit kurzen Texten, alternierend links/rechts

### 7. Download-Section
- **Layout**: Prominent, mit App Store Badges
- **Inhalt**:
  - App Store Button (Download)
  - Verfügbarkeit: iPhone & iPad
  - iOS-Version-Anforderung
  - Preis (falls kostenlos oder kostenpflichtig)

### 8. Footer
- **Links**:
  - Datenschutz
  - Impressum
  - Support/Kontakt
  - App Store Link
- **Social Media** (falls vorhanden)
- **Copyright**

---

## Technische Anforderungen

### Responsive Design
- **Mobile First**: Optimiert für iPhone (375px+)
- **Tablet**: iPad (768px+)
- **Desktop**: 1024px+, 1280px+, 1920px+
- **Breakpoints**: 375px, 768px, 1024px, 1280px, 1920px

### Performance
- **Lighthouse Score**: 90+ in allen Kategorien
- **Lazy Loading**: Für Bilder und Screenshots
- **Optimierte Bilder**: WebP-Format mit Fallbacks
- **Minimaler JavaScript**: Nur wo nötig

### Browser-Support
- **Moderne Browser**: Chrome, Safari, Firefox, Edge (letzte 2 Versionen)
- **Mobile Browser**: Safari iOS, Chrome Mobile

### Accessibility
- **WCAG 2.1 AA**: Mindestens Level AA
- **Keyboard Navigation**: Vollständig navigierbar
- **Screen Reader**: Semantisches HTML, ARIA-Labels
- **Kontrast**: Mindestens 4.5:1 für Text

### SEO
- **Meta-Tags**: Vollständige Meta-Description, Open Graph Tags
- **Structured Data**: Schema.org Markup
- **Sitemap**: XML Sitemap
- **Robots.txt**: Korrekt konfiguriert

---

## Content-Vorschläge

### Headlines
- **Hero**: "Professionelle UML-Diagramme. Einfach. Schnell. Offline."
- **Features**: "Alles, was Sie für professionelle UML-Diagramme brauchen"
- **Design**: "Wählen Sie Ihr Design – von Classic bis Colorful"
- **Download**: "Jetzt herunterladen und sofort loslegen"

### Call-to-Actions
- "Jetzt herunterladen"
- "Im App Store ansehen"
- "Features entdecken"
- "Screenshots ansehen"

### Social Proof (falls vorhanden)
- Bewertungen aus dem App Store
- Anzahl der Downloads
- Nutzer-Feedback

---

## Design-Inspiration aus der App

### Stil-Elemente
- **Gradient-Text**: Wie in der App (Blau zu Lila) für Hauptüberschriften
- **Card-basiertes Layout**: Ähnlich der App-Navigation
- **SF Symbols Icons**: Falls möglich, oder ähnliche Outline-Icons
- **Rounded Corners**: 12-18px Eckenradius überall
- **Subtile Schatten**: Leichte Elevation für Cards
- **Smooth Animations**: Sanfte Übergänge und Hover-Effekte

### Farbverwendung
- **Blau**: Für primäre CTAs und wichtige Features
- **Lila**: Für sekundäre Akzente und Verbindungen
- **Orange**: Für Hervorhebungen und Konstruktoren
- **Grün**: Für Erfolgs-Meldungen und Getter/Setter
- **Grau**: Für sekundäre Texte und Borders

---

## Zusätzliche Anforderungen

### Interaktive Elemente
- **Hover-Effekte**: Cards heben sich leicht an
- **Scroll-Animationen**: Fade-in beim Scrollen
- **Smooth Scrolling**: Sanftes Scrollen zu Ankern
- **Parallax-Effekte**: Optional, subtil

### Medien
- **Screenshots**: Hochauflösend, mit iPhone/iPad Frames
- **Videos**: Optional - App-Demo-Video
- **Icons**: Konsistent, im SF Symbols Stil
- **Illustrationen**: Optional - für komplexe Features

### Formulare (falls Support-Kontakt)
- **Kontaktformular**: Minimalistisch, mit Validierung
- **Newsletter**: Optional - für Updates

---

## Technologie-Stack-Empfehlungen

### Option 1: Modern & Statisch
- **Framework**: Next.js oder Astro
- **Styling**: Tailwind CSS
- **Deployment**: Vercel oder Netlify

### Option 2: Traditionell
- **Framework**: React oder Vue.js
- **Styling**: CSS Modules oder Styled Components
- **Deployment**: Beliebiger Hosting-Provider

### Option 3: Einfach & Schnell
- **Framework**: HTML/CSS/JavaScript (Vanilla)
- **Styling**: Custom CSS mit CSS Variables
- **Deployment**: GitHub Pages oder Netlify

---

## Checkliste für die Umsetzung

- [ ] Hero-Section mit App-Name und CTA
- [ ] Features-Section mit allen Hauptfeatures
- [ ] Design-Presets-Vorschau
- [ ] Screenshots-Gallery
- [ ] Use-Cases für verschiedene Zielgruppen
- [ ] Vorteile-Section
- [ ] Download-Section mit App Store Links
- [ ] Responsive Design (Mobile, Tablet, Desktop)
- [ ] Dark Mode Support (optional, aber empfohlen)
- [ ] SEO-Optimierung
- [ ] Accessibility-Features
- [ ] Performance-Optimierung
- [ ] Cross-Browser-Testing
- [ ] Analytics-Integration (optional)

---

## Beispiel-Content für Features

### Feature 1: Automatischer Code-Import
**Icon**: `doc.text.magnifyingglass` oder ähnlich  
**Titel**: "Code automatisch importieren"  
**Beschreibung**: "Laden Sie Code-Dateien oder fügen Sie Code direkt ein. Die App erkennt automatisch Klassen, Methoden und Attribute aus Swift, Java, Python und C#."

### Feature 2: UML-Klassen erstellen
**Icon**: `rectangle.3.group`  
**Titel**: "Professionelle UML-Klassen"  
**Beschreibung**: "Erstellen Sie UML-Klassen mit Attributen, Methoden und Konstruktoren – alles mit professioneller Darstellung."

### Feature 3: Verbindungen
**Icon**: `arrow.left.and.right`  
**Titel**: "Intelligente Verbindungen"  
**Beschreibung**: "Verbinden Sie Elemente mit verschiedenen UML-Beziehungstypen wie Assoziation, Vererbung und Abhängigkeit."

### Feature 4: Code-Generierung
**Icon**: `chevron.left.forwardslash.chevron.right`  
**Titel**: "Code aus Diagrammen generieren"  
**Beschreibung**: "Generieren Sie Code aus Ihren UML-Diagrammen in Swift, Java, Python und C# – perfekt für die Dokumentation."

### Feature 5: Projektverwaltung
**Icon**: `folder.badge.gearshape`  
**Titel**: "Organisierte Projektverwaltung"  
**Beschreibung**: "Organisieren Sie Ihre Diagramme in Ordnern, markieren Sie Favoriten und verwalten Sie mehrere Projekte."

### Feature 6: Export-Funktionen
**Icon**: `square.and.arrow.up`  
**Titel**: "Flexibler Export"  
**Beschreibung**: "Exportieren Sie Diagramme als PNG oder PDF, oder sichern Sie komplette Projekte als Backup-Dateien."

---

## Finale Hinweise

- Die Website sollte das **moderne, clean Design** der App widerspiegeln
- **iOS-Design-Sprache** sollte erkennbar sein (aber nicht zu stark, da es eine Webseite ist)
- **Performance** ist wichtig – schnelle Ladezeiten
- **Mobile-First** Ansatz, da die App primär für iOS ist
- **Klarheit** über die Hauptfunktionen steht im Vordergrund
- **Call-to-Action** sollte prominent und klar sein

---

**Viel Erfolg bei der Umsetzung!** 🚀
