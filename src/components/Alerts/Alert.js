import React from 'react';
import { useTranslation } from 'react-i18next'



function  Alert(){
    const { t, i18n } = useTranslation()

    return (
        <div className="alert alert-success" role="alert">
             {t('Thanks for your message')}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

    );
}

export default Alert;