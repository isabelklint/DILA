import React from 'react';
import { useTranslation } from 'react-i18next';

const BuapDescription = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('BUAP Description')}</h2>
      <p className="mt-4">Description of BUAP.</p>
    </div>
  );
}

export default BuapDescription;
