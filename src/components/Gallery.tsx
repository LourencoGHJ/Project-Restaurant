import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://www.centralchurrasco.pt/app/uploads/2016/12/IMG_3716-1.jpg',
    title: 'Interior do Restaurante'
  },
  {
    url: 'https://www.centralchurrasco.pt/app/uploads/2016/12/IMG_3722-1.jpg',
    title: 'Grelhados na Brasa'
  },
  {
    url: 'https://www.centralchurrasco.pt/app/uploads/2016/12/IMG_3731-1.jpg',
    title: 'Especialidades da Casa'
  },
  {
    url: 'https://www.centralchurrasco.pt/app/uploads/2016/12/IMG_3754-1.jpg',
    title: 'Ambiente Acolhedor'
  },
  {
    url: 'https://www.centralchurrasco.pt/app/uploads/2016/12/IMG_3767-1.jpg',
    title: 'Pratos Tradicionais'
  },
  {
    url: 'https://www.centralchurrasco.pt/app/uploads/2016/12/IMG_3788-1.jpg',
    title: 'Nossa Cozinha'
  }
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold text-center px-4">
              {image.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;