import React from "react";
import axios from "axios";
import Alert from "../Alerts/Alert"
import Typed from "react-typed";
import {address} from "../address"
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'


class  Contact extends React.Component {

    constructor(){
        super();

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);

        this.state = {
             successMessage :'',
             fullName:'',
             email:'',
             message:'',
        }

    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value,
        });
    }

        onChangeEmail(e) {

        this.setState({
            email: e.target.value,
        });

    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value,
        });
    }
    onSubmit=(e)=>{

        e.preventDefault();
        const feedbacks = {
            fullName: this.state.fullName,
            email: this.state.email,
            message: this.state.message,
            sourceWebsite:'uk',
        }

        
        axios.post(`${address()}/feedBacks`,{feedbacks})
            .then(response => {
                this.setState({
                    successMessage : 1,
                    fullName:'',    email:'', message:'', sourceWebsite:'uk'
                });
                console.log(response.data)
            }).catch(error => {
            console.log(error);
        });
    }


            render(){

                const {t} = this.props;
                const styleChanged = i18n.dir() ==="ltr"? "site-section-cover half-bg":
                                                       "site-section-cover half-arbg"
                                   
               const secondSectionStyle = i18n.dir() ==="ltr"? "site-section bg-left-half mb-5":
                                                       "site-section  bg-left-half-arabic mb-5"

    return(
<div>


    <div className="ftco-blocks-cover-1">
        <div className={styleChanged}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h1 className="mb-5 text-primary font-weight-bold"  data-aos="fade-up">
                        {t('contact')} <span className="typed-words">
                        <Typed
                            strings={[t('us')]}
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

    <div className={secondSectionStyle}>
        <div className="container">

            <div className="row">
                <div className="col-lg-8 mb-5">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <div className="col-md-12">
                                {this.state.successMessage==1? <Alert/>:null }
                                <input type="text" className="form-control" placeholder={t('full_name')}
                                       id="fullName"
                                       value={this.state.fullName}
                                       onChange={this.onChangeFullName} required/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-12">
                                <input type="email" className="form-control" placeholder={t('email_address')}
                                       id="email"
                                       value={this.state.email}
                                       onChange={this.onChangeEmail} required/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-12">
                                <textarea name="" id="" className="form-control" placeholder = {t('contact_message')}
                                          cols="30" rows="10" id="message"
                                          value={this.state.message}
                                          onChange={this.onChangeMessage} required></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" 
                                       value={t('send_message')}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4 ml-auto">
                    <div className="bg-white p-3 p-md-5">
                        <h3 className="text-black mb-4">{t('contact_info')}</h3>
                        <ul className="list-unstyled footer-link">
                            <li className="d-block mb-3">
                                <span className="d-block text-black">{t('address')}</span>
                                <span>34 Street Name, City Name Here, United States</span></li>
                            <li className="d-block mb-3"><span className="d-block text-black">{t('phone')}</span><span>+1-800-588-9169</span>
                            </li>
                            <li className="d-block mb-3"><span
                                className="d-block text-black">{t('email_address')}</span><span>Sadagaat@Sadagaat-USA.org</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

    );

}
}

export default withTranslation()(Contact);