import React from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-section">
      <h3>{t('contact.title')}</h3>
      <p>{parse(t('contact.contactDetails'))}</p>
    </div>
  );
};

export default Contact;
