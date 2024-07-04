import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-100 shadow-lg rounded-lg text-[#1A2534]">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">{t('about')}</h2>
      <div className="text-lg leading-relaxed mt-4 space-y-6">
        <h3 className="text-xl font-semibold text-blue-700">{t('aboutDetails.background.heading')}</h3>
        <p className="text-gray-700">{t('aboutDetails.background.details')}</p>

        <h3 className="text-xl font-semibold text-blue-700">{t('aboutDetails.targetAudience.heading')}</h3>
        <p className="text-gray-700">{t('aboutDetails.targetAudience.details')}</p>

        <h3 className="text-xl font-semibold text-blue-700">{t('aboutDetails.academicRequirements.heading')}</h3>
        <p className="text-gray-700">{t('aboutDetails.academicRequirements.details')}</p>

        <h3 className="text-xl font-semibold text-blue-700">{t('aboutDetails.cost.heading')}</h3>
        <p className="text-gray-700">{t('aboutDetails.cost.details')}</p>

        <h3 className="text-xl font-semibold text-blue-700">{t('aboutDetails.evaluationMechanisms.heading')}</h3>
        <p className="text-gray-700">{t('aboutDetails.evaluationMechanisms.details')}</p>

        <h3 className="text-xl font-semibold text-blue-700">{t('aboutDetails.recentHistory.heading')}</h3>
        <p className="text-gray-700">{t('aboutDetails.recentHistory.details')}</p>
      </div>
    </div>
  );
};

export default About;
