import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Imprint from './pages/Imprint';
import './App.css';

function App() {
  // Get basename from package.json homepage
  // In production build, PUBLIC_URL is set from homepage field (/)
  // For local development, PUBLIC_URL is empty
  const basename = process.env.PUBLIC_URL || '';

  return (
    <LanguageProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
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
