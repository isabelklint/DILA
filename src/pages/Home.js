import React from 'react';
import { useTranslation } from 'react-i18next';
import banner from '../images/banner_students.png';
import logo_big from '../images/dila_logo.svg';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 bg-custom-blue text-white shadow-lg rounded-lg">
      <div className="relative w-full mb-4">
        <img src={banner} alt="Banner" className="w-full" />
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
          <img src={logo_big} alt="Logo" className="w-full h-full" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">{t('homeDetails.title')}</h2>
        <p className="text-lg mb-2">{t('homeDetails.sessionDetails')}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{t('homeDetails.overviewTitle')}</h3>
        <p className="text-lg">{t('homeDetails.overviewDescription')}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{t('homeDetails.coreSubjectsTitle')}</h3>
        <ul className="list-disc list-inside text-lg">
          {t('homeDetails.coreSubjects', { returnObjects: true }).map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{t('homeDetails.electiveSubjectsTitle')}</h3>
        <p className="text-lg mb-2">{t('homeDetails.electiveSubjectsDescription')}</p>
        <ul className="list-disc list-inside text-lg">
          {t('homeDetails.electiveSubjects', { returnObjects: true }).map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{t('homeDetails.keyInformationTitle')}</h3>
        <p className="text-lg mb-1">{t('homeDetails.cost')}</p>
        <p className="text-lg mb-1">{t('homeDetails.location')}</p>
        <p className="text-lg mb-1">{t('homeDetails.dates')}</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{t('homeDetails.studentProfileTitle')}</h3>
        <ul className="list-disc list-inside text-lg">
          {t('homeDetails.studentProfile', { returnObjects: true }).map((profile, index) => (
            <li key={index}>{profile}</li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{t('homeDetails.additionalDetailsTitle')}</h3>
        <p className="text-lg">{t('homeDetails.additionalDetails')}</p>
      </div>
    </div>
  );
};

export default Home;
