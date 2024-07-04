import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import affiliateLogos from '../images/affiliate_logos.png';
import dilaLogoTransparente from '../images/dila_logo.svg';
import LanguageSwitcher from './LanguageSwitcher'; // Adjust the path as necessary

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white py-4 text-[#1A2534] shadow-md">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:space-x-4 flex-shrink-0 mb-4 md:mb-0">
          <img src={dilaLogoTransparente} alt="Dila Logo" className="h-10 mb-4 md:mb-0 px-4" />
          <img src={affiliateLogos} alt="Affiliate Logos" className="h-10 px-4" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-end md:space-x-4 text-uppercase w-full md:w-auto">
          <Link to="/" className="text-[#1A2534] hover:text-blue-500 mb-2 md:mb-0 px-4">{t('home').toUpperCase()}</Link>
          <Link to="/academics" className="text-[#1A2534] hover:text-blue-500 mb-2 md:mb-0 px-4">{t('academics').toUpperCase()}</Link>
          <Link to="/registration" className="text-[#1A2534] hover:text-blue-500 mb-2 md:mb-0 px-4">{t('register').toUpperCase()}</Link>
          <Link to="/instructors" className="text-[#1A2534] hover:text-blue-500 mb-2 md:mb-0 px-4">{t('instructors').toUpperCase()}</Link>
          <Link to="/history" className="text-[#1A2534] hover:text-blue-500 mb-2 md:mb-0 px-4">{t('about').toUpperCase()}</Link>
          <Link to="/alumni" className="text-[#1A2534] hover:text-blue-500 mb-2 md:mb-0 px-4">{t('alumni').toUpperCase()}</Link>
          <Link to="/contact" className="text-[#1A2534] hover:text-blue-500 mb-2 md:mb-0 px-4">{t('contact.title').toUpperCase()}</Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
