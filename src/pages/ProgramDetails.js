import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProgramDetails = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('programDetails')}</h2>
      <p>{t('programDetailsSections.description')}</p>
      <ul>
        <li>
          <Link to="/course-catalog">{t('programDetailsSections.courseCatalog')}</Link>
        </li>
        <li>
          <Link to="/docents">{t('programDetailsSections.docents')}</Link>
        </li>
        <li>
          <Link to="/admin-team">{t('programDetailsSections.adminTeam')}</Link>
        </li>
        <li>
          <Link to="/puebla-city-description">{t('programDetailsSections.pueblaCityDescription')}</Link>
        </li>
        <li>
          <Link to="/buap-description">{t('programDetailsSections.buapDescription')}</Link>
        </li>
        <li>
          <Link to="/ilv-description">{t('programDetailsSections.ilvDescription')}</Link>
        </li>
      </ul>
    </>
  );
};

export default ProgramDetails;
