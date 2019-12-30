import React from 'react';
import axios from "axios";

import i18n from 'i18next'
import { withTranslation } from 'react-i18next'
import{address}from '../address'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  //  isLoading:true,
      links: [],
      f : "facebook"
    };
  }


  componentDidMount() {
    axios.get(`${address()}/contactUsInfos`, {headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
          console.log(response.data);
          this.setState({
            // isLoading: false,
            links: response.data,

          });

        })
        .catch(error => {
          console.log(error);
        });
  }

 /* componentDidUpdate() {

    axios.get("http://http://192.168.1.110:8081/api/v1/contactUsInfos/", {headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
          // console.log("moiz".response.data);

          this.setState({
            // isLoading: false,
            links: response.data,
          });
        })
        .catch(error => {
          console.log(error);
        });
  }*/


  render() {

    const { error, isLoaded, links ,f} = this.state;
    const {t} = this.props;


    return(


<div>


            <div className="footer site-section">
            <div className="container ">
              <div className="row">
                <div className="col-md-3">
                  <div className="site-logo-footer">
                      <a href="index.html">{t('Sadagaat')}</a>
                        <p>{t('Nonprofit Organization')}</p>
                  </div>
                  <div className="row mb-4">
                    <div className="col">

                      {links.map(mem =>(
                      <a href={mem.url} target={"_blak"} ><span className={"m-2 icon-"+mem.name}></span></a>
                      ))}

                    </div>
                  </div>
                </div>
                <div className="col-md-8 ml-auto">
                  <div className="row">
                    <div className="col-md-4 ml-auto">
                      <ul className="list-unstyled links">
                        <li className="heading">{t('email_address')}</li>
                        <li>Sadagaat@Sadagaat.org</li>
                      </ul>
                      
                    </div>
                    <Router>
                      <div className="col-md-4">
                        <ul className="list-unstyled links">
                          <li className="heading">{t('phone')} </li>
                          <li>+1-800-588-9169</li>

                        </ul>
                      </div>
                    </Router>

                    <div className="col-md-4">
                      <ul className="list-unstyled links">
                        <li className="heading">{t('address')} </li>
                        <li>Sadagaat-org.ue</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="language">
            <div className ="container">
            <div className="row justify-content-center">
                   
                   </div>
                   </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <p>
                    {t('Copyright')} &copy; {new Date().getFullYear()} {t('Sadagaat | Non-Profit Tax-Exempt Organization')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
    )
  }
}

export default withTranslation()(Footer);