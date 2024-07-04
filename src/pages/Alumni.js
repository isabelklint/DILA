// Alumni.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Alumni = () => {
  const { t } = useTranslation();

  const handleNewsletterSignup = (event) => {
    event.preventDefault();
    // Handle the newsletter sign-up logic here
    alert('Sign up for the newsletter to connect with DILA alumni opportunities.');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 text-left">
      <h2 className="text-2xl font-bold mb-4">{t('alumni')}</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{t('Connect on social media')}</h3>
        <ul className="list-disc pl-6">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">Instagram</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">LinkedIn</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{t('hashtags')}</h3>
        <ul className="list-disc pl-6">
          <li>#DILA2024</li>
          <li>#AppliedLinguistics</li>
          <li>#LinguisticsCommunity</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{t('Newsletter signup')}</h3>
        <p>Our newsletter connects you with DILA alumni opportunities.
        </p><br/>
        <form onSubmit={handleNewsletterSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('emailAddress')}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {t('Sign up')}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Alumni;
