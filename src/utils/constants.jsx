// Feature cards (8) — matching the 5 tabs + project mgmt + export + themes
export const features = [
  {
    id: 1,
    title: 'ER-Canvas',
    description: 'Entities und Beziehungen per Drag & Drop platzieren. Zoom, Grid-Snapping, Szenen-Management und Auto-Layout-Algorithmen inklusive.',
    icon: 'canvas',
    color: '#007AFF',
  },
  {
    id: 2,
    title: 'Entity-Verwaltung',
    description: 'Drei Entity-Typen, vollständiger Attribut-Editor mit 18 Datentypen, Shorthand-Notation und intelligente Attribut-Vorschläge.',
    icon: 'table',
    color: '#34C759',
  },
  {
    id: 3,
    title: 'SQL-Generator',
    description: 'Vollautomatische Erzeugung von CREATE TABLE, PRIMARY KEY, FOREIGN KEY, Junction Tables – formatiert und kommentiert.',
    icon: 'code',
    color: '#FF9500',
  },
  {
    id: 4,
    title: 'Schema-Validierung',
    description: '17+ Validierungsregeln, Normalformen-Prüfung (1NF/2NF/3NF) und Auto-Fix-Vorschläge direkt in der App.',
    icon: 'shield',
    color: '#FF3B30',
  },
  {
    id: 5,
    title: 'Query Editor',
    description: 'SQL-Abfragen schreiben mit Auto-Complete, Snippet-Bibliothek, SQL Explainer, Formatter und Query-History.',
    icon: 'terminal',
    color: '#AF52DE',
  },
  {
    id: 6,
    title: 'Lokale SQLite-Datenbank',
    description: 'Ein-Klick-Erstellung einer SQLite-Datenbank direkt aus dem ER-Modell – mit Demo-Daten und CSV-Import.',
    icon: 'database',
    color: '#5AC8FA',
  },
  {
    id: 7,
    title: 'Projektverwaltung',
    description: 'Projekte in Ordnern organisieren, Favoriten setzen, Papierkorb nutzen und per Reverse Engineering aus SQLite-Dateien importieren.',
    icon: 'folder',
    color: '#5856D6',
  },
  {
    id: 8,
    title: 'Export & Themes',
    description: 'Exportiere als PNG, PDF, SQL oder JSON. Vier Design-Presets und vollständige Dark-Mode-Unterstützung.',
    icon: 'export',
    color: '#FF6B35',
  },
];

// Design Presets (4) — updated for ER/SQL context
export const designPresets = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Klares, reduziertes Design mit dünnen Linien – ideal für professionelle Dokumentation.',
    colors: {
      background: '#FAFAFA',
      border: '#E0E0E0',
      accent: '#000000',
    },
  },
  {
    id: 'classical',
    name: 'Classical',
    description: 'Traditionelles ER-Diagramm-Design mit neutralen Tönen und blauen Akzenten.',
    colors: {
      background: '#F5F5F5',
      border: '#CCCCCC',
      accent: '#007AFF',
    },
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Zeitgemäßes Design mit Schatten und Farbverläufen – für ansprechende Präsentationen.',
    colors: {
      background: '#FFFFFF',
      border: '#E5E5EA',
      accent: '#007AFF',
    },
  },
  {
    id: 'colorful',
    name: 'Colorful',
    description: 'Kräftige Farben für verschiedene Entity-Typen – bunt, lebhaft und leicht lesbar.',
    colors: {
      background: '#F0F0F0',
      border: '#D0D0D0',
      accent: '#AF52DE',
    },
  },
];

// Use Cases (4) — SQL/DB focused
export const useCases = [
  {
    id: 1,
    title: 'Studierende',
    description: 'Perfekt für Datenbankvorlesungen. Lerne SQL und ER-Modellierung visuell und verstehe Datenbankstrukturen intuitiv.',
    icon: 'academic-cap',
  },
  {
    id: 2,
    title: 'Entwickler',
    description: 'Schnelles Prototyping von Datenbankschemas. Entwirf das Modell visuell und erhalte sofort den fertigen SQL-Code.',
    icon: 'code',
  },
  {
    id: 3,
    title: 'Lernende',
    description: 'Einsteiger-freundlich mit integriertem Hilfesystem. Der SQL Explainer erklärt jede Abfrage Klausel für Klausel.',
    icon: 'book-open',
  },
  {
    id: 4,
    title: 'Profis',
    description: 'Vollständiger Datenbank-Workflow auf einem Gerät – offline, schnell und unabhängig von externen Tools.',
    icon: 'briefcase',
  },
];

