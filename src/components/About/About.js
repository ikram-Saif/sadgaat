import React from "react";
import Typed from "react-typed";

import i18n from "../../i18n";
import { withTranslation } from 'react-i18next'




class  About extends React.Component {
    render(){
        
        const {t} = this.props;

        const firstSectionStyle = i18n.dir() ==="ltr"? "site-section-cover half-bg":
                                                    "site-section-cover half-arbg"
                                
            const secondSectionStyle = i18n.dir() ==="ltr"? "site-section  bg-left-half mb-5":
                                                    "site-section bg-left-half-arabic mb-5"

    return(
        <div>

            <div className="ftco-blocks-cover-1">
            <div className={firstSectionStyle}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h1 className="mb-5 text-primary font-weight-bold"  data-aos="fade-up">
                             <span className="typed-words">
                        <Typed
                            strings={[t('about')]}
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


        <div
        className = "site-section about-me" >
            < div
        className = "container" >
            < div
        className = "row align-items-center" >
            < div
        className = "col-md-6 mb-5 mb-md-0" >
            < img
        src = "images/Udhiya_36-e1462034136483.jpg"
        alt = "Image"
        className = "img-fluid" />
            </div>
        <div className="col-md-5 ml-auto">
            <h2 className="text-primary mb-5 font-weight-bold">{t('About Sadagaat')}</h2>
            <blockquote className="quote-29281">
            <p>{t('about_message_1')}</p>
            </blockquote>
            <p>{t('about_message_2')}</p>
            <p>{t('about_message_3')}</p>
            <p>{t('about_message_4')}</p>
        </div>
            </div>
    </div>
    </div>


    <div className = {secondSectionStyle}>
        <div className="container">
            <div className="row mb-5 ">
                <div className="col-md-7 text-center mx-auto">
                    <h2 className="text-primary mb-5 font-weight-bold">{t('The video')}</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <a href="https://youtu.be/zb4gke8npXA" data-fancybox className="btn-video_38929">
                        <span><span className="icon-play"></span></span>
                        <img src="images/ramadan.jpg" alt="Image" className="img-fluid"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
            </div>
    );

}
}

export default withTranslation()(About)