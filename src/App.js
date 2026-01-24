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
  return (
    <LanguageProvider>
      <BrowserRouter>
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
