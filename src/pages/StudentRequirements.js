import React from 'react';
import { useTranslation } from 'react-i18next';

const StudentRequirements = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('studentRequirements.title')}</h2>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{t('studentRequirements.languageProficiency.heading')}</h3>
        <p>{t('studentRequirements.languageProficiency.details')}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{t('studentRequirements.educationalBackground.heading')}</h3>
        <p>{t('studentRequirements.educationalBackground.details')}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{t('studentRequirements.professionalExperience.heading')}</h3>
        <p>{t('studentRequirements.professionalExperience.details')}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{t('studentRequirements.technicalSkills.heading')}</h3>
        <p>{t('studentRequirements.technicalSkills.details')}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{t('studentRequirements.otherRequirements.heading')}</h3>
        <p>{t('studentRequirements.otherRequirements.details')}</p>
      </div>
    </div>
  );
}

export default StudentRequirements;
