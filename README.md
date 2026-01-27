# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## React SPA Routing für GitHub Pages

### Prompt für andere Projekte

Dieser Prompt kann bei anderen React-Websites verwendet werden, um das gleiche Routing-System zu implementieren:

---

**Prompt:**

```
Ich möchte eine React-Website mit React Router erstellen, die auf GitHub Pages gehostet wird. 
Die Seiten /support, /datenschutz (oder /privacy) und /imprint sollen direkt über die URL 
erreichbar sein, ohne "404 - Seite nicht gefunden" Fehler.

Bitte implementiere folgende Struktur:

### 1. App.js mit React Router und Redirect-Handler

Die App.js soll:
- BrowserRouter von react-router-dom verwenden
- Routes für /, /privacy, /datenschutz, /support und /imprint definieren
- Einen RedirectHandler enthalten, der Query-Parameter aus der 404-Weiterleitung verarbeitet

Der RedirectHandler muss:
- Den Query-String prüfen, ob er mit "?/" beginnt (z.B. "?/support")
- Den Pfad extrahieren und mit navigate(path, { replace: true }) zur richtigen Route navigieren
- ~and~ wieder zu & konvertieren (für Query-Parameter)

Beispiel:

function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = location.search;
    if (queryString && queryString.startsWith('?/')) {
      const pathMatch = queryString.match(/^\?\/(.+?)(?:&|$)/);
      if (pathMatch) {
        let path = '/' + pathMatch[1].replace(/~and~/g, '&');
        path = decodeURIComponent(path);
        navigate(path, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
}

### 2. 404.html im public-Ordner

Erstelle eine 404.html, die:
- Von GitHub Pages automatisch bei nicht gefundenen Routen angezeigt wird
- JavaScript enthält, das den aktuellen Pfad als Query-Parameter an die Hauptseite weiterleitet

Das Script muss:
- Den Pfad aus window.location.pathname extrahieren
- & durch ~and~ ersetzen (um Query-Parameter nicht zu zerstören)
- Zur Hauptseite mit dem Pfad als Query-Parameter weiterleiten: /?/support

Beispiel-Script für 404.html:

<script>
  (function() {
    var pathSegmentsToKeep = 0;
    var l = window.location;
    var redirect = l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash;
    window.location.replace(redirect);
  })();
</script>

### 3. Footer-Links mit React Router <Link>

Für interne Navigation verwende IMMER <Link> statt <a>:

import { Link } from 'react-router-dom';

<Link to="/privacy">Datenschutz</Link>
<Link to="/support">Support</Link>
<Link to="/imprint">Impressum</Link>

Vorteile von <Link>:
- Kein Neuladen der gesamten Seite
- Schnellere Navigation (SPA-Verhalten)
- React Router verwaltet den Verlauf korrekt

### 4. Ablauf bei direktem URL-Zugriff

1. Benutzer gibt https://example.com/support in die URL-Leiste ein
2. GitHub Pages findet keine support/index.html → zeigt 404.html an
3. 404.html-Script leitet um zu https://example.com/?/support
4. React-App lädt, index.html wird ausgeliefert
5. RedirectHandler erkennt ?/support im Query-String
6. navigate('/support') wird aufgerufen
7. React Router zeigt die Support-Komponente an
```

---

### Erklärung der Funktionsweise

#### Wie funktioniert das Laden von /support und /datenschutz direkt?

**Das Problem:**
Bei einer Single-Page-App (SPA) gibt es nur eine `index.html`. Wenn der Benutzer direkt `/support` eingibt, sucht der Server nach einer Datei `/support/index.html`, die nicht existiert → 404 Fehler.

**Die Lösung (in dieser App):**

1. **404.html als Weiterleitung:** GitHub Pages zeigt bei jeder nicht gefundenen URL die `404.html` an. Diese enthält ein Script, das sofort zur Hauptseite weiterleitet, aber den gewünschten Pfad als Query-Parameter anhängt:
   - `/support` → `/?/support`
   - `/datenschutz` → `/?/datenschutz`

2. **RedirectHandler in React:** Sobald die React-App lädt, prüft der `RedirectHandler` den Query-String. Wenn er `?/support` findet, navigiert er mit React Router zur Route `/support`.

3. **Für den Benutzer unsichtbar:** Das passiert so schnell, dass der Benutzer nur kurz einen leeren Bildschirm sieht und dann die gewünschte Seite erscheint.

#### Warum `<Link>` statt `<a>` für interne Links?

| `<a href="/support">` | `<Link to="/support">` |
|----------------------|------------------------|
| Lädt gesamte Seite neu | Kein Neuladen |
| Server-Request | Client-seitige Navigation |
| Langsamer | Schneller |
| Verliert App-State | Behält App-State |

#### Beispiel aus Footer.js dieser App:

```jsx
<Link to="/privacy" className="footer-link-item">
  {t('footer.privacy')}
</Link>
<Link to="/support" className="footer-link-item">
  {t('footer.support')}
</Link>
<Link to="/imprint" className="footer-link-item">
  {t('footer.imprint')}
</Link>
```
