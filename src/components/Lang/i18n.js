import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationHU from './hu.json';

const resources = {
  en: {
    translation: translationEN,
  },
  hu: {
    translation: translationHU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'hu', // Alapértelmezett nyelv
  fallbackLng: 'hu',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;