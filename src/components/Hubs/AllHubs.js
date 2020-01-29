
import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import axios from "axios";
import spinner from "../spinner.gif";
import Typed from "react-typed";
import {address} from  "../address"
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'


class  AllHubs extends React.Component {


    constructor(props) {
        i18n.language = 'en'
        super(props);
        this.state = {
            isLoading: true,
            hubs: [],
            changeDirection :"site-section-cover half-bg",
            changeSecondSection : "site-section  bg-left-half mb-5"
        };
    }



    componentDidMount() {


        axios.get(`${address()}/hubs/`,  { headers: {'accept-language':`${i18n.language}`}})
            .then(response => {
                this.setState({
                    isLoading: false,
                    hubs: response.data
            });

            })
            .catch(error => {
             
            });

    }

   /* componentDidUpdate()
    {

        console.log("component did update called")
                const styleChanged = i18n.dir() =="ltr"? "site-section-cover half-bg":"site-section-cover half-arbg"
                const secondSectionStyle = i18n.dir() =="ltr"? "site-section  bg-left-half mb-5":"site-section  bg-left-half-arabic mb-5"

        axios.get("http://192.168.1.112:8081/api/v1/hubs/",{ headers: {'accept-language': `${i18n.language}`}})
        .then(response => {
            this.setState({
                isLoading: false,
                hubs: response.data,
                changeDirection: styleChanged,
                changeSecondSection : secondSectionStyle
            });


        })
        .catch(error => {
            console.log(error);
        });
    }*/


    render() {


        const {error, isLoading, hubs} = this.state;
        const {t} = this.props;


        return (
            this.state.isLoading ? <div className="loader"><img src={spinner}/></div> :

                <div  style={{direction: i18n.dir()}} >
                    <div className="ftco-blocks-cover-1">
                        <div className = {this.state.changeDirection}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-12 text-center">
                                        <h1 className="mb-5 text-primary font-weight-bold" data-aos="fade-up">
                                        <span className="typed-words">
                                                <Typed
                                                    strings={[t('hubs')]}
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

                <div className="site-section">
                  <div className="container">
                    <div className="row d-flex justify-content-around">
                        {hubs.map(hub => (
                            <div className="col-lg-3 col-md-6 mb-4 ">
                                <div className="post-entry-1 h-100 ">
                                    <div className="text-center">
                                        <img src={(hub.imageUrl)} alt="Image"
                                             className="image"/>
                                    </div>
                                    <div className="post-entry-1-contents">

                                        <h2><a href="single.html">{hub.name}</a></h2>

                                           <p>{t('Description:')}{hub.description}</p>

                                        <p> <Link to={`hubs/${hub.id}/subHubs`} className="more-92913">{t('view_subhubs')}</Link></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                </div>
        )

    }
}


export default withTranslation()(AllHubs);