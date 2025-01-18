import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.about.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <FaTripadvisor size={24} />
              </a>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.hours.title')}</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex justify-between">
                <span>{t('footer.hours.weekdays')}</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.hours.weekends')}</span>
                <span>12:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.hours.holidays')}</span>
                <span>12:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact.title')}</h3>
            <ul className="text-gray-400 space-y-4">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+351229379797" className="hover:text-white transition-colors">
                  +351 229 379 797
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                   className="hover:text-white transition-colors">
                  Rua Heróis de França 335,<br />
                  4450-156 Matosinhos
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />
                <span>{t('footer.contact.open')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.newsletter.desc')}
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-4 py-2 bg-stone-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors"
              >
                {t('footer.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Central Churrasco. Realizado por LourencoGHJ. {t('footer.rights')}
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 