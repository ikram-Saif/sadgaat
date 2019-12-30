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
          <form>
          <div className="form-group bg-transparent border-0">
          <select className = "form-control" onChange={(event) => changeLanguage(event.target.value)}>
            <option className ="bg-transparent border-0" value="en" >English</option>
            <option className ="bg-transparent border-0" value="ar" >العربية</option>
          </select>
          </div>
          </form>
          
        </div>
  )
}

export default LanguageSelector