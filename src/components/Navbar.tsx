import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold">
            Central Churrasco
          </a>
          <div className="hidden md:flex space-x-8">
            {['menu', 'gallery', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-red-700 transition-colors`}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;