// Vorteile (4) — specific to Data Studio SQL strengths
export const vorteile = [
  {
    id: 1,
    title: 'Offline first – immer verfügbar',
    description: 'Kein Internet, keine Cloud, keine Account-Pflicht. Alle Daten bleiben vollständig auf dem Gerät.',
    icon: 'wifi-slash',
  },
  {
    id: 2,
    title: 'Vom Diagramm zur Datenbank in Sekunden',
    description: 'Zeichne dein Modell, klick auf Generieren – fertig. Vollständiger SQL-Code inklusive Constraints und Junction Tables.',
    icon: 'lightning',
  },
  {
    id: 3,
    title: 'Schema-Validierung & SQL Explainer',
    description: '17+ Validierungsregeln prüfen dein Schema automatisch. Der SQL Explainer erklärt jede Abfrage auf Deutsch.',
    icon: 'shield-check',
  },
  {
    id: 4,
    title: 'Native iPad-Erfahrung',
    description: 'Modernes SwiftUI-Design, optimiert für iPad und iPhone. Pinch-to-Zoom, Drag & Drop und Gestensteuerung.',
    icon: 'device-mobile',
  },
];

// Canvas features — for the Canvas section
export const canvasEntityTypes = [
  { id: 1, name: 'Starke Entität', description: 'Unabhängige Tabelle mit eigenem Primärschlüssel', color: '#007AFF' },
  { id: 2, name: 'Schwache Entität', description: 'Abhängig von einer übergeordneten Entität', color: '#FF9500' },
  { id: 3, name: 'Assoziative Entität', description: 'Repräsentiert eine N:M-Beziehung mit eigenen Attributen', color: '#AF52DE' },
];

export const canvasRelationships = [
  { id: 1, name: '1:1', description: 'One-to-One', example: 'Person → Ausweis' },
  { id: 2, name: '1:N', description: 'One-to-Many', example: 'Autor → Bücher' },
  { id: 3, name: 'N:M', description: 'Many-to-Many + Auto Junction Table', example: 'Studenten → Kurse' },
];

export const canvasLayoutAlgorithms = [
  { id: 1, name: 'Force-Directed', description: 'Physikbasiertes Layout mit natürlichen Abständen' },
  { id: 2, name: 'Circular', description: 'Kreisförmige Anordnung aller Entities' },
  { id: 3, name: 'Grid', description: 'Rasterförmige, gleichmäßige Verteilung' },
  { id: 4, name: 'Hierarchical', description: 'Hierarchische Baumstruktur von oben nach unten' },
  { id: 5, name: 'Compact', description: 'Platzsparendes Layout für große Diagramme' },
];

export const canvasTools = [
  { id: 1, icon: 'zoom', name: 'Pinch-to-Zoom & Pan' },
  { id: 2, icon: 'grid', name: 'Grid & Snap-to-Grid' },
  { id: 3, icon: 'layers', name: 'Szenen-Management' },
  { id: 4, icon: 'lightning', name: 'Quick-Input' },
  { id: 5, icon: 'annotation', name: 'Canvas-Notizen' },
  { id: 6, icon: 'view-list', name: 'Element-Sidebar' },
];

