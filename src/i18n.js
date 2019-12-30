import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


//import  '../public/locales/en/translation.json'
//import  '../public/locales/ar/translation.json';

const availableLanguages = ['en', 'ar'];

// the translations
/*const resources = {
 en: {
   translation: translationEN
    
  },
 ar: {
   translation: translationAR
  }
};*/

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    lng: 'en',
    //resources,
    fallbackLng :'en', // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: true,
    whitelist: availableLanguages,
 

    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      useSuspense: false 
    },
  });

export default i18n;