import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importez vos fichiers de traduction
import translationFR from '../public/locales/fr/translation.json';
import translationEN from '../public/locales/en/translation.json';
// import translationES from '../public/locales/es/translation.json'; // Supprimé

const resources = {
  fr: {
    translation: translationFR,
  },
  en: {
    translation: translationEN,
  },
  // es: { // Supprimé
  //   translation: translationES,
  // },
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Passe l'instance i18n à react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Langue par défaut si la détection échoue ou si une traduction manque
    debug: false, // Mettez à true pour le débogage
    interpolation: {
      escapeValue: false, // React protège déjà contre les attaques XSS
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'html'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;