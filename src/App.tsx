import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWineGlass, FaUtensils, FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaFire, FaParking, FaWifi } from 'react-icons/fa';
import ReservationModal from './components/ReservationModal';
import LanguageSelector from './components/LanguageSelector';
import Gallery from './components/Gallery';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer';


const Section = ({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

type MenuCategory = {
  title: string;
  items: {
    name: string;
    price?: string;
  }[];
};

const menuData: MenuCategory[] = [
  {
    title: "Entradas",
    items: [
      { name: "Camarão Grelhado", price: "18€" },
      { name: "Chouriço", price: "8€" },
      { name: "Prato de Presunto", price: "15€" },
      { name: "Queijo & Manteiga", price: "6€" },
      { name: "Azeitonas", price: "4€" },
      { name: "Pão de Alho", price: "5€" },
      { name: "Codorniz", price: "12€" },
      { name: "Chouriço Crioulo", price: "9€" },
      { name: "Caldo Verde", price: "5€" },
      { name: "Sopa do Dia", price: "4€" },
    ]
  },
  {
    title: "Saladas",
    items: [
      { name: "Salada Mediterrânica", price: "12€" },
      { name: "Salada de Tomate", price: "6€" },
      { name: "Salada Mista", price: "7€" },
      { name: "Salada Mista c/ Pimento", price: "8€" },
      { name: "Salada de Alface", price: "5€" },
      { name: "Salada de Pimentos", price: "6€" },
    ]
  },
  {
    title: "Carnes",
    items: [
      { name: "Picanha", price: "28€" },
      { name: "Secretos de Porco Ibérico", price: "24€" },
      { name: "Espetada de Bovino", price: "26€" },
      { name: "Costeletão à Transmontana", price: "32€" },
      { name: "Coração de Alcatra c/ Molho Madeira", price: "30€" },
      { name: "Tornedó c/ Molho 4 Pimentas", price: "34€" },
      { name: "Lombo de Porco Ibérico", price: "25€" },
    ]
  },
  {
    title: "Peixes",
    items: [
      { name: "Bacalhau Assado na Brasa", price: "28€" },
      { name: "Bacalhau à Braga", price: "26€" },
      { name: "Bacalhau c/ Broa", price: "27€" },
      { name: "Dourada Escalada", price: "24€" },
      { name: "Robalo Escalado", price: "26€" },
      { name: "Salmão Grelhado", price: "23€" },
      { name: "Espetada de Polvo", price: "29€" },
    ]
  },
  {
    title: "Acompanhamentos",
    items: [
      { name: "Batata à Murro", price: "5€" },
      { name: "Espinafres Salteados", price: "6€" },
      { name: "Legumes Salteados", price: "6€" },
      { name: "Arroz de Feijão", price: "5€" },
      { name: "Batata Frita", price: "4€" },
    ]
  }
];

const MenuItem = ({ name, price }: { name: string; price?: string }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    className="menu-item group py-4 px-6 border-b border-red-700/10 last:border-0"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-heading">{name}</h3>
      {price && <p className="text-red-700 font-semibold">{price}</p>}
    </div>
  </motion.div>
);

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="gallery-image group cursor-pointer"
  >
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
      <p className="text-white text-lg font-heading opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        {alt}
      </p>
    </div>
    <img src={src} alt={alt} className="transform group-hover:scale-110 transition-transform duration-700" />
  </motion.div>
);

function App() {
  const { t } = useTranslation();
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <LanguageSelector />
      
      {/* Hero Section */}
      <Section id="hero" className="relative h-screen">
        <div className="absolute inset-0 bg-[url('./img/churrasco-bg.jpg')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-6xl md:text-8xl font-bold mb-4 text-center"
          >
            Central Churrasco
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white text-xl md:text-2xl font-light tracking-[0.3em] mb-12"
          >
            {t('hero.since')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <button onClick={() => setIsReservationOpen(true)} 
              className="bg-red-700 text-white px-8 py-4 text-lg tracking-wider hover:bg-red-800 transition-all duration-300 transform hover:scale-105">
              {t('hero.reserve')}
            </button>
            <a href="#menu" 
              className="border-2 border-white text-white px-8 py-4 text-lg tracking-wider hover:bg-white/10 transition-all duration-300">
              {t('hero.menu')}
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Características */}
      <Section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <FaParking className="text-4xl text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Estacionamento</h3>
              <p className="text-gray-600">Amplo estacionamento gratuito</p>
            </div>
            <div className="text-center">
              <FaWineGlass className="text-4xl text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Carta de Vinhos</h3>
              <p className="text-gray-600">Seleção premium de vinhos portugueses</p>
            </div>
            <div className="text-center">
              <FaWifi className="text-4xl text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wi-Fi Grátis</h3>
              <p className="text-gray-600">Conexão de alta velocidade</p>
            </div>
            <div className="text-center">
              <FaFire className="text-4xl text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grelhados na Brasa</h3>
              <p className="text-gray-600">Carnes selecionadas e grelhadas na hora</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Galeria */}
      <Section id="gallery" className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Galeria</h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8" />
          </div>
          <Gallery />
        </div>
      </Section>

      {/* Menu */}
      <Section id="menu" className="bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O Nosso Menu</h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8" />
          </div>
          
          <div className="max-w-6xl mx-auto">
            {menuData.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 last:mb-0"
              >
                <h3 className="text-2xl font-heading text-red-800 mb-6 pb-2 border-b border-red-700/20">
                  {category.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <MenuItem
                      key={itemIndex}
                      name={item.name}
                      price={item.price}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Localização */}
      <Section className="bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Localização Privilegiada</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Situado no coração de Matosinhos, a poucos metros da praia e do Porto de Leixões.
              O local perfeito para desfrutar da melhor gastronomia portuguesa.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.3538888888887!2d-8.692876!3d41.18263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246f2fb1db84d9%3A0x58eeaab33dba88de!2sCentral%20Churrasco%20de%20Matosinhos!5e0!3m2!1spt-PT!2spt!4v1674179778880!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      {/* Sobre Nós */}
      <Section id="about" className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FaFire className="text-4xl text-red-700 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8">Tradição em Churrasco</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Há mais de 45 anos servindo as melhores carnes grelhadas do Porto. 
              Nossa tradição passa de geração em geração, mantendo o sabor autêntico 
              do verdadeiro churrasco português.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer deve ser o último elemento antes do Modal */}
      <Footer />

      {/* Modal de Reserva sempre por último */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
    </div>
  );
}

export default App;