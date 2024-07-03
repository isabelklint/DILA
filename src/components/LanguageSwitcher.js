import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher flex space-x-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('es')} 
        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;
