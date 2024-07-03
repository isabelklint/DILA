import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const subjectsList = t('homeDetails.subjectsList', { returnObjects: true });
  const electivesList = t('homeDetails.electivesList', { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-[#1A2534]">{t('welcome')}</h2>
      <div className="text-lg leading-relaxed mt-4 space-y-6 text-[#1A2534]">
        <p><strong>{t('homeDetails.title')}</strong></p>
        <p>{t('homeDetails.sessionDetails')}</p>
        <p>{t('homeDetails.description')}</p>
        <p><strong>{t('homeDetails.compulsorySubjects')}</strong></p>
        {Array.isArray(subjectsList) && (
          <ul className="list-disc list-inside ml-4">
            {subjectsList.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        )}
        <p><strong>{t('homeDetails.electivesTitle')}</strong></p>
        {Array.isArray(electivesList) && (
          <ul className="list-disc list-inside ml-4">
            {electivesList.map((elective, index) => (
              <li key={index}>{elective}</li>
            ))}
          </ul>
        )}
        <p>{t('homeDetails.quality')}</p>
      </div>
    </div>
  );
}

export default Home;
