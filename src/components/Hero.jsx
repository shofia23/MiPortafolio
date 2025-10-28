import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black -z-10">
      <div className="relative w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink/50 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-1"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-2"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink/40 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-1"></div>
        <div className="absolute -bottom-8 right-20 w-72 h-72 bg-pink/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-2"></div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden grain-texture pt-20">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-pink/20 blur-xl rounded-full"></div>
              <Sparkles className="relative text-pink w-16 h-16" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl md:text-8xl font-dancing-script font-bold mb-6 leading-tight text-cream"
          >
            Sofía Peña Calderón
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-2 bg-pink/30 transform -skew-x-12"></div>
            <p className="relative text-2xl md:text-3xl font-bold text-black bg-pink px-8 py-3 transform -skew-x-12 font-space-grotesk">
              <span className="inline-block transform skew-x-12">DISEÑADORA GRÁFICA</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-xl text-cream/80 max-w-2xl mx-auto"
          >
            Creando identidades visuales que rompen esquemas y conectan con las emociones
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-6 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#works').scrollIntoView({ behavior: 'smooth' })}
              className="bg-pink text-black px-8 py-4 font-bold text-lg hover:bg-pink/90 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">VER TRABAJOS</span>
              <div className="absolute inset-0 bg-cream transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-pink text-pink px-8 py-4 font-bold text-lg hover:bg-pink hover:text-black transition-all duration-300"
            >
              CONTACTO
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-pink rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-pink rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;