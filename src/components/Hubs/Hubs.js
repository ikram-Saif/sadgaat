
import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import axios from "axios";
import {address} from  "../address"
import spinner from "../spinner.gif";
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'


class  Hubs extends React.Component {

    constructor(props) {
        super(props);
        i18n.language = 'en'
        this.state = {
            isLoading: true,
            hubs: [],
           
        };
    }




    componentDidMount() {
      
        axios.get(`${address()}/hubs/`,{ headers: {'accept-language': `${i18n.language}`}})
            .then(response => {
                console.log(response.data);
                this.setState({
                    isLoading: false,
                    hubs: response.data.slice(-4),
                });


            })
            .catch(error => {
                console.log(error);
            });
    }
    

   

    render(){
        
        const {isLoaded, hubs } = this.state;
        const {t} = this.props;
        const classFloat = i18n.dir()==="rtl"? "float-left":"float-right"
        
            return(
    
    
                this.state.isLoading ? <div className="loader"><img  src={spinner} /></div>:
                    <div className="site-section">
    
                        <div className="container" >
                           
                            <div className={classFloat}><Link to="/hubs">{t('View All Hubs')}</Link></div>
                            <h2 className="text-primary mb-5 font-weight-bold"> {t('hubs')} </h2>
                          
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
    
                                                 <p>{hub.description}</p>
    
                                                 <p> <Link to={`hubs/${hub.id}/subHubs`} className="more-92913">{t('view_subhubs')} </Link></p>
                                             </div>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
    
    
                                );
        }
    }
    
    export default withTranslation()(Hubs);