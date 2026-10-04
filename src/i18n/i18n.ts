import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    // Regional codes from the browser ("en-GB", "ru-RU") resolve to these,
    // anything else falls back to Russian.
    supportedLngs: ['ru', 'en'],
    load: 'languageOnly',
    debug: false,

    interpolation: {
      escapeValue: false,
    }
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});


export default i18n;
