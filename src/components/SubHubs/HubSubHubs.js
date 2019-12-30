import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import axios from "axios";
import spinner from "../spinner.gif";
import subHubs from "./SubHubs";
import Typed from "react-typed";
import {address} from "../address"

import i18n from 'i18next'
import { withTranslation } from 'react-i18next'


class  HubSubHubs  extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hub_sub_hubs: [],
            has_value:''
        };
    }



    componentDidMount() {

            //console.log(this.props)
        axios.get(`${address()}/hubs/`+this.props.match.params.id+"/subHubs", {
            headers:{
                "accept-language": `${i18n.language}`
            }
        })
            .then(response => {

                //console.log(response.data);

                this.setState({
                    isLoading: false,
                    has_value: true,

                    hub_sub_hubs: response.data

                });

                //alert(response.data)
            })

            .catch(error => {
                console.log(error);

            });
    }
  /*  componentDidUpdate() {

        //console.log(this.props)
    axios.get("http://192.168.1.112:8081/api/v1/hubs/"+this.props.match.params.id+"/subHubs", {
        headers:{
            "accept-language": i18n.lng
        }
    })
        .then(response => {

            //console.log(response.data);

            this.setState({
                isLoading: false,
                has_value: true,

                hub_sub_hubs: response.data

            });

            //alert(response.data)
        })

        .catch(error => {
            console.log(error);

        });
}*/



    render() {

        const {error, isLoading, has_value, hub_sub_hubs} = this.state;
        const {t} = this.props
        const styleChanged = i18n.dir() =="ltr"? "site-section-cover half-bg":"site-section-cover half-arbg"




        if(this.state.hub_sub_hubs.length == 0) {

            return (

                this.state.isLoading ? <div className="loader"><img src={spinner}/></div> :

                <div>
                    <div className="ftco-blocks-cover-1">
                        <div className = {styleChanged}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <h1 className="mb-5 text-primary font-weight-bold" data-aos="fade-up">
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

                        <div className="site-section">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="alert alert-success" role="alert">
                                        {t('no_subhub')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }

        else {

            return (

                this.state.isLoading ? <div className="loader"><img src={spinner}/></div> :

                    <div className="ftco-blocks-cover-1">
                        <div className = {styleChanged}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-8">
                                        <h1 className="mb-5 text-primary font-weight-bold" data-aos="fade-up">
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

                        <div className="site-section">

                            <div className="container">
                                <div className="row d-flex justify-content-around">
                                    {hub_sub_hubs.map(sub => (
                                        <div className="col-lg-3 col-md-6 mb-4">
                                            <div className="media-29101">
                                                <a href="#"><img src={(sub.imageUrl)} alt="Image"
                                                                 className="image"></img></a>
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
    }

    export default withTranslation()(HubSubHubs);