import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import axios from "axios";
import spinner from "../spinner.gif";
import Typed from "react-typed";

import i18n from 'i18next'
import { withTranslation } from 'react-i18next'
import { address } from "../address";

class  subHubs  extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            subHubs: [],
        };
    }



    componentDidMount() {


        axios.get(`${address()}/subHubs/`,{ headers: {'accept-language': `${i18n.language}`}})
            .then(response => {

               // console.log(response.data);

                this.setState({
                    isLoading: false,
                    subHubs: response.data,
                });


            })

            .catch(error => {
                console.log(error);
            });
    }

   /* componentDidUpdate() {


        axios.get("http://192.168.1.112:8081/api/v1/subHubs/",{ headers: {'accept-language': `${i18n.language}`}})
            .then(response => {

               // console.log(response.data);

                this.setState({
                    isLoading: false,
                    subHubs: response.data,
                });


            })

            .catch(error => {
                console.log(error);
            });
    }*/



    render(){

        const { error, isLoaded, subHubs } = this.state;
        const {t} = this.props
        const styleChanged = i18n.dir() =="ltr"? "site-section-cover half-bg":"site-section-cover half-arbg"


    return (

        this.state.isLoading ? <div className="loader"><img  src={spinner} /></div>:

            <div>
            <div className="ftco-blocks-cover-1">
                <div className = {styleChanged}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8">
                                <h1 className="mb-5 text-primary font-weight-bold"  data-aos="fade-up">
                                    {t('sub')} <span className="typed-words">
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


                        {subHubs.map(sub => (
                            <div className="col-lg-3 col-md-6 mb-4">
                            <div className="media-29101">
                            <a href="#"><img src={(sub.imageUrl)} alt="Image" className="image"></img></a>
                            <h3><a href="#">{sub.name}</a></h3>
                            <p>Description:{sub.description}</p>

                            <p><Link to={`/subHubs/${sub.id}/projects`}
                               className="more-92913">{t('view_projects')}</Link></p>
                            </div>

                            </div>

                        ))}

                </div>
                </div>
            </div>
        </div>


    );
}
}

export default withTranslation()(subHubs);