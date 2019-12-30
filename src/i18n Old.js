import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)

  const language =['en','ar']
  .init({
    lng: 'en',
    
    //backend: {
      /* translation file path */
    //  loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
   //},
    fallbackLng: 'en',
   /* resources:{
      en: '/assets/i18n/{{ns}}/en.json',
      ar: '/assets/i18n/{{ns}}/ar.json'
  },*/
    debug: true,
    whiteList:language,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    //ns: ['translations'],
    //defaultNS: 'translations',
    //keySeparator: false,
    interpolation: {
      escapeValue: false,
     // formatSeparator: ','
    }
    //react: {
      //wait: true,
     // useSuspense: false 
    //},
 
  })

export default i18n
