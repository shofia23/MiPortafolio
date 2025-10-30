import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 starburst"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-pink"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink/20"></div>
              <div className="relative aspect-square overflow-hidden">
                <img
                  class="w-full h-full object-cover transition-all duration-500"
                  alt="Sofía Peña Calderón - Diseñadora Gráfica"
                  src="/MiPortafolio/img/sofia.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pink/40 to-transparent mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative inline-block mb-6">
              <h2 className="text-5xl md:text-6xl font-bold text-cream">
                SOBRE
                <span className="block text-gradient">MÍ</span>
              </h2>
              <div className="absolute -bottom-2 right-0 w-24 h-1 bg-pink"></div>
            </div>

            <div className="space-y-6 text-lg text-cream/80">
              <p>
                Soy una diseñadora gráfica apasionada por crear experiencias visuales que desafían lo convencional. Mi trabajo se caracteriza por la fusión de elementos punk, tipografías audaces y una paleta de colores vibrante que no pasa desapercibida.
              </p>
              
              <p>
                Con formación en diseño gráfico, me especializo en branding, diseño editorial y arte visual contemporáneo. Creo que el diseño debe ser disruptivo, emocional y auténtico.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="border-l-4 border-pink pl-4">
                  <p className="text-3xl font-bold text-pink">Técnico</p>
                  <p className="text-sm text-cream/60">Integracion de contenidos digitales</p>
                </div>
                <div className="border-l-4 border-pink pl-4">
                  <p className="text-3xl font-bold text-pink">Actualmente</p>
                  <p className="text-sm text-cream/60">Tecnólogo Producción multimedia</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6">
                {['Diseño', 'Editorial', 'Ilustración', 'Edición de AUD y', 'Identidad Visual'].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-pink/20 border border-pink text-pink px-4 py-2 font-bold text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;