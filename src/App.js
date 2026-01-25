import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Imprint from './pages/Imprint';
import './App.css';

function App() {
  // Get basename from package.json homepage
  // In production build, PUBLIC_URL is set from homepage field
  // Extract pathname from PUBLIC_URL if it's a full URL, otherwise use it directly
  const getBasename = () => {
    if (process.env.PUBLIC_URL) {
      try {
        const url = new URL(process.env.PUBLIC_URL);
        return url.pathname;
      } catch {
        // If it's not a valid URL, assume it's already a pathname
        return process.env.PUBLIC_URL;
      }
    }
    // Check if we're running on GitHub Pages by looking at the current pathname
    if (window.location.pathname.startsWith('/uml-studio-code')) {
      return '/uml-studio-code';
    }
    return '';
  };

  return (
    <LanguageProvider>
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
          <Route path="/support" element={<Layout><Support /></Layout>} />
          <Route path="/imprint" element={<Layout><Imprint /></Layout>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
