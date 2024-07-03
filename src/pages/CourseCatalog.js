import React from 'react';
import { useTranslation } from 'react-i18next';

const CourseCatalog = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{t('Course Catalog')}</h2>
      <p>Content for Course Catalog goes here.</p>
    </div>
  );
}

export default CourseCatalog;
