import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, Linkedin, Send, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactModal = ({ isOpen, onClose }) => {
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
    setFormData({ name: '', email: '', message: '' });
    onClose();
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

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        >
          <motion.div
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-cream text-black p-8 md:p-12 border-4 border-pink max-h-[90vh] overflow-y-auto"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-pink transition-colors">
              <X size={32} />
            </button>
            
            <div className="text-center mb-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-black">HABLEMOS</span>
                <span className="block text-gradient">DE TU PROYECTO</span>
              </h2>
              <p className="text-lg text-black/70 max-w-2xl mx-auto">
                ¿Tienes una idea? Hagámosla realidad juntos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-1 text-black">NOMBRE</label>
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
                    <label className="block text-sm font-bold mb-1 text-black">EMAIL</label>
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
                    <label className="block text-sm font-bold mb-1 text-black">MENSAJE</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-white border-2 border-black px-4 py-3 focus:border-pink focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-pink text-black px-8 py-3 font-bold text-lg hover:bg-black hover:text-pink border-2 border-pink transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    ENVIAR <Send size={20} />
                  </motion.button>
                </form>
              </div>

              <div className="space-y-6">
                 <div className="bg-black p-6 border-2 border-pink">
                    <h3 className="text-2xl font-bold text-cream mb-3">
                      ¡Conectemos!
                    </h3>
                    <p className="text-cream/80 mb-4 text-sm">
                      Abierta a nuevos proyectos, colaboraciones y oportunidades creativas.
                    </p>
                    <div className="space-y-3">
                      {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 text-cream hover:text-pink transition-colors group text-sm"
                          >
                            <Icon className="text-pink" size={18} />
                            <span className="font-bold">{link.label}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;