import React from 'react';
import { useTranslation } from 'react-i18next';

const CourseCatalog = () => {
  const { t } = useTranslation();

  const modules = t('courseCatalogDetails.modules', { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">{t('courseCatalogDetails.title')}</h2>
      <p className="mt-4">{t('courseCatalogDetails.description')}</p>
      {Object.keys(modules).map((key, index) => (
        <div key={index} className="mt-8">
          <h3 className="text-2xl font-semibold">{modules[key].title}</h3>
          <p className="mt-2">{modules[key].description}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseCatalog;
