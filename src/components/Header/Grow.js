import React from 'react';
import Typed from 'react-typed';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';

function  Grow(){

  const {t} = useTranslation()
   const styleChanged = i18n.dir() ==="ltr"? "site-section-cover half-bg":"site-section-cover half-arbg"

    return (

        <div className="ftco-blocks-cover-1">
          <div className={styleChanged}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 text-center">
                    <h1 className="mb-5 text-primary font-weight-bold"  data-aos="fade-up">
                    {t('charitable Activities')} <span className="typed-words">
                        <Typed
                        strings={[t('organization')]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                        showCursor
                    />
                    </span>.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
}

export default Grow;