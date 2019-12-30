import React from 'react'
//import i18n from './i18n';
import { useTranslation  } from 'react-i18next';
//import { withNamespaces, WithNamespaces } from 'react-i18next';

function LanguageSelector () {
  const {i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

 
  return (
        <div>
          <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             language 
            </button>
            <div class="dropdown-menu">
                  <a class="dropdown-item" value = "en" onClick={(event) => changeLanguage("en")}>English</a>
                  <a class="dropdown-item" value = "ar" onClick={(event) => changeLanguage("ar")}>العربية</a>
                </div>
            </div>
        </div>
  )
}

export default LanguageSelector