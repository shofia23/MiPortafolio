
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import WorksPage from '@/pages/WorksPage';
import ContactModal from '@/components/ContactModal';
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/toaster';
import PortfolioPage from '@/pages/PortfolioPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Sofía Peña Calderón - Diseñadora Gráfica</title>
        <meta name="description" content="Portafolio profesional de Sofía Peña Calderón, diseñadora gráfica especializada en branding, diseño editorial y arte visual contemporáneo." />
      </Helmet>
      
      <AppContent setContactOpen={setContactOpen} />

      <AnimatePresence mode="wait">
        {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
      
      <Toaster />
    </Router>
  );
}

const AppContent = ({ setContactOpen }) => {
  const location = useLocation();
  
  return (
    <>
      <Navigation onContactClick={() => setContactOpen(true)} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};


export default App;
