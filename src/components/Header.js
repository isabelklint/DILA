import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import affiliateLogos from '../images/affiliate_logos.png';
import dilaLogoTransparente from '../images/dila_logo_transparente.png';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white py-4 text-[#1A2534] shadow-md">
      <nav className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <img src={dilaLogoTransparente} alt="Dila Logo" className="h-10"/>
          <img src={affiliateLogos} alt="Affiliate Logos" className="h-10"/>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-[#1A2534] hover:text-blue-500">{t('Home')}</Link>
          <Link to="/about" className="text-[#1A2534] hover:text-blue-500">{t('about')}</Link>
          <Link to="/program-details" className="text-[#1A2534] hover:text-blue-500">{t('programDetails')}</Link>
          <Link to="/registration" className="text-[#1A2534] hover:text-blue-500">{t('register')}</Link>
          <Link to="/contact" className="text-[#1A2534] hover:text-blue-500">{t('contact')}</Link>
        </div>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
