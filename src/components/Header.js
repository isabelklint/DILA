import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-[#1A2534] py-4 text-white">
      <nav className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold">DILA</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-[#61dafb]">{t('Home')}</Link>
          <Link to="/about" className="text-[#61dafb]">{t('about')}</Link>
          <Link to="/program-details" className="text-[#61dafb]">{t('programDetails')}</Link>
          <Link to="/registration" className="text-[#61dafb]">{t('register')}</Link>
          <Link to="/contact" className="text-[#61dafb]">{t('contact')}</Link>
        </div>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
