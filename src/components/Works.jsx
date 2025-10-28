import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ------------------------------ DATA ------------------------------ */
const projects = [
  {
        title: 'MAKING OFF',
        category: 'Posters',
        thumbnail: '../img/golpe1.jpg',
        alt: 'Poster for Cosmic Club with vibrant cosmic theme',
        description: 'El presente trabajo corresponde al making of de un filminuto, en el cual se documentó el proceso creativo y visual detrás de la producción. Las fotografías fueron cuidadosamente seleccionadas con la intención de diseñar un póster que capture la esencia de la historia y la atmósfera emocional del proyecto.',
        media: [
            { type: 'image', src: '../img/golpe2.jpg', alt: 'Poster for Cosmic Club with vibrant cosmic theme' },
            { type: 'image', src: '../img/golpe3.jpg', alt: 'Cosmic Club Logo Concept' },
            { type: 'image', src: '../img/golpe1.jpg', alt: 'Cosmic Club Logo Concept' },
        ],
        details: [
          'Composición cromática',
          'Intención estética y narrativa',
          'Simbolismo visual',
        ]
      },
      {
        title: 'BOGOTÁ D.C',
        category: 'Edición Poster',
        thumbnail: '../img/bogota.jpg',
        alt: 'Cover of Rebel Magazine with a punk rock design',
        description: 'Este póster está inspirado en la ciudad de Bogotá, Colombia, una urbe vibrante y llena de contrastes que combina lo tradicional con lo moderno. La imagen retrata a un joven músico que, con su guitarra en mano, busca abrirse camino en el mundo artístico y construir su carrera con esfuerzo, pasión y perseverancia. Su actitud refleja el espíritu bogotano: trabajador, soñador y resiliente.',
        media: [
          { type: 'image', src: '../img/bogota.jpg', alt: 'Rebel Magazine Cover' },
        ],
        details: [
          'Inspiración urbana',
          'Protagonismo del músico',
          'Ambientacion Urbana y Punk',
        ]
      },
      {
        title: 'SILENCE PAIN',
        category: 'Poster',
        thumbnail: '../img/silence.jpg',
        alt: 'Cyberpunk illustration of a futuristic city named Neon Dreams',
        description: 'Este póster refleja la resiliencia de una persona ante las adversidades, mostrando a alguien que, pese a sus cicatrices, sigue creyendo que todo puede mejorar. Sus ojos vendados simbolizan esa fe ciega en el futuro, mientras que su postura erguida y brazos cruzados expresan fuerza y determinación. Sin embargo, su sombra de dolor lo acompaña siempre, recordando que la verdadera fortaleza no consiste en olvidar el sufrimiento, sino en aprender a convivir con él y transformarlo en poder.',
        media: [
            
            { type: 'image', src: '../img/silence.jpg', alt: 'Cyberpunk city alley' },
        ],
        details: [
          'Resiliencia',
          'Fuerza y dolor',
          'Colores fuertes',
        ]
      },
      {
        title: 'P0KER PICA A',
        category: 'Fotografia',
        thumbnail: '../img/collar1.jpg',
        alt: 'Branding for Urban Beats music festival',
        description: 'Esta fotografía surge como un ejercicio recreativo orientado a mejorar las habilidades tanto en la toma como en la edición de imágenes. Se trabajó con un diseño en blanco y negro, buscando resaltar los tonos plateados y dar protagonismo a los contrastes de luz y sombra. Este enfoque monocromático permite destacar la carta de póker, elemento central de la composición, que simboliza el azar, la estrategia y el misterio.',
         media: [
          { type: 'image', src: '../img/collar1.jpg', alt: 'Urban Beats festival crowd' },
           { type: 'image', src: '../img/collar2.jpg', alt: 'Urban Beats festival crowd' },
            { type: 'image', src: '../img/collar3.jpg', alt: 'Urban Beats festival crowd' },
        ],
        details: [
          'Identidad adaptable para diferentes formatos.',
          'Diseño de merchandising: camisetas, gorras, etc.',
          'Señalética para el evento.',
        ]
      },
      {
        title: 'DONDE MUERE EL AMOR',
        category: 'FilMinuto',
        thumbnail: '../img/muerte.jpeg',
        alt: 'Showcase of the Vintage Vibes custom typeface',
        description: 'Filminuto con temática de thriller, centrado en una infidelidad que culmina en un clímax intenso. En la escena final, los colores vibrantes dominan la imagen, y el contraste entre los tonos rojo y verde aporta una fuerza visual que realza el dramatismo. Esta composición cromática hace que la mirada se dirija hacia la chica tendida en el suelo, creando un cierre impactante y profundamente cinematográfico.',
        media: [
          { type: 'image', src: '../img/muerte.jpeg', alt: 'Urban Beats festival crowd' },
          { type: 'video', src: '../img/amor.mp4', alt: 'Urban Beats festival crowd' },
        ],
        details: [
          'Estilo visual',
          'Cronomatica',
          
        ]
      },
      {
        title: '  IDENTIFICADOR VISUAL',
        category: 'Branding',
        thumbnail: '../img/logo.jpg',
        alt: 'Branding for electronic music artist Electric Soul',
        description: 'Identificador visual para un emprendimiento pequeño con presencia en Instagram, centrado en una flor de loto ubicada en el centro y acompañada de la palabra “Lotus”. El diseño transmite una energía radiante, simbolizando crecimiento, equilibrio y renovación. La flor de loto se convierte en el eje del concepto, representando el proceso constante de florecer y avanzar, incluso en medio de la adversidad.',
        media: [
          { type: 'image', src: '../img/logo.jpg', alt: 'Abstract gradients for Electric Soul' },
        ],
        details: [
          'Diseño de logotipo .',
          'Loto',
          'rebelde',
        ]
      },
];

