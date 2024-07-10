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
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <img src={dilaLogoTransparente} alt="Dila Logo" className="h-10" />
            <img src={affiliateLogos} alt="Affiliate Logos" className="h-10 hidden md:block" />
          </div>
        </div>
        <div className="flex items-center space-x-4 flex-grow justify-end">
          <Link to="/" className="text-[#1A2534] hover:text-blue-500 px-4">{t('home').toUpperCase()}</Link>
          <Link to="/academics" className="text-[#1A2534] hover:text-blue-500 px-4">{t('academics').toUpperCase()}</Link>
          <Link to="/registration" className="text-[#1A2534] hover:text-blue-500 px-4">{t('register').toUpperCase()}</Link>
          <Link to="/instructors" className="text-[#1A2534] hover:text-blue-500 px-4">{t('instructors').toUpperCase()}</Link>
          <Link to="/history" className="text-[#1A2534] hover:text-blue-500 px-4">{t('about').toUpperCase()}</Link>
          <Link to="/alumni" className="text-[#1A2534] hover:text-blue-500 px-4">{t('alumni').toUpperCase()}</Link>
          <Link to="/contact" className="text-[#1A2534] hover:text-blue-500 px-4">{t('contact.title').toUpperCase()}</Link>
          <LanguageSwitcher />
        </div>
      </nav>
      <div className="md:hidden flex justify-center mt-4">
        <img src={affiliateLogos} alt="Affiliate Logos" className="h-10" />
      </div>
    </header>
  );
};

export default Header;
