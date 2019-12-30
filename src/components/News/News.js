
import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import axios from "axios";
import spinner from "../spinner.gif";
import {address} from '../address'
import i18n from 'i18next'
import {withTranslation} from 'react-i18next'


class  News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            news: [],
        };
    }




    componentDidMount() {
        axios.get(`${address()}/news/`,{ headers: {'accept-language': `${i18n.language}`}})
            .then(response => {
                console.log(response.data);
                this.setState({
                    isLoading: false,
                    news: response.data,
                });


            })
            .catch(error => {
                console.log(error);
            });
    }

    /*componentDidUpdate() {
        axios.get("http://192.168.1.112:8081/api/v1/news/",{ headers: {'accept-language': `${i18n.language}`}})
            .then(response => {
                console.log(response.data);
                this.setState({
                    isLoading: false,
                    news: response.data,
                });


            })
            .catch(error => {
                console.log(error);
            });
    }*/




    render(){


        const { error, isLoaded, news } = this.state;
        const {t} =this.props
        return(


            this.state.isLoading ? <div className="loader"><img  src={spinner} /></div>:
                <div>
                    <div className="site-section">
                        <div className="container">
                            <h2 className="text-primary mb-5 font-weight-bold"> {t('Latest News')}</h2>
                            <div className="row d-flex justify-content-around">

                                {news.map(ne => (



                                    <div className="col-lg-3 col-md-6 mb-4">
                                        <div className="media-29101">
                                            <a href="#"><img src={(ne.imageUrl)} alt="Image" className="image"></img></a>
                                            <h3><a href="#">{ne.name}</a></h3>
                                        </div>
                                    </div>


                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="site-section bg-tertiary">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h2 className="text-primary mb-5 font-weight-bold">{t('footer_message')}</h2>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default withTranslation()(News);