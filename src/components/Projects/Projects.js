import React from "react";
import axios from "axios";
import spinner from "../spinner.gif";
import {Link} from "react-router-dom";
import{address} from "../address"

import i18n from 'i18next'
import {withTranslation} from 'react-i18next'


class  Projects  extends React.Component {

  constructor(props) {
    super(props);
    i18n.language = 'en'
    this.state = {
      isLoading:true,
      allProjects: [],
    };
  }



  componentDidMount() {


    axios.get(`${address()}/projects/`,{ headers: {'accept-language': `${i18n.language}`}})
        .then(response => {

          console.log(response.data);

          this.setState({
            isLoading: false,
            allProjects: response.data.slice(-4),
          });


        })

        .catch(error => {
          console.log(error);
        });
  }

 /* componentDidUpdate() {


    axios.get("http://192.168.1.112:8081/api/v1/projects/",{headers: {'accept-language': `${i18n.language}`}})
        .then(response => {

          console.log(response.data);

          this.setState({
            isLoading: false,
            allProjects: response.data.slice(-4),
          });


        })

        .catch(error => {
          console.log(error);
        });
  }*/

  render(){

    const { error, isLoaded, allProjects } = this.state;
    const {t} = this.props
    const classFloat = i18n.dir()=="rtl"? "float-left":"float-right"
    return(

        this.state.isLoading ? <div className="loader"><img  src={spinner} /></div>:
            <div>
              <div className="site-section ">
                <div className="container">
                  <div className={classFloat}><Link to="/projects">{t('view_projects')}</Link></div>
                      <h2 className="text-primary mb-5 font-weight-bold">{t('the projects')}</h2>
                   <div className="row d-flex justify-content-around">
                    {allProjects.map(project => (
                        <div className="col-lg-3 col-md-6 mb-4">
                          <div className="post-entry-1 h-100 border-white">
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
    );
  }
}

export default withTranslation()(Projects)