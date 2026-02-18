export const translations = {
  de: {
    // Navigation
    nav: {
      home: 'Start',
      features: 'Features',
      codeGeneration: 'SQL-Generator',
      screenshots: 'Screenshots',
      useCases: 'Use Cases',
      download: 'Download',
      menuToggle: 'Menü öffnen/schließen',
      themeToggle: 'Zu {theme} Mode wechseln',
      languageToggle: 'Sprache wechseln',
    },
    // Hero
    hero: {
      title: 'Data Studio SQL',
      subtitle: 'Datenbanken entwerfen, testen und verstehen – auf deinem iPad.',
      description: 'Visuelles ER-Modellieren. Automatische SQL-Generierung. Lokale Datenbank. Alles offline.',
      cta: 'Jetzt herunterladen',
      ctaAria: 'Jetzt im App Store herunterladen',
      imageAlt: 'Data Studio SQL App Screenshot',
    },
    // Features
    features: {
      title: 'Alles für deinen Datenbank-Workflow – in einer App',
      description: 'Von der visuellen ER-Modellierung über automatische SQL-Generierung bis zur lokalen SQLite-Datenbank – Data Studio SQL vereint alles in einem einzigen Tool.',
      items: [
        {
          title: 'ER-Canvas',
          description: 'Entities und Beziehungen visuell per Drag & Drop erstellen – mit Zoom, Grid-Snapping und individuellen Farben.',
        },
        {
          title: 'SQL-Generator',
          description: 'Automatisch sauberer SQL-Code aus dem Diagramm – CREATE TABLE, PRIMARY KEY, FOREIGN KEY, Junction Tables.',
        },
        {
          title: 'Lokale Datenbank',
          description: 'Echte SQLite-Datenbank direkt auf dem Gerät anlegen und mit konfigurierbaren Demo-Daten befüllen.',
        },
        {
          title: 'Query Editor',
          description: 'SQL-Abfragen schreiben, ausführen und Ergebnisse sofort in einer dynamischen Tabelle sehen.',
        },
        {
          title: 'Projektmanagement',
          description: 'Mehrere Projekte in Ordnern organisieren, anpinnen, suchen und als SQL, PNG, PDF oder JSON exportieren.',
        },
        {
          title: 'Dark Mode & Themes',
          description: 'Vier Design-Presets (Classic, Modern, Minimal, Colorful) und vollständige Dark-Mode-Unterstützung.',
        },
      ],
    },
    // SQL Generator / Workflow
    codeGeneration: {
      title: 'Vom Diagramm zur Datenbank in Sekunden',
      subtitle: 'SQL automatisch generiert – direkt aus deinem ER-Modell',
      description: 'Zeichne dein Datenbankmodell auf der Leinwand und erhalte sofort vollständigen SQL-Code. CREATE TABLE, PRIMARY KEY, FOREIGN KEY und Junction Tables werden automatisch erkannt und korrekt generiert.',
      features: {
        title: 'Automatisch generierter SQL-Code',
        languages: [
          { name: 'CREATE TABLE', description: 'Vollständige Tabellendefinition mit allen Spalten und Datentypen' },
          { name: 'PRIMARY KEY', description: 'Automatische Erkennung und Generierung von Primärschlüsseln' },
          { name: 'FOREIGN KEY', description: 'Beziehungen zwischen Tabellen korrekt als Fremdschlüssel abgebildet' },
          { name: 'Junction Tables', description: 'Many-to-Many-Beziehungen automatisch als Zwischentabellen generiert' },
        ],
      },
      benefits: {
        title: 'Vorteile der automatischen SQL-Generierung',
        items: [
          'Kein manuelles SQL-Schreiben – das Diagramm ist die Quelle',
          'Gültiger, sofort verwendbarer SQL-Code für SQLite',
          'Alle Beziehungen (1:1, 1:N, N:M) werden korrekt abgebildet',
          'Exportierbarer SQL-Code für direkte Verwendung in anderen Tools',
        ],
      },
      cta: 'Jetzt ausprobieren',
    },
    // Screenshots
    screenshots: {
      title: 'Screenshots',
      description: 'Sehen Sie Data Studio SQL in Aktion – optimiert für iPhone und iPad.',
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
          description: 'Einsteiger-freundlich mit integriertem Onboarding und Hilfe-System. Starte sofort – ganz ohne Vorkenntnisse.',
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
      description: 'Ein vollständiger Datenbank-Workflow komplett offline – vom visuellen Diagramm bis zur fertigen SQL-Abfrage.',
      items: [
        {
          title: 'Offline first – immer verfügbar',
          description: 'Kein Internet nötig, keine Cloud, keine Account-Pflicht. Alle Daten und Datenbanken bleiben vollständig auf dem Gerät.',
        },
        {
          title: 'Vom Diagramm zur Datenbank in Minuten',
          description: 'Zeichne dein Modell, klick auf Generieren – fertig. Die App übersetzt dein ER-Diagramm automatisch in gültigen SQL-Code.',
        },
        {
          title: 'Gemacht für Lernende und Profis',
          description: 'Ob erste Datenbankvorlesung oder schnelles Prototyping im Entwickleralltag – Data Studio SQL passt sich deinem Level an.',
        },
        {
          title: 'Native iPad-Erfahrung',
          description: 'Modernes Design mit intuitiver Bedienung, vollständig für iPad optimiert und jederzeit griffbereit.',
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
      description: 'Datenbanken entwerfen, testen\nund verstehen – auf deinem iPad.',
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
        email: 'UMLStudioCode@gmx.de',
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
        emailAddress: 'UMLStudioCode@gmx.de',
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
        emailAddress: 'UMLStudioCode@gmx.de',
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
      codeGeneration: 'SQL Generator',
      screenshots: 'Screenshots',
      useCases: 'Use Cases',
      download: 'Download',
      menuToggle: 'Toggle menu',
      themeToggle: 'Switch to {theme} mode',
      languageToggle: 'Change language',
    },
    // Hero
    hero: {
      title: 'Data Studio SQL',
      subtitle: 'Design, test and understand databases – on your iPad.',
      description: 'Visual ER Modeling. Automatic SQL Generation. Local Database. Fully Offline.',
      cta: 'Download now',
      ctaAria: 'Download from App Store',
      imageAlt: 'Data Studio SQL App Screenshot',
    },
    // Features
    features: {
      title: 'Everything for your database workflow – in one app',
      description: 'From visual ER modeling and automatic SQL generation to a local SQLite database – Data Studio SQL combines everything in a single tool.',
      items: [
        {
          title: 'ER Canvas',
          description: 'Create entities and relationships visually with drag & drop – with zoom, grid snapping, and individual colors.',
        },
        {
          title: 'SQL Generator',
          description: 'Automatically clean SQL code from the diagram – CREATE TABLE, PRIMARY KEY, FOREIGN KEY, Junction Tables.',
        },
        {
          title: 'Local Database',
          description: 'Create a real SQLite database directly on the device and fill it with configurable demo data.',
        },
        {
          title: 'Query Editor',
          description: 'Write and execute SQL queries and see results immediately in a dynamic table.',
        },
        {
          title: 'Project Management',
          description: 'Organize multiple projects in folders, pin, search, and export as SQL, PNG, PDF, or JSON.',
        },
        {
          title: 'Dark Mode & Themes',
          description: 'Four design presets (Classic, Modern, Minimal, Colorful) and full Dark Mode support.',
        },
      ],
    },
    // SQL Generator / Workflow
    codeGeneration: {
      title: 'From Diagram to Database in Seconds',
      subtitle: 'SQL automatically generated – directly from your ER model',
      description: 'Draw your database model on the canvas and immediately get complete SQL code. CREATE TABLE, PRIMARY KEY, FOREIGN KEY, and Junction Tables are automatically recognized and correctly generated.',
      features: {
        title: 'Automatically Generated SQL Code',
        languages: [
          { name: 'CREATE TABLE', description: 'Complete table definition with all columns and data types' },
          { name: 'PRIMARY KEY', description: 'Automatic detection and generation of primary keys' },
          { name: 'FOREIGN KEY', description: 'Relationships between tables correctly mapped as foreign keys' },
          { name: 'Junction Tables', description: 'Many-to-many relationships automatically generated as junction tables' },
        ],
      },
      benefits: {
        title: 'Benefits of Automatic SQL Generation',
        items: [
          'No manual SQL writing – the diagram is the source',
          'Valid, immediately usable SQL code for SQLite',
          'All relationships (1:1, 1:N, N:M) are correctly mapped',
          'Exportable SQL code for direct use in other tools',
        ],
      },
      cta: 'Try it now',
    },
    // Screenshots
    screenshots: {
      title: 'Screenshots',
      description: 'See Data Studio SQL in action – optimized for iPhone and iPad.',
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
          description: 'Beginner-friendly with integrated onboarding and help system. Start right away – no prior knowledge needed.',
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
      description: 'A complete database workflow fully offline – from the visual diagram to the finished SQL query.',
      items: [
        {
          title: 'Offline first – always available',
          description: 'No internet needed, no cloud, no account required. All data and databases stay completely on the device.',
        },
        {
          title: 'From diagram to database in minutes',
          description: 'Draw your model, click Generate – done. The app automatically translates your ER diagram into valid SQL code.',
        },
        {
          title: 'Made for learners and professionals',
          description: 'Whether your first database lecture or rapid prototyping in development – Data Studio SQL adapts to your level.',
        },
        {
          title: 'Native iPad experience',
          description: 'Modern design with intuitive operation, fully optimized for iPad and always at hand.',
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
      description: 'Design, test and understand\ndatabases – on your iPad.',
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
        email: 'UMLStudioCode@gmx.de',
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
        emailAddress: 'UMLStudioCode@gmx.de',
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
        emailAddress: 'UMLStudioCode@gmx.de',
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
