import React from 'react';
import { useTranslation } from 'react-i18next';

const Docents = () => {
  const { t } = useTranslation();
  const docentsList = t('docentsList', { returnObjects: true });

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('docents')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {docentsList.map((docent, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={docent.img} alt={docent.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{docent.name}</h3>
              <p className="text-gray-600">{docent.role}</p>
              <p className="mt-2 text-gray-800">{docent.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Docents;