/* ------------------------------ COMPONENT ------------------------------ */
const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedMedia, setZoomedMedia] = useState(null);

  const handleCloseProject = () => setSelectedProject(null);

  return (
    <>
      <section
        id="works"
        ref={ref}
        className="py-24 md:py-32 relative overflow-hidden bg-cream text-black"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-black">MIS</span>
              <span className="block text-gradient">TRABAJOS</span>
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Una selección de proyectos que reflejan mi pasión por el diseño disruptivo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-black cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <span className="text-pink text-sm font-bold mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-cream mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-pink font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver Proyecto <ExternalLink size={16} />
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-pink flex items-center justify-center font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ MODAL ------------------------------ */}
      <Dialog open={!!selectedProject} onOpenChange={handleCloseProject}>
        <DialogContent className="bg-black border-pink/50 text-cream p-0 max-w-5xl w-[95%] overflow-hidden z-50">
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="grid md:grid-cols-2 md:gap-x-8">
                {/* Panel izquierdo: carrusel */}
                <div className="relative bg-black/50 h-[55vh] md:h-[560px] overflow-hidden px-4 md:px-6">
                  <Carousel className="w-full h-full" opts={{ loop: true }}>
                    <CarouselContent className="h-full">
  {selectedProject.media.map((item, index) => (
    <CarouselItem key={index} className="p-1">  {/* sin h-full */}
      {/* 🔧 Altura explícita aquí, igual al panel izquierdo */}
      <div className="relative w-full h-[55vh] md:h-[560px]">
        {/* Capa centradora absoluta */}
        <div className="absolute inset-0 flex items-center justify-center">
          {item.type === 'video' ? (
            <video
              className="max-w-full max-h-full object-contain cursor-pointer"
              autoPlay
              loop
              muted
              playsInline
              onClick={() => setZoomedMedia(item)}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={() => setZoomedMedia(item)}
            />
          )}
        </div>

        {/* Overlay de zoom */}
        <div
          onClick={() => setZoomedMedia(item)}
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <ZoomIn className="text-cream w-12 h-12" />
        </div>
      </div>
    </CarouselItem>
  ))}
</CarouselContent>


                    {selectedProject.media.length > 1 && (
                      <>
                        <CarouselPrevious className="left-6 md:left-8 bg-black/50 text-cream border-pink/50 hover:bg-pink hover:text-black" />
                        <CarouselNext className="right-6 md:right-8 bg-black/50 text-cream border-pink/50 hover:bg-pink hover:text-black" />
                      </>
                    )}
                  </Carousel>
                </div>

                {/* Panel derecho: contenido */}
                <div className="p-8 md:p-12 flex flex-col md:h-[600px] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-4xl font-bold text-gradient mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-pink font-bold text-md mb-4">
                      {selectedProject.category}
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-cream/80 mb-6 flex-grow">{selectedProject.description}</p>
                  <ul className="space-y-2 list-disc list-inside text-cream/90 mb-6">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* ------------------------------ ZOOM FULLSCREEN ------------------------------ */}
      <Dialog open={!!zoomedMedia} onOpenChange={() => setZoomedMedia(null)}>
        <AnimatePresence>
          {zoomedMedia && (
            <DialogPortal forceMount>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DialogOverlay className="z-[100]" />
              </motion.div>
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                onClick={() => setZoomedMedia(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, y: 50 }}
                  animate={{ scale: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative w-full h-full max-w-7xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {zoomedMedia.type === 'video' ? (
                    <video className="w-full h-full object-contain" controls autoPlay loop>
                      <source src={zoomedMedia.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={zoomedMedia.src} alt={zoomedMedia.alt} className="w-full h-full object-contain" />
                  )}
                  <button
                    onClick={() => setZoomedMedia(null)}
                    className="absolute -top-3 -right-3 text-cream bg-pink rounded-full p-2 z-10 transition-transform hover:scale-110"
                  >
                    <X size={24} />
                  </button>
                </motion.div>
              </div>
            </DialogPortal>
          )}
        </AnimatePresence>
      </Dialog>
    </>
  );
};

export default Works;