// Query Editor features — for the QueryEditor section
export const queryFeatures = [
  {
    id: 1,
    icon: 'chip',
    name: 'SQL Auto-Complete',
    description: 'Kontextbezogene Vorschläge für Keywords, Tabellen- und Spaltennamen, Aggregatfunktionen und JOIN-Hinweise – farbcodiert nach Kategorie.',
  },
  {
    id: 2,
    icon: 'collection',
    name: 'Snippet-Bibliothek',
    description: '25+ vorgefertigte SQL-Bausteine in 9 Kategorien (SELECT, JOIN, CTE, Window Functions, DML, DDL u.v.m.) – eigene Snippets speichern.',
  },
  {
    id: 3,
    icon: 'light-bulb',
    name: 'SQL Explainer',
    description: 'Erklärt jede SQL-Abfrage Klausel für Klausel auf Deutsch – vollständig offline, ohne Netzwerkzugriff.',
  },
  {
    id: 4,
    icon: 'adjustments',
    name: 'SQL Formatter',
    description: 'Automatisches Formatieren und Einrücken von SQL-Code – Keywords in Großbuchstaben, übersichtliche Zeilenumbrüche.',
  },
  {
    id: 5,
    icon: 'clock',
    name: 'Query History',
    description: 'Automatischer Verlauf aller ausgeführten Abfragen mit Zeitstempel, Ergebnis und Dauer – jederzeit neu laden.',
  },
  {
    id: 6,
    icon: 'table',
    name: 'Table Data Browser',
    description: 'Tabellendaten direkt durchblättern ohne SQL-Kenntnisse – alle Tabellen der Datenbank auf einen Blick.',
  },
];

// Schema Templates (10) — from the spec
export const schemaTemplates = [
  { id: 1, name: 'E-Commerce', entities: 5, description: 'Kunden, Produkte, Bestellungen, Positionen, Kategorien', icon: 'shopping-cart' },
  { id: 2, name: 'Blog', entities: 4, description: 'Benutzer, Posts, Kommentare, Tags', icon: 'pencil' },
  { id: 3, name: 'CRM', entities: 5, description: 'Kontakte, Unternehmen, Deals, Aktivitäten, Notizen', icon: 'user-group' },
  { id: 4, name: 'Bibliothek', entities: 5, description: 'Bücher, Autoren, Mitglieder, Ausleihen, Kategorien', icon: 'library' },
  { id: 5, name: 'Social Media', entities: 5, description: 'Benutzer, Posts, Likes, Follower, Nachrichten', icon: 'chat' },
  { id: 6, name: 'Schule', entities: 5, description: 'Schüler, Lehrer, Kurse, Noten, Räume', icon: 'academic-cap' },
  { id: 7, name: 'Krankenhaus', entities: 5, description: 'Patienten, Ärzte, Termine, Behandlungen, Stationen', icon: 'heart' },
  { id: 8, name: 'Projektmanagement', entities: 5, description: 'Projekte, Tasks, Teams, Mitglieder, Meilensteine', icon: 'clipboard' },
  { id: 9, name: 'Restaurant', entities: 5, description: 'Gäste, Reservierungen, Speisen, Bestellungen, Personal', icon: 'fire' },
  { id: 10, name: 'Fitness Tracker', entities: 5, description: 'Benutzer, Übungen, Workouts, Fortschritte, Ziele', icon: 'trending-up' },
];

// Validation Rules — sample from the 17+ rules
export const validationRules = [
  { id: 1, name: 'Fehlende Primary Keys', severity: 'error' },
  { id: 2, name: 'Doppelte Attributnamen', severity: 'error' },
  { id: 3, name: 'Entities ohne Attribute', severity: 'warning' },
  { id: 4, name: 'Isolierte Entities', severity: 'warning' },
  { id: 5, name: 'Zirkuläre Referenzen', severity: 'error' },
  { id: 6, name: 'Ungültige FK-Referenzen', severity: 'error' },
  { id: 7, name: '1NF – Mehrwertige Attribute', severity: 'warning' },
  { id: 8, name: '2NF – Partielle Abhängigkeiten', severity: 'warning' },
  { id: 9, name: '3NF – Transitive Abhängigkeiten', severity: 'warning' },
];

// Export Formats (6) — from the spec
export const exportFormats = [
  { id: 1, format: 'PNG', description: 'Bild des ER-Diagramms', icon: 'photograph' },
  { id: 2, format: 'PDF', description: 'Druckbares Dokument', icon: 'document' },
  { id: 3, format: 'SQL', description: 'Generierter SQL-Code als Datei', icon: 'code' },
  { id: 4, format: 'JSON', description: 'Projektdaten im JSON-Format', icon: 'database' },
  { id: 5, format: '.erproject', description: 'Vollständiges Projekt zum Reimport', icon: 'archive' },
  { id: 6, format: 'CSV', description: 'Abfrage-Ergebnisse aus dem Query Editor', icon: 'table' },
];
