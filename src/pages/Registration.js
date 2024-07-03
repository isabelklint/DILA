import React from 'react';
import { useTranslation } from 'react-i18next';

const Registration = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('registerInfo.title')}</h2>
      <p className="mt-4">
        {t('registerInfo.registrationLinkText')}:
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScMKNvrrbjDeAX0HFPbHGjoAEWvgqMLgufB-zkDqPH2-_IcQQ/closedform" className="text-blue-500 hover:underline ml-2">{t('register.registrationLinkText')}</a>
      </p>
      <h3 className="text-xl font-bold mt-8">{t('registerInfo.paymentInfoTitle')}</h3>
      <p className="mt-4">
        {t('registerInfo.paymentDetails.bank')}<br />
        {t('registerInfo.paymentDetails.name')}<br />
        {t('registerInfo.paymentDetails.account')}<br />
        {t('registerInfo.paymentDetails.interbankClabe')}<br />
        {t('registerInfo.paymentDetails.reference')}<br />
        <br />
        {t('registerInfo.paymentDetails.importantNote')}<br />
        <br />
        {t('registerInfo.paymentDetails.instructions')}<br />
        {t('registerInfo.paymentDetails.invoiceNote')}<br />
        <br />
        {t('registerInfo.paymentDetails.investment')}<br />
        {t('registerInfo.paymentDetails.includes')}
      </p>
    </div>
  );
}

export default Registration;
