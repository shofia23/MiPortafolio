import React from 'react';
import About from '@/components/About';
import Works from '@/components/Works';
import Concepts from '@/components/Concepts';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black -z-10">
      <div className="relative w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink/50 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-1"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-2"></div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <PageTransition>
      <div className="relative">
         <section id="hero-portfolio" className="min-h-[60vh] flex items-center justify-center relative overflow-hidden grain-texture pt-20">
            <AnimatedBackground />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold mb-6 leading-none"
              >
                <span className="block text-gradient">DISEÑO</span>
                <span className="block text-cream">QUE HABLA</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-lg md:text-xl text-cream/80 max-w-2xl mx-auto"
              >
                Un vistazo a proyectos que combinan arte, estrategia y una pizca de rebeldía para crear experiencias visuales inolvidables.
              </motion.p>
              
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex gap-6 justify-center flex-wrap"
              >
                <Link to="/works">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink text-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-pink border-2 border-pink transition-all duration-300"
                  >
                    EXPLORAR PROYECTOS
                  </motion.button>
                </Link>
              </motion.div>
            </div>
         </section>
        <About />
        <Works />
        <Concepts />
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;