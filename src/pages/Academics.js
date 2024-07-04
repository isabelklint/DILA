import React from 'react';
import { useTranslation } from 'react-i18next';

const Academics = () => {
  const { t } = useTranslation();

  const coursesList = t('coursesDetails.coursesList', { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left bg-custom-blue text-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{t('coursesDetails.title')}</h2>
      <p className="mb-6">{t('coursesDetails.description')}</p>
      {Object.keys(coursesList).map((moduleKey) => (
        <div key={moduleKey} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{coursesList[moduleKey].title}</h3>
          <p>{coursesList[moduleKey].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Academics;
