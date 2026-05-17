# Data Studio SQL

**Dein visuelles Datenbank-Studio für iPhone & iPad**

Entwirf ER-Modelle, generiere SQL-Code, erstelle SQLite-Datenbanken und führe Abfragen aus – alles in einer einzigen nativen iOS-App. Komplett offline, kein Account nötig.

---

## Überblick

Data Studio SQL ist ein umfassendes Werkzeug für Datenbankmodellierung und SQL-Entwicklung direkt auf dem iPhone und iPad. Die App richtet sich an Studierende, Entwickler und Datenbank-Einsteiger, die Entity-Relationship-Modelle visuell erstellen, daraus automatisch SQL-Code generieren und diesen gegen eine integrierte SQLite-Datenbank ausführen möchten.

**Verfügbar für:** iPhone & iPad  
**Sprachen:** Deutsch & Englisch  
**Offline:** Vollständig ohne Internetverbindung nutzbar

---

## Die App im Detail — 5 Tabs

Data Studio SQL ist in fünf zentrale Tabs aufgeteilt, die den gesamten Workflow von der visuellen Modellierung über die Code-Generierung bis zur Abfrage-Ausführung abdecken.

---

### 📐 Tab 1: Canvas — Visueller ER-Modeler

Der Canvas ist das Herzstück der App. Hier entwirfst du dein Datenbankschema visuell per Drag & Drop.

#### Entities (Tabellen)

- **Drei Entity-Typen:** Starke Entitäten, Schwache Entitäten und Assoziative Entitäten
- **Frei positionierbar** auf dem Canvas per Drag & Drop
- **Größe anpassbar** durch Resize-Griffe
- **Kontextmenü** für schnellen Zugriff auf Bearbeiten, Duplizieren, Löschen und mehr

#### Attribute (Spalten)

Jede Entity kann beliebig viele Attribute mit folgenden Eigenschaften haben:

- **Attribut-Typen:** Normal, Schlüsselattribut (Primary Key), Mehrwertiges Attribut, Abgeleitetes Attribut
- **Datentypen:** TEXT, INTEGER, REAL, BLOB, NUMERIC, BOOLEAN, DATE, DATETIME, TIMESTAMP, VARCHAR, CHAR, DECIMAL, FLOAT, DOUBLE, BIGINT, SMALLINT, TINYINT, UUID
- **Constraints:** Primary Key, NOT NULL, UNIQUE, Foreign Key, Auto Increment, Default-Werte, CHECK-Constraints
- **Foreign Key Actions:** CASCADE, SET NULL, RESTRICT, NO ACTION, SET DEFAULT (jeweils für ON DELETE und ON UPDATE)

#### Beziehungen (Relationships)

- **Kardinalitäten:** 1:1 (One-to-One), 1:N (One-to-Many), N:M (Many-to-Many)
- **Visuelle Darstellung** mit Verbindungslinien zwischen Entities
- **Linientypen:** Gerade, rechtwinklig, gekrümmt
- **Pfeilspitzen:** Verschiedene Stile zur Kennzeichnung der Kardinalität
- **Partizipation:** Total oder Partial
- **Automatische Junction Tables** bei N:M-Beziehungen

#### Canvas-Werkzeuge

- **Pinch-to-Zoom & Pan** für Navigation auf großen Diagrammen
- **Grid-System** mit konfigurierbarer Rastergröße und Snap-to-Grid
- **Auto-Layout Algorithmen:**
  - Force-Directed (physikbasiert)
  - Circular (kreisförmig)
  - Grid (rasterförmig)
  - Hierarchical (hierarchisch)
  - Compact (platzsparend)
- **Szenen-Management:** Mehrere Szenen pro Projekt mit individuellen Einstellungen und sichtbaren Elementen
- **Quick-Input:** Schnellerstellung von Entities über ein kompaktes Eingabeformular
- **Notizen:** Textnotizen direkt auf dem Canvas platzieren
- **Staging-Sidebar:** Änderungen sammeln und gesammelt committen
- **Element-Sidebar:** Übersicht aller Entities mit Schnellnavigation

---

### 📋 Tab 2: Entities — Entitäten-Verwaltung

Der Entities-Tab bietet eine detaillierte Übersicht und Verwaltung aller Entitäten deines Projekts.

#### Zwei Ansichtsmodi

