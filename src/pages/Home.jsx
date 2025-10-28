import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import FlowFieldBackground from '@/components/FlowFieldBackground';

const HomePage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden p-4">
        <FlowFieldBackground />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 100 }}
            className="text-6xl md:text-7xl font-dancing-script font-bold mb-4 leading-tight text-cream"
            style={{ fontWeight: 600 }}
          >
            Sofía Peña Calderón
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-cream/80 mb-10 max-w-xl font-krub"
          >
            Diseñadora Gráfica especializada en crear identidades visuales que rompen esquemas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 0, 107, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink text-black px-10 py-4 font-bold text-lg hover:bg-black hover:text-pink border-2 border-pink transition-all duration-300 font-krub"
              >
                VER PORTAFOLIO
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;