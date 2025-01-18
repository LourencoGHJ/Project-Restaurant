import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'pt', label: '🇵🇹 Português' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'fr', label: '🇫🇷 Français' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md shadow-lg 
                   border border-gray-200 cursor-pointer hover:bg-white 
                   transition-all appearance-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector; 