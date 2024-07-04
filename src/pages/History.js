// History.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const History = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h1 className="text-2xl font-bold mb-4">{t('aboutDetails.background.heading')}</h1>
      <p>{t('aboutDetails.background.details')}</p>

      <h2 className="text-xl font-bold mt-6 mb-4">{t('aboutDetails.recentHistory.heading')}</h2>
      <p>{t('aboutDetails.recentHistory.details')}</p>
    </div>
  );
};

export default History;
