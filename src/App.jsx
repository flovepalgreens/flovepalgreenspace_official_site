import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ThankYou from './pages/ThankYou';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <Navigation onOpenChat={openChat} />

      {/* Main Content Area */}
      <main style={{ minHeight: '100vh', position: 'relative' }}>
        <AnimatedRoutes />
      </main>

      <Footer />

      <Chatbot
        isOpen={isChatOpen}
        onOpen={openChat}
        onClose={closeChat}
      />
    </Router>
  );
}

export default App;
