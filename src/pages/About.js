import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const subjectsList = t('aboutInfo.subjectsList', { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('about')}</h2>
      <div className="text-lg leading-relaxed mt-4 space-y-4">
        <h3 className="text-xl font-semibold">{t('aboutInfo.heading')}</h3>
        <p>{t('aboutInfo.sessionDetails')}</p>
        <p>{t('aboutInfo.description')}</p>
        <p>
          <span className="font-semibold">{t('aboutInfo.compulsorySubjects')}</span>
          <ul className="list-disc list-inside ml-4 mt-2">
            {subjectsList.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </p>
        <p>
          <span className="font-semibold">{t('aboutInfo.electives')}</span>
        </p>
        <p>{t('aboutInfo.quality')}</p>
      </div>
    </div>
  );
}

export default About;
