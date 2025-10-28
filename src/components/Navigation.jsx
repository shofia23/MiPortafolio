import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledOverLight, setIsScrolledOverLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const worksSection = document.getElementById('works');
      if (worksSection) {
        const { top, bottom } = worksSection.getBoundingClientRect();
        const navHeight = 80; 
        if (top < navHeight && bottom > navHeight) {
          setIsScrolledOverLight(true);
        } else {
          setIsScrolledOverLight(false);
        }
      } else {
        setIsScrolledOverLight(false);
      }
    };
    
    if (location.pathname === '/portfolio' || location.pathname === '/works') {
        window.addEventListener('scroll', handleScroll);
    } else {
        setIsScrolledOverLight(false);
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const navItems = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Sobre Mí', href: '/about' },
    { name: 'Trabajos', href: '/works' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  if (location.pathname === '/') {
    return null;
  }

  const textColor = isScrolledOverLight ? 'text-black' : 'text-cream';
  const hoverTextColor = isScrolledOverLight ? 'hover:text-pink' : 'hover:text-pink';
  const activeTextColor = isScrolledOverLight ? 'text-pink' : 'text-pink';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <motion.div whileHover={{ scale: 1.05 }} className="text-gradient">
              SP
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.href}
                  className={`transition-colors duration-300 font-medium ${textColor} ${hoverTextColor} ${location.pathname === item.href ? activeTextColor : ''}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
             <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors duration-300 font-medium flex items-center gap-2 ${textColor} ${hoverTextColor}`}
              >
                <Mail size={18}/> Contacto
              </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${textColor} ${hoverTextColor}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden mt-4 pb-4 border-t border-pink/20 overflow-hidden"
          >
            {navItems.map((item, index) => (
               <Link
                key={index}
                to={item.href}
                onClick={handleLinkClick}
                className="block w-full text-left py-3 text-cream hover:text-pink transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
             <button
                onClick={() => { onContactClick(); handleLinkClick(); }}
                className="block w-full text-left py-3 text-cream hover:text-pink transition-colors font-medium"
              >
                Contacto
              </button>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;