- **Karten-Ansicht:** Jede Entity als übersichtliche Karte mit Attribut-Zusammenfassung, Beziehungs-Count und Kontextmenü
- **Tabellen-Ansicht:** Tabellenförmige Darstellung aller Entities mit ihren Sample-Daten in einem Spreadsheet-artigen Format

#### Entity-Verwaltung

- **Suchfunktion** über alle Entitäten nach Name
- **Entity erstellen:** Name, Typ (Stark/Schwach/Assoziativ) und Farbe wählen
- **Entity-Detail:** Alle Attribute mit Datentyp, Constraints und Reihenfolge bearbeiten
- **Attribute hinzufügen/bearbeiten:** Vollständiger Editor mit allen Datentypen und Constraints
- **Attribut-Vorschläge:** Intelligente Vorschläge basierend auf dem Entity-Namen (z.B. „User" → name, email, password, created_at)

#### Shorthand-Eingabe

Erstelle Entities blitzschnell über eine kompakte Textnotation:

```
User: name TEXT PK, email TEXT UNIQUE NOT NULL, age INTEGER
```

#### Demo-Daten

- **Automatischer Demo-Daten Generator:** Erzeugt kontextbezogene Testdaten basierend auf Attribut-Namen
- **Intelligente Werterkennung:** Erkennt automatisch den passenden Datentyp (z.B. „email" → realistische E-Mail-Adressen, „price" → Preise, „name" → Personennamen)
- **Sample-Daten anzeigen** in der Tabellen-Ansicht

#### Weitere Funktionen

- **CSV-Import:** Daten aus CSV-Dateien in Entities importieren
- **Beziehungen pro Entity** anzeigen und verwalten
- **Daten löschen & zurücksetzen**

---

### 📄 Tab 3: SQL — Code-Generierung & Datenbank

Der SQL-Tab generiert automatisch den kompletten SQL-Code aus deinem ER-Modell und ermöglicht die Erstellung einer SQLite-Datenbank.

#### Automatische SQL-Generierung

Aus deinem visuellen Modell wird vollautomatisch SQL-Code erzeugt:

- **CREATE TABLE Statements** mit allen Constraints:
  - PRIMARY KEY, AUTOINCREMENT
  - NOT NULL, UNIQUE, DEFAULT-Werte
  - CHECK-Constraints
  - FOREIGN KEY mit ON DELETE / ON UPDATE Actions
- **Junction Tables** für N:M-Beziehungen (automatisch generiert)
- **CREATE INDEX Statements:**
  - Unique Indizes
  - Foreign Key Indizes
  - Zusammengesetzte Indizes
- **INSERT Statements** mit Demo-Daten
- **CREATE VIEW Statements** für gespeicherte Abfragen
- **DROP Statements** zum Zurücksetzen

Der generierte SQL-Code ist **formatiert und kommentiert** für optimale Lesbarkeit.

#### SQLite-Datenbank

- **Ein-Klick Datenbank-Erstellung** direkt aus dem ER-Modell
- **Datenbank-Status:** Live-Anzeige (Nicht erstellt → Wird erstellt → Erstellt → Fehler)
- **Pro Projekt** eine eigene SQLite-Datenbank auf dem Gerät
- **Datenbank löschen & neu erstellen**

#### Schema-Validierung

Automatische Prüfung deines Datenbankschemas mit **17+ Validierungsregeln:**

- Fehlende Primary Keys
- Doppelte Attributnamen
- Entities ohne Attribute
- Isolierte Entities (ohne Beziehungen)
- Zirkuläre Referenzen
- Unbenannte Beziehungen
- Ungültige Foreign-Key-Referenzen
- Mehrwertige Attribute (1NF-Verstoß)
- Partielle Abhängigkeiten (2NF-Verstoß)
- Transitive Abhängigkeiten (3NF-Verstoß)
- **Normalformen-Prüfung:** 1NF, 2NF, 3NF mit detaillierten Erklärungen
- **Auto-Fix Vorschläge** für erkannte Probleme

#### Schema-Templates

10 vorgefertigte Datenbankvorlagen als Startpunkt:

| Template | Entities | Beschreibung |
|---|---|---|
| E-Commerce | 5 | Kunden, Produkte, Bestellungen, Positionen, Kategorien |
| Blog | 4 | Benutzer, Posts, Kommentare, Tags |
| CRM | 5 | Kontakte, Unternehmen, Deals, Aktivitäten, Notizen |
| Bibliothek | 5 | Bücher, Autoren, Mitglieder, Ausleihen, Kategorien |
| Social Media | 5 | Benutzer, Posts, Likes, Follower, Nachrichten |
| Schule | 5 | Schüler, Lehrer, Kurse, Noten, Räume |
| Krankenhaus | 5 | Patienten, Ärzte, Termine, Behandlungen, Stationen |
| Projektmanagement | 5 | Projekte, Tasks, Teams, Mitglieder, Meilensteine |
| Restaurant | 5 | Gäste, Reservierungen, Speisen, Bestellungen, Personal |
| Fitness Tracker | 5 | Benutzer, Übungen, Workouts, Fortschritte, Ziele |

Ein Klick → komplettes ER-Modell mit Entitäten, Attributen und Beziehungen.

#### Code-Funktionen

- **SQL-Code kopieren** in die Zwischenablage
- **SQL-Datei exportieren** (.sql)
- **Syntax-Highlighting** für bessere Lesbarkeit

---

### ▶️ Tab 4: Query — SQL-Abfragen ausführen

Der Query-Tab ist ein vollwertiger SQL-Editor mit integrierter Ausführungsumgebung.

#### SQL-Editor

- **Freies Eingabefeld** für beliebige SQL-Abfragen
- **SQL Auto-Complete** mit kontextbezogenen Vorschlägen:
  - **Keywords:** SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY, etc.
  - **Tabellennamen** aus deinem Projekt
  - **Spaltennamen** der referenzierten Tabellen
  - **Aggregatfunktionen:** COUNT, SUM, AVG, MIN, MAX
  - **Operatoren:** AND, OR, NOT, LIKE, IN, BETWEEN, etc.
  - **JOIN-Hinweise** basierend auf deinen Beziehungen
  - Farbcodierte Suggestion-Chips je nach Kategorie
- **Abfrage-Kategorien:** Automatische Erkennung von SELECT, INSERT, UPDATE, DELETE und Custom

#### Abfrage ausführen

- **Direkte Ausführung** gegen die projektinterne SQLite-Datenbank
- **Ergebnisse als Tabelle:** Spalten und Zeilen in einer scrollbaren Tabellenansicht
- **Betroffene Zeilen:** Anzeige der Anzahl betroffener Zeilen bei INSERT/UPDATE/DELETE
- **Fehlermeldungen** bei ungültigen Abfragen
- **Ergebnis-Export** als CSV-Datei

#### SQL Snippet-Bibliothek

Eine umfangreiche Sammlung vorgefertigter SQL-Bausteine mit Platzhaltern:

| Kategorie | Snippets | Beispiele |
|---|---|---|
| SELECT | 4 | Einfaches SELECT, mit WHERE, LIKE, ORDER BY + LIMIT |
| Aggregation | 3 | COUNT, GROUP BY + HAVING, Mehrere Aggregatfunktionen |
| JOIN | 3 | INNER JOIN, LEFT JOIN, Mehrfach-JOIN |
| Mengenoperationen | 3 | UNION, INTERSECT, EXCEPT |
| CTE | 2 | Einfache CTE, Rekursive CTE |
| Window Functions | 2 | ROW_NUMBER, Running Total |
| CASE | 2 | Einfaches CASE, CASE mit Aggregation |
| DML | 3 | INSERT, UPDATE, DELETE |
| DDL | 3 | CREATE TABLE, ALTER TABLE, CREATE INDEX |

- **Platzhalter** (z.B. `{table}`, `{column}`) werden vor dem Einfügen ausgefüllt
- **Eigene Snippets** erstellen, speichern und kategorisieren

#### SQL Explainer

Versteht jede SQL-Abfrage und erklärt sie Klausel für Klausel:

- Zerlegt SQL-Abfragen in ihre Bestandteile (SELECT, FROM, WHERE, JOIN, GROUP BY, HAVING, ORDER BY, LIMIT, etc.)
- **Deutsche Erklärungen** für jede einzelne Klausel
- Unterstützt: SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, ALTER TABLE, DROP
- Farbcodierte Darstellung je Klauseltyp
- **Komplett offline** — kein Netzwerk nötig

#### SQL Formatter

- **Automatisches Formatieren** und Einrücken von SQL-Code
- Keywords in Großbuchstaben
- Übersichtliche Zeilenumbrüche

#### Query History

- **Automatischer Verlauf** aller ausgeführten Abfragen
- Zeitstempel, Ergebnis und Dauer jeder Abfrage
- Abfragen aus der History erneut laden

#### Gespeicherte Abfragen

- Häufig genutzte Abfragen **speichern** mit Name und Kategorie
- Schneller Zugriff auf gespeicherte Queries
- Kategorien: SELECT, INSERT, UPDATE, DELETE, Custom

#### Table Data Browser

- **Tabellendaten durchblättern** ohne SQL-Kenntnisse
- Direkter Zugriff auf alle Tabellen der Datenbank
- Daten in tabellarischer Form anzeigen

---

### ⚙️ Tab 5: Settings — Einstellungen

Der Settings-Tab bietet umfangreiche Anpassungsmöglichkeiten für das Erscheinungsbild und Verhalten der App.

#### Design-Einstellungen

- **4 Design-Presets:**
  - *Minimal:* Klares, reduziertes Design mit dünnen Linien
  - *Classical:* Traditionelles ER-Diagramm-Design
  - *Modern:* Zeitgemäßes Design mit Schatten und Farbverläufen
  - *Colorful:* Buntes Design mit kräftigen Farben
- **Individuelle Farbanpassung** für:
  - Entity-Hintergrund, Header und Rahmen
  - Attribut-Farben nach Typ (PK, FK, Normal, etc.)
  - Beziehungs-Linienfarben
  - Canvas-Hintergrund
- **Schriftgröße** für Entity-Titel und Attribute
- **Eckenradius, Schatten und Rahmenbreite** individuell einstellbar

#### Canvas-Einstellungen

- Grid ein/aus
- Snap-to-Grid ein/aus
- Grid-Größe anpassen

#### Tab-Sichtbarkeit

- Entities-Tab ein-/ausblenden
- SQL-Tab ein-/ausblenden
- Query-Tab ein-/ausblenden
- Canvas- und Settings-Tab sind immer sichtbar

#### UI-Komplexität

- Verschiedene Komplexitätsstufen für die Benutzeroberfläche
- Anfänger sehen weniger Optionen, Fortgeschrittene alle Features

---

## Projektverwaltung

Data Studio SQL bietet ein vollständiges Projektmanagement-System:

- **Projekte erstellen, umbenennen und löschen**
- **Ordnerstruktur:** Projekte in Ordnern organisieren
- **Favoriten:** Wichtige Projekte als Favoriten markieren
- **Sortierung:** Nach Name, Erstellungsdatum oder Favoriten sortieren
- **Projekte verschieben** zwischen Ordnern
- **Papierkorb:** Gelöschte Projekte wiederherstellen oder endgültig löschen
- **Projekt-Import/Export:** Projekte als `.erproject`-Datei (JSON) exportieren und importieren
- **Reverse Engineering:** Aus einer bestehenden SQLite-Datenbank automatisch ein ER-Modell erstellen

---

## Export & Teilen

Dein Datenbankmodell in verschiedenen Formaten exportieren:

| Format | Beschreibung |
|---|---|
| **PNG** | Bild des ER-Diagramms |
| **PDF** | Druckbares Dokument des Diagramms |
| **SQL** | Generierter SQL-Code als Datei |
| **JSON** | Projektdaten im JSON-Format |
| **.erproject** | Vollständiges Projekt zum Import in Data Studio SQL |
| **CSV** | Abfrage-Ergebnisse als CSV-Datei |

- **Selektiver Export:** Wähle einzelne Entities und Beziehungen für den Export
- **Vorschau** vor dem Export
- **iOS Sharesheet** zum direkten Teilen über AirDrop, Mail, Nachrichten, etc.

---

## Hilfe & Support

- **Integriertes Hilfesystem** mit detaillierten Erklärungen zu allen Bereichen der App
- **Quickstart-Guide** für den schnellen Einstieg
- **Best Practices & Tipps** für effizientes Arbeiten
- **E-Mail-Support** direkt aus der App heraus

---

## Technische Details

| Eigenschaft | Detail |
|---|---|
| **Plattform** | iOS (iPhone & iPad) |
| **Framework** | SwiftUI |
| **Datenhaltung** | SwiftData + SQLite3 |
| **Sprachen** | Deutsch & Englisch |
| **Offline** | Vollständig offline nutzbar |
| **Account** | Kein Account nötig |
| **Datenschutz** | Alle Daten bleiben lokal auf dem Gerät |

---

*Data Studio SQL — Datenbanken verstehen, modellieren und ausprobieren.*