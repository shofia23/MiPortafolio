import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Zap, Heart, Sparkles } from 'lucide-react';
import FlowFieldBackground from '@/components/FlowFieldBackground';

const Concepts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    {
      icon: Palette,
      title: 'DISEÑO DISRUPTIVO',
      description: 'Rompo con lo establecido para crear identidades visuales que impactan y permanecen en la memoria.'
    },
    {
      icon: Zap,
      title: 'ENERGÍA VISUAL',
      description: 'Cada proyecto está cargado de dinamismo, color y movimiento que captura la atención al instante.'
    },
    {
      icon: Heart,
      title: 'CONEXIÓN EMOCIONAL',
      description: 'El diseño debe tocar fibras, generar emociones y crear vínculos auténticos con la audiencia.'
    },
    {
      icon: Sparkles,
      title: 'INNOVACIÓN CONSTANTE',
      description: 'Siempre explorando nuevas técnicas, tendencias y formas de expresión visual contemporánea.'
    }
  ];

  return (
    <section id="concepts" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <FlowFieldBackground />
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-cream">MIS</span>
            <span className="block text-gradient">CONCEPTOS</span>
          </h2>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Los pilares que definen mi filosofía de diseño
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-pink/20 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                
                <div className="relative bg-black border-2 border-pink p-8 hover:bg-pink/5 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-black" size={32} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-cream mb-4 group-hover:text-pink transition-colors duration-300">
                        {concept.title}
                      </h3>
                      <p className="text-cream/70 leading-relaxed">
                        {concept.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-pink/20 blur-xl"></div>
            <p className="relative text-2xl md:text-3xl font-bold text-cream max-w-3xl">
              "El diseño no es solo lo que se ve, es lo que se <span className="text-gradient">SIENTE</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Concepts;