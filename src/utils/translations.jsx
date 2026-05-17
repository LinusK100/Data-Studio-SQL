export const translations = {
  de: {
    // Navigation
    nav: {
      home: 'Start',
      features: 'Features',
      canvas: 'Canvas',
      codeGeneration: 'SQL & DB',
      queryEditor: 'Query Editor',
      screenshots: 'Screenshots',
      download: 'Download',
      menuToggle: 'Menü öffnen/schließen',
      themeToggle: 'Zu {theme} Mode wechseln',
      languageToggle: 'Sprache wechseln',
    },
    // Hero
    hero: {
      title: 'Data Studio SQL',
      subtitle: 'Datenbanken entwerfen, testen und verstehen – auf deinem iPhone & iPad.',
      description: 'Visuelles ER-Modellieren. Automatische SQL-Generierung. Lokale SQLite-Datenbank. Vollständig offline.',
      cta: 'Jetzt herunterladen',
      ctaAria: 'Jetzt im App Store herunterladen',
      imageAlt: 'Data Studio SQL App Screenshot',
    },
    // Features (8 items)
    features: {
      title: 'Alles für deinen Datenbank-Workflow – in einer App',
      description: 'Von der visuellen ER-Modellierung über automatische SQL-Generierung und Schema-Validierung bis zum Query Editor – Data Studio SQL ist dein kompletter Datenbank-Workflow auf iPhone & iPad.',
      items: [
        {
          title: 'ER-Canvas',
          description: 'Entities und Beziehungen per Drag & Drop platzieren. Zoom, Grid-Snapping, Szenen-Management und 5 Auto-Layout-Algorithmen.',
        },
        {
          title: 'Entity-Verwaltung',
          description: 'Drei Entity-Typen, vollständiger Attribut-Editor mit 18 Datentypen, Shorthand-Notation und intelligente Attribut-Vorschläge.',
        },
        {
          title: 'SQL-Generator',
          description: 'Vollautomatische Erzeugung von CREATE TABLE, PRIMARY KEY, FOREIGN KEY, Junction Tables – formatiert und kommentiert.',
        },
        {
          title: 'Schema-Validierung',
          description: '17+ Validierungsregeln, Normalformen-Prüfung (1NF/2NF/3NF) und Auto-Fix-Vorschläge direkt in der App.',
        },
        {
          title: 'Query Editor',
          description: 'SQL-Abfragen schreiben mit Auto-Complete, Snippet-Bibliothek, SQL Explainer, Formatter und Query-History.',
        },
        {
          title: 'Lokale SQLite-Datenbank',
          description: 'Ein-Klick-Erstellung einer SQLite-Datenbank direkt aus dem ER-Modell – mit Demo-Daten und CSV-Import.',
        },
        {
          title: 'Projektverwaltung',
          description: 'Projekte in Ordnern organisieren, Favoriten setzen, Papierkorb nutzen und per Reverse Engineering aus SQLite-Dateien importieren.',
        },
        {
          title: 'Export & Themes',
          description: 'Exportiere als PNG, PDF, SQL oder JSON. Vier Design-Presets und vollständige Dark-Mode-Unterstützung.',
        },
      ],
    },
    // Canvas section
    canvas: {
      title: 'Der visuelle ER-Modeler',
      subtitle: 'Dein Datenbankschema auf einen Blick',
      description: 'Der Canvas ist das Herzstück der App. Hier entwirfst du dein Datenbankschema visuell per Drag & Drop – mit allen Entity-Typen, Beziehungsarten und professionellen Layout-Algorithmen.',
      entityTypes: {
        title: 'Drei Entity-Typen',
        description: 'Starke, Schwache und Assoziative Entitäten – frei positionierbar und in der Größe anpassbar.',
        items: [
          { name: 'Starke Entität', description: 'Unabhängige Tabelle mit eigenem Primärschlüssel' },
          { name: 'Schwache Entität', description: 'Abhängig von einer übergeordneten Entität' },
          { name: 'Assoziative Entität', description: 'Repräsentiert eine N:M-Beziehung mit eigenen Attributen' },
        ],
      },
      relationships: {
        title: 'Alle Kardinalitäten',
        description: '1:1, 1:N und N:M mit automatischer Junction-Table-Generierung. Total- und Partial-Partizipation. Gerade, rechtwinklige und gekrümmte Linien.',
        items: [
          { name: '1:1', description: 'One-to-One', example: 'Person → Ausweis' },
          { name: '1:N', description: 'One-to-Many', example: 'Autor → Bücher' },
          { name: 'N:M', description: 'Many-to-Many + Auto Junction Table', example: 'Studenten → Kurse' },
        ],
      },
      layout: {
        title: '5 Auto-Layout-Algorithmen',
        description: 'Force-Directed, Circular, Grid, Hierarchical und Compact – mit einem Klick optimal angeordnet.',
      },
      tools: {
        title: 'Layout & Werkzeuge',
        description: '5 Auto-Layout-Algorithmen für schnelle Anordnung – plus Pinch-to-Zoom, Grid & Snap-to-Grid, Szenen-Management, Quick-Input, Canvas-Notizen und Element-Sidebar.',
      },
    },
    // SQL Generator / Workflow (kept for CodeGeneration component)
    codeGeneration: {
      title: 'Vom Diagramm zur Datenbank in Sekunden',
      subtitle: 'SQL automatisch generiert – direkt aus deinem ER-Modell',
      description: 'Zeichne dein Datenbankmodell auf dem Canvas und erhalte sofort vollständigen SQL-Code. CREATE TABLE, PRIMARY KEY, FOREIGN KEY und Junction Tables werden automatisch erkannt und korrekt generiert.',
      features: {
        title: 'Automatisch generierter SQL-Code',
        languages: [
          { name: 'CREATE TABLE', description: 'Vollständige Tabellendefinition mit allen Spalten, Datentypen und Constraints' },
          { name: 'PRIMARY KEY', description: 'Automatische Erkennung und Generierung von Primärschlüsseln mit AUTOINCREMENT' },
          { name: 'FOREIGN KEY', description: 'Beziehungen korrekt als Fremdschlüssel mit ON DELETE / ON UPDATE Actions' },
          { name: 'Junction Tables', description: 'N:M-Beziehungen automatisch als Zwischentabellen mit korrekten Foreign Keys' },
        ],
      },
      benefits: {
        title: 'Vorteile der automatischen SQL-Generierung',
        items: [
          'Kein manuelles SQL-Schreiben – das Diagramm ist die Quelle',
          'Gültiger, sofort verwendbarer SQL-Code für SQLite',
          'Alle Beziehungen (1:1, 1:N, N:M) korrekt abgebildet',
          'Exportierbarer SQL-Code als .sql-Datei',
        ],
      },
      validation: {
        title: 'Schema-Validierung',
        description: 'Automatische Prüfung deines Datenbankschemas mit 17+ Validierungsregeln – inklusive Normalformen-Prüfung und Auto-Fix-Vorschlägen.',
        normalForms: '1NF, 2NF & 3NF Prüfung',
        autoFix: 'Auto-Fix Vorschläge',
        rulesCount: '17+ Regeln',
      },
      templates: {
        title: '10 vorgefertigte Schema-Templates',
        description: 'Starte sofort mit einem vollständigen Datenbankmodell – ein Klick genügt für ein komplettes ER-Modell mit Entities, Attributen und Beziehungen.',
        entitiesLabel: 'Entitäten',
        moreLabel: '+{count} weitere',
      },
      database: {
        title: 'SQLite-Datenbank mit einem Klick',
        description: 'Erzeuge direkt aus deinem ER-Modell eine echte SQLite-Datenbank auf dem Gerät. Befülle sie mit kontextbezogenen Demo-Daten und führe Abfragen aus.',
        status: 'Live-Datenbank-Status',
        demoData: 'Intelligente Demo-Daten',
        oneClick: 'Ein-Klick-Erstellung',
      },
    },
    // Query Editor section
    queryEditor: {
      title: 'Der vollwertige SQL-Editor',
      subtitle: 'SQL schreiben, verstehen, ausführen',
      description: 'Schreibe beliebige SQL-Abfragen und führe sie direkt gegen deine projektinterne SQLite-Datenbank aus. Mit Auto-Complete, Snippet-Bibliothek, SQL Explainer und Query-History.',
      results: {
        title: 'Ergebnisse sofort sehen',
        description: 'Ergebnisse als scrollbare Tabelle, betroffene Zeilen, Fehlermeldungen bei ungültigen Abfragen und Export als CSV-Datei.',
      },
    },
    // Design Presets section
    designPresets: {
      title: 'Dein Design – von Minimal bis Colorful',
      description: 'Passe das Aussehen deiner ER-Diagramme an. Vier Design-Presets für jeden Geschmack – plus vollständige manuelle Farbanpassung für Entities, Attribute und Beziehungslinien.',
      items: [
        { description: 'Klares, reduziertes Design mit dünnen Linien – ideal für professionelle Dokumentation.' },
        { description: 'Traditionelles ER-Diagramm-Design mit neutralen Tönen und blauen Akzenten.' },
        { description: 'Zeitgemäßes Design mit Schatten und Farbverläufen – für ansprechende Präsentationen.' },
        { description: 'Kräftige Farben für verschiedene Entity-Typen – bunt, lebhaft und leicht lesbar.' },
      ],
    },
    // Export & Share section
    exportShare: {
      title: 'Exportieren & Teilen',
      subtitle: 'Dein Modell in jedem Format',
      description: 'Exportiere dein Datenbankmodell in sechs Formaten. Teile direkt über das iOS Sharesheet per AirDrop, Mail oder Nachrichten.',
      formats: {
        title: '6 Export-Formate',
      },
      project: {
        title: 'Vollständiges Projektmanagement',
        features: [
          'Projekte in Ordnern organisieren',
          'Favoriten und Sortierung',
          'Papierkorb mit Wiederherstellung',
          'Import & Export als .erproject-Datei',
          'Reverse Engineering aus SQLite-Datenbanken',
          'Selektiver Export einzelner Entities',
        ],
      },
      sharesheet: {
        title: 'iOS Sharesheet',
        targets: ['AirDrop', 'Mail', 'Nachrichten', 'Dateien'],
      },
    },
    // Screenshots
    screenshots: {
      title: 'Screenshots',
      description: 'Data Studio SQL in Aktion – optimiert für iPhone und iPad.',
      iphone: 'iPhone',
      ipad: 'iPad',
      openLightbox: 'Screenshot {index} öffnen',
    },
    // Use Cases
    useCases: {
      title: 'Perfekt für jedes Level',
      description: 'Egal ob Studierender, Entwickler, Einsteiger oder Profi – Data Studio SQL bietet die richtigen Tools für deinen Datenbank-Workflow.',
      items: [
        {
          title: 'Studierende',
          description: 'Perfekt für Datenbankvorlesungen. Lerne SQL und ER-Modellierung visuell und verstehe Datenbankstrukturen intuitiv.',
        },
        {
          title: 'Entwickler',
          description: 'Schnelles Prototyping von Datenbankschemas. Entwirf das Modell visuell und erhalte sofort den fertigen SQL-Code.',
        },
        {
          title: 'Lernende',
          description: 'Einsteiger-freundlich mit integriertem Hilfesystem. Der SQL Explainer erklärt jede Abfrage Klausel für Klausel auf Deutsch.',
        },
        {
          title: 'Profis',
          description: 'Vollständiger Datenbank-Workflow auf einem Gerät – offline, schnell und ohne Abhängigkeiten von externen Tools.',
        },
      ],
    },
    // Vorteile
    vorteile: {
      title: 'Warum Data Studio SQL?',
      description: 'Ein vollständiger Datenbank-Workflow komplett offline – vom visuellen Diagramm über Schema-Validierung bis zur fertigen SQL-Abfrage.',
      items: [
        {
          title: 'Offline first – immer verfügbar',
          description: 'Kein Internet nötig, keine Cloud, keine Account-Pflicht. Alle Daten und Datenbanken bleiben vollständig auf dem Gerät.',
        },
        {
          title: 'Vom Diagramm zur Datenbank in Sekunden',
          description: 'Zeichne dein Modell, klick auf Generieren – fertig. Die App übersetzt dein ER-Diagramm automatisch in gültigen SQL-Code.',
        },
        {
          title: 'Schema-Validierung & SQL Explainer',
          description: '17+ Regeln prüfen dein Schema automatisch. Der SQL Explainer erklärt jede Abfrage auf Deutsch – vollständig offline.',
        },
        {
          title: 'Native iPhone & iPad Erfahrung',
          description: 'Modernes SwiftUI-Design mit Pinch-to-Zoom, Drag & Drop und Gestensteuerung – vollständig für iPhone und iPad optimiert.',
        },
      ],
    },
    // Download
    download: {
      title: 'Bereit, deine erste Datenbank zu modellieren?',
      description: 'Jetzt herunterladen und dein erstes ER-Diagramm in Minuten erstellen. Data Studio SQL macht Datenbankdesign greifbar – egal ob du gerade erst mit SQL anfängst oder schnell ein Schema prototypen möchtest.',
      button: 'Im App Store laden',
      buttonAria: 'Data Studio SQL im App Store öffnen',
      availableFor: 'Verfügbar für:',
      iosVersion: 'iOS-Version:',
      languages: 'Sprachen:',
      iphoneIpad: 'iPhone & iPad',
      iosVersionValue: 'iOS 15.0 oder höher',
      languagesValue: 'Deutsch, Englisch',
    },
    // Footer
    footer: {
      title: 'Data Studio SQL',
      description: 'Datenbanken entwerfen, testen\nund verstehen – auf iPhone & iPad.',
      links: 'Links',
      privacy: 'Datenschutz',
      imprint: 'Impressum',
      support: 'Support',
      appStore: 'App Store',
      contact: 'Kontakt',
      contactText: 'Bei Fragen oder Anregungen\nkontaktiere mich gerne.',
      copyright: '© {year} Data Studio SQL. Alle Rechte vorbehalten.',
    },
    // Privacy
    privacy: {
      title: 'Datenschutzerklärung für Data Studio SQL',
      section1: {
        title: '1. Betreiber der App',
        name: 'Linus Kloppenburg',
        email: 'DataStudioSQL@gmx.de',
      },
      section2: {
        title: '2. Allgemeines',
        content: 'Diese App erfasst und speichert keine persönlichen Daten von Nutzern.',
      },
      section3: {
        title: '3. Offline-Funktionsweise',
        content: 'Die Anwendung funktioniert vollständig offline auf deinem Gerät. Es findet keine Kommunikation mit externen Servern statt. Die Daten werden ausschließlich lokal auf deinem Gerät verarbeitet.',
      },
      section4: {
        title: '4. Keine Cookies oder Tracking',
        content: 'Es werden keine Cookies, Analytics-Tools oder ähnliche Verfolgungstechnologien verwendet.',
      },
      section5: {
        title: '5. Änderungen dieser Erklärung',
        content: '24.01.2026',
      },
    },
    // Support
    support: {
      title: 'Support',
      section1: {
        title: 'Anleitung',
        content: 'In meiner App findest du eine integrierte Hilfe-Sektion mit Tipps und Best Practices für ER-Modellierung, SQL-Abfragen und Datenbankdesign.',
      },
      section2: {
        title: 'Kontakt',
        content: 'Bei Fragen oder Problemen kannst du mich jederzeit kontaktieren. In der App gibt es eine integrierte Funktion zum Senden von E-Mails (kategorisiert nach Fehler, Verbesserungsvorschläge, Erweiterungen).',
      },
      section3: {
        title: 'Feedback',
        content: 'Dein Feedback ist mir wichtig! Teile mir mit, wie ich Data Studio SQL weiter verbessern kann. Ich freue mich über Anregungen und Vorschläge.',
        email: 'Wende dich gerne direkt an mich:',
        emailAddress: 'DataStudioSQL@gmx.de',
      },
    },
    // Imprint
    imprint: {
      title: 'Impressum',
      section1: {
        title: 'Angaben gemäß §5 TMG',
      },
      section2: {
        title: 'Standort',
        location: 'Paderborn',
      },
      section3: {
        title: 'Kontakt',
        email: 'E-Mail:',
        emailAddress: 'DataStudioSQL@gmx.de',
      },
      section4: {
        title: 'Verantwortlich für den Inhalt nach §55 Abs. 2 RStV',
        name: 'Linus Kloppenburg',
      },
    },
    // Common
    common: {
      skipToContent: 'Zum Hauptinhalt springen',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      features: 'Features',
      canvas: 'Canvas',
      codeGeneration: 'SQL & DB',
      queryEditor: 'Query Editor',
      screenshots: 'Screenshots',
      download: 'Download',
      menuToggle: 'Toggle menu',
      themeToggle: 'Switch to {theme} mode',
      languageToggle: 'Change language',
    },
    // Hero
    hero: {
      title: 'Data Studio SQL',
      subtitle: 'Design, test and understand databases – on your iPhone & iPad.',
      description: 'Visual ER Modeling. Automatic SQL Generation. Local SQLite Database. Fully Offline.',
      cta: 'Download now',
      ctaAria: 'Download from App Store',
      imageAlt: 'Data Studio SQL App Screenshot',
    },
    // Features (8 items)
    features: {
      title: 'Everything for your database workflow – in one app',
      description: 'From visual ER modeling and automatic SQL generation and schema validation to the query editor – Data Studio SQL is your complete database workflow on iPhone & iPad.',
      items: [
        {
          title: 'ER Canvas',
          description: 'Place entities and relationships with drag & drop. Zoom, grid snapping, scene management, and 5 auto-layout algorithms.',
        },
        {
          title: 'Entity Management',
          description: 'Three entity types, full attribute editor with 18 data types, shorthand notation, and intelligent attribute suggestions.',
        },
        {
          title: 'SQL Generator',
          description: 'Fully automatic generation of CREATE TABLE, PRIMARY KEY, FOREIGN KEY, junction tables – formatted and commented.',
        },
        {
          title: 'Schema Validation',
          description: '17+ validation rules, normal form checks (1NF/2NF/3NF), and auto-fix suggestions directly in the app.',
        },
        {
          title: 'Query Editor',
          description: 'Write SQL queries with auto-complete, snippet library, SQL explainer, formatter, and query history.',
        },
        {
          title: 'Local SQLite Database',
          description: 'One-click creation of a SQLite database directly from the ER model – with demo data and CSV import.',
        },
        {
          title: 'Project Management',
          description: 'Organize projects in folders, set favorites, use trash, and import via reverse engineering from SQLite files.',
        },
        {
          title: 'Export & Themes',
          description: 'Export as PNG, PDF, SQL, or JSON. Four design presets and full dark mode support.',
        },
      ],
    },
    // Canvas section
    canvas: {
      title: 'The Visual ER Modeler',
      subtitle: 'Your database schema at a glance',
      description: 'The canvas is the heart of the app. Design your database schema visually with drag & drop – with all entity types, relationship types, and professional layout algorithms.',
      entityTypes: {
        title: 'Three Entity Types',
        description: 'Strong, weak, and associative entities – freely positionable and resizable.',
        items: [
          { name: 'Strong Entity', description: 'Independent table with its own primary key' },
          { name: 'Weak Entity', description: 'Dependent on a parent entity' },
          { name: 'Associative Entity', description: 'Represents an N:M relationship with its own attributes' },
        ],
      },
      relationships: {
        title: 'All Cardinalities',
        description: '1:1, 1:N, and N:M with automatic junction table generation. Total and partial participation. Straight, orthogonal, and curved lines.',
        items: [
          { name: '1:1', description: 'One-to-One', example: 'Person → ID Card' },
          { name: '1:N', description: 'One-to-Many', example: 'Author → Books' },
          { name: 'N:M', description: 'Many-to-Many + Auto Junction Table', example: 'Students → Courses' },
        ],
      },
      layout: {
        title: '5 Auto-Layout Algorithms',
        description: 'Force-directed, circular, grid, hierarchical, and compact – optimally arranged with one click.',
      },
      tools: {
        title: 'Layout & Tools',
        description: '5 auto-layout algorithms for instant arrangement – plus pinch-to-zoom, grid & snap-to-grid, scene management, quick input, canvas notes, and element sidebar.',
      },
    },
    // SQL Generator / Workflow
    codeGeneration: {
      title: 'From Diagram to Database in Seconds',
      subtitle: 'SQL automatically generated – directly from your ER model',
      description: 'Draw your database model on the canvas and immediately get complete SQL code. CREATE TABLE, PRIMARY KEY, FOREIGN KEY, and junction tables are automatically recognized and correctly generated.',
      features: {
        title: 'Automatically Generated SQL Code',
        languages: [
          { name: 'CREATE TABLE', description: 'Complete table definition with all columns, data types, and constraints' },
          { name: 'PRIMARY KEY', description: 'Automatic detection and generation of primary keys with AUTOINCREMENT' },
          { name: 'FOREIGN KEY', description: 'Relationships correctly mapped as foreign keys with ON DELETE / ON UPDATE actions' },
          { name: 'Junction Tables', description: 'N:M relationships automatically generated as junction tables with correct foreign keys' },
        ],
      },
      benefits: {
        title: 'Benefits of Automatic SQL Generation',
        items: [
          'No manual SQL writing – the diagram is the source',
          'Valid, immediately usable SQL code for SQLite',
          'All relationships (1:1, 1:N, N:M) correctly mapped',
          'Exportable SQL code as .sql file',
        ],
      },
      validation: {
        title: 'Schema Validation',
        description: 'Automatic verification of your database schema with 17+ validation rules – including normal form checks and auto-fix suggestions.',
        normalForms: '1NF, 2NF & 3NF checks',
        autoFix: 'Auto-fix suggestions',
        rulesCount: '17+ rules',
      },
      templates: {
        title: '10 Ready-Made Schema Templates',
        description: 'Start immediately with a complete database model – one click gives you a full ER model with entities, attributes, and relationships.',
        entitiesLabel: 'Entities',
        moreLabel: '+{count} more',
      },
      database: {
        title: 'SQLite Database with One Click',
        description: 'Create a real SQLite database directly from your ER model on the device. Fill it with context-aware demo data and run queries immediately.',
        status: 'Live database status',
        demoData: 'Intelligent demo data',
        oneClick: 'One-click creation',
      },
    },
    // Query Editor section
    queryEditor: {
      title: 'The Full-Featured SQL Editor',
      subtitle: 'Write, understand, execute SQL',
      description: 'Write any SQL query and execute it directly against your project\'s internal SQLite database. With auto-complete, snippet library, SQL explainer, and query history.',
      results: {
        title: 'See Results Instantly',
        description: 'Results as a scrollable table, affected rows count, error messages for invalid queries, and export as CSV file.',
      },
    },
    // Design Presets section
    designPresets: {
      title: 'Your Design – from Minimal to Colorful',
      description: 'Customize the look of your ER diagrams. Four design presets for every taste – plus full manual color customization for entities, attributes, and relationship lines.',
      items: [
        { description: 'Clean, reduced design with thin lines – ideal for professional documentation.' },
        { description: 'Traditional ER diagram design with neutral tones and blue accents.' },
        { description: 'Contemporary design with shadows and gradients – for appealing presentations.' },
        { description: 'Bold colors for different entity types – vibrant and easy to read.' },
      ],
    },
    // Export & Share section
    exportShare: {
      title: 'Export & Share',
      subtitle: 'Your model in every format',
      description: 'Export your database model in six formats. Share directly via the iOS share sheet via AirDrop, Mail, or Messages.',
      formats: {
        title: '6 Export Formats',
      },
      project: {
        title: 'Full Project Management',
        features: [
          'Organize projects in folders',
          'Favorites and sorting',
          'Trash with restore',
          'Import & export as .erproject file',
          'Reverse engineering from SQLite databases',
          'Selective export of individual entities',
        ],
      },
      sharesheet: {
        title: 'iOS Share Sheet',
        targets: ['AirDrop', 'Mail', 'Messages', 'Files'],
      },
    },
    // Screenshots
    screenshots: {
      title: 'Screenshots',
      description: 'Data Studio SQL in action – optimized for iPhone and iPad.',
      iphone: 'iPhone',
      ipad: 'iPad',
      openLightbox: 'Open screenshot {index}',
    },
    // Use Cases
    useCases: {
      title: 'Perfect for every level',
      description: 'Whether you are a student, developer, beginner, or professional – Data Studio SQL offers the right tools for your database workflow.',
      items: [
        {
          title: 'Students',
          description: 'Perfect for database courses. Learn SQL and ER modeling visually and understand database structures intuitively.',
        },
        {
          title: 'Developers',
          description: 'Rapid prototyping of database schemas. Design the model visually and get the finished SQL code immediately.',
        },
        {
          title: 'Learners',
          description: 'Beginner-friendly with integrated help system. The SQL explainer explains every query clause by clause in plain language.',
        },
        {
          title: 'Professionals',
          description: 'Complete database workflow on one device – offline, fast, and independent of external tools.',
        },
      ],
    },
    // Vorteile
    vorteile: {
      title: 'Why Data Studio SQL?',
      description: 'A complete database workflow fully offline – from the visual diagram and schema validation to the finished SQL query.',
      items: [
        {
          title: 'Offline first – always available',
          description: 'No internet needed, no cloud, no account required. All data and databases stay completely on the device.',
        },
        {
          title: 'From diagram to database in seconds',
          description: 'Draw your model, click generate – done. The app automatically translates your ER diagram into valid SQL code.',
        },
        {
          title: 'Schema Validation & SQL Explainer',
          description: '17+ rules automatically check your schema. The SQL explainer explains every query in plain language – fully offline.',
        },
        {
          title: 'Native iPhone & iPad Experience',
          description: 'Modern SwiftUI design with pinch-to-zoom, drag & drop and gesture control – fully optimized for iPhone and iPad.',
        },
      ],
    },
    // Download
    download: {
      title: 'Ready to model your first database?',
      description: 'Download now and create your first ER diagram in minutes. Data Studio SQL makes database design tangible – whether you\'re just starting with SQL or want to quickly prototype a schema.',
      button: 'Download on the App Store',
      buttonAria: 'Open Data Studio SQL in App Store',
      availableFor: 'Available for:',
      iosVersion: 'iOS version:',
      languages: 'Languages:',
      iphoneIpad: 'iPhone & iPad',
      iosVersionValue: 'iOS 15.0 or higher',
      languagesValue: 'German, English',
    },
    // Footer
    footer: {
      title: 'Data Studio SQL',
      description: 'Design, test and understand\ndatabases – on iPhone & iPad.',
      links: 'Links',
      privacy: 'Privacy',
      imprint: 'Imprint',
      support: 'Support',
      appStore: 'App Store',
      contact: 'Contact',
      contactText: 'Feel free to contact me\nwith questions or suggestions.',
      copyright: '© {year} Data Studio SQL. All rights reserved.',
    },
    // Privacy
    privacy: {
      title: 'Privacy Policy for Data Studio SQL',
      section1: {
        title: '1. App Operator',
        name: 'Linus Kloppenburg',
        email: 'DataStudioSQL@gmx.de',
      },
      section2: {
        title: '2. General',
        content: 'This app does not collect or store any personal data from users.',
      },
      section3: {
        title: '3. Offline Functionality',
        content: 'The application works completely offline on your device. There is no communication with external servers. Data is processed exclusively locally on your device.',
      },
      section4: {
        title: '4. No Cookies or Tracking',
        content: 'No cookies, analytics tools, or similar tracking technologies are used.',
      },
      section5: {
        title: '5. Changes to this Statement',
        content: '24.01.2026',
      },
    },
    // Support
    support: {
      title: 'Support',
      section1: {
        title: 'Guide',
        content: 'In the app you will find an integrated help section with tips and best practices for ER modeling, SQL queries, and database design.',
      },
      section2: {
        title: 'Contact',
        content: 'If you have any questions or problems, feel free to contact me at any time. The app has an integrated function for sending emails (categorized by errors, improvement suggestions, and extensions).',
      },
      section3: {
        title: 'Feedback',
        content: 'Your feedback is important to me! Let me know how I can further improve Data Studio SQL. I look forward to your suggestions and ideas.',
        email: 'Feel free to contact me directly:',
        emailAddress: 'DataStudioSQL@gmx.de',
      },
    },
    // Imprint
    imprint: {
      title: 'Imprint',
      section1: {
        title: 'Information according to §5 TMG',
      },
      section2: {
        title: 'Location',
        location: 'Paderborn',
      },
      section3: {
        title: 'Contact',
        email: 'E-Mail:',
        emailAddress: 'DataStudioSQL@gmx.de',
      },
      section4: {
        title: 'Responsible for content according to §55 para. 2 RStV',
        name: 'Linus Kloppenburg',
      },
    },
    // Common
    common: {
      skipToContent: 'Skip to main content',
    },
  },
};

// useTranslation hook is defined in a separate file
