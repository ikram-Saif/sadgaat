import React from "react";
import axios from "axios";
import spinner from "../spinner.gif";
import Typed from "react-typed";
import {address} from "../address"

import i18n from 'i18next'
import {withTranslation} from 'react-i18next'



class  SubHubsProjects  extends React.Component {



    constructor(props) {
        super(props);
        i18n.language = 'en'
        this.state = {
            isLoading:true,
            aProjects: [],
        };
    }



    componentDidMount() {


        axios.get(`${address()}/subHubs/`+this.props.match.params.id+"/projects",{ headers: {'accept-language': `${i18n.language}`}})
            .then(response => {

                console.log(response.data);

                this.setState({
                    isLoading: false,
                    aProjects: response.data,
                });


            })

            .catch(error => {
                console.log(error);
            });
    }

    /*componentDidUpdate() {


        axios.get("http://192.168.1.112:8081/api/v1/subHubs/"+this.props.match.params.id+"/projects",{ headers: {'accept-language': `${i18n.language}`}})
            .then(response => {

                console.log(response.data);

                this.setState({
                    isLoading: false,
                    aProjects: response.data,
                });


            })

            .catch(error => {
                console.log(error);
            });
    }*/

    render(){

        const { error, isLoading, aProjects } = this.state;
        const {t} = this.props
        const styleChanged = i18n.dir() =="ltr"? "site-section-cover half-bg":"site-section-cover half-arbg"

        


        if (this.state.aProjects.length == 0) {

            return(

                this.state.isLoading ? <div className="loader"><img  src={spinner} /></div>:

                    <div className="ftco-blocks-cover-1">
                        <div className={styleChanged}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <h1 className="mb-5 text-primary font-weight-bold"  data-aos="fade-up">
                                            <span className="typed-words">
                        <Typed
                            strings={[t('the projects')]}
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
                                    {t('no_project')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        else

        return(

            this.state.isLoading ? <div className="loader"><img  src={spinner} /></div>:
                <div>

                    <div className="ftco-blocks-cover-1">
                        <div className={styleChanged}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-8">
                                        <h1 className="mb-5 text-primary font-weight-bold"  data-aos="fade-up">
                                             <span className="typed-words">
                        <Typed
                            strings={[t('the projects')]}
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


                                {aProjects.map(project => (
                                    <div className="col-lg-3 col-md-6 mb-4">
                                        <div className="post-entry-1 h-100">
                                            <a href="single.html">
                                                <img src={(project.imageUrl)} alt="Image"
                                                     className="image"/>
                                            </a>
                                            <div className="post-entry-1-contents">

                                                <h2><a href="single.html">{project.name}</a></h2>

                                                <p><u>{t('Description:')}</u>: <br/> {project.description}</p>
                                                <p><u>{t('Donation Progress')}</u>: {project.donationProgress}</p>
                                                <p><u>{t('Status')}</u>: {project.status}</p>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        );
    }
}

export default withTranslation()(SubHubsProjects);