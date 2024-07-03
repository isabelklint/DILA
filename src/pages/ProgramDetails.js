import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProgramDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('programDetails')}</h2>
      <p className="mt-4">{t('programDetailsSections.description')}</p>
      <ul className="mt-4 space-y-2">
        <li>
          <Link to="/course-catalog" className="text-blue-500 hover:underline">{t('programDetailsSections.courseCatalog')}</Link>
        </li>
        <li>
          <Link to="/docents" className="text-blue-500 hover:underline">{t('programDetailsSections.docents')}</Link>
        </li>
        <li>
          <Link to="/admin-team" className="text-blue-500 hover:underline">{t('programDetailsSections.adminTeam')}</Link>
        </li>
        <li>
          <Link to="/puebla-city-description" className="text-blue-500 hover:underline">{t('programDetailsSections.pueblaCityDescription')}</Link>
        </li>
        <li>
          <Link to="/buap-description" className="text-blue-500 hover:underline">{t('programDetailsSections.buapDescription')}</Link>
        </li>
        <li>
          <Link to="/ilv-description" className="text-blue-500 hover:underline">{t('programDetailsSections.ilvDescription')}</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProgramDetails;
