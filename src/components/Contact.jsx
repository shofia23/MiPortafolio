
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: "Esta función estará disponible pronto. ¡Gracias por tu interés!",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:sofia@example.com' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
  ];

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden bg-cream text-black">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl md:text-8xl font-bold mb-6">
            <span className="text-black">HABLEMOS</span>
            <span className="block text-gradient">DE TU PROYECTO</span>
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            ¿Tienes una idea? Hagámosla realidad juntos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-black">NOMBRE</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-black px-4 py-3 focus:border-pink focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-black">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-black px-4 py-3 focus:border-pink focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-black">MENSAJE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-white border-2 border-black px-4 py-3 focus:border-pink focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-pink text-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-pink border-2 border-pink transition-all duration-300 flex items-center justify-center gap-3"
              >
                ENVIAR MENSAJE <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-pink/20"></div>
              <div className="relative bg-black p-8 border-4 border-pink">
                <h3 className="text-3xl font-bold text-cream mb-4">
                  ¡Conectemos!
                </h3>
                <p className="text-cream/80 mb-6">
                  Estoy siempre abierta a nuevos proyectos, colaboraciones y oportunidades creativas. No dudes en contactarme.
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 text-cream hover:text-pink transition-colors group"
                      >
                        <div className="w-12 h-12 bg-pink flex items-center justify-center group-hover:bg-cream transition-colors">
                          <Icon className="text-black" size={24} />
                        </div>
                        <span className="font-bold">{link.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-black p-8 border-2 border-pink">
              <h4 className="text-2xl font-bold text-cream mb-4">Disponibilidad</h4>
              <p className="text-cream/80">
                Actualmente aceptando proyectos freelance y colaboraciones. Tiempo de respuesta: 24-48 horas.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center border-t-2 border-black/20 pt-8"
        >
          <p className="text-black/60">
            © 2025 Sofía Peña Calderón. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
