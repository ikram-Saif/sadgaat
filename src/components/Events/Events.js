import React from "react";
import axios from "axios";
import {address} from "../address";

import spinner from "../spinner.gif";

import i18n from 'i18next'
import { withTranslation } from 'react-i18next'


class  Events  extends React.Component {

  constructor(props) {
    super(props);
    i18n.language = 'en'
    this.state = {
      isLoading:true,
      events: [],
    };
  }



  componentDidMount() {


    axios.get(`${address()}/events/`,{ headers: {'accept-language': `${i18n.language}`}})
        .then(response => {

          console.log(response.data);

          this.setState({
            isLoading: false,
            events: response.data,
          });


        })

        .catch(error => {
          console.log(error);
        });
  }

 /* componentDidUpdate() {


    axios.get("http://192.168.1.112:8081/api/v1/events/",{ headers: {'accept-language': `${i18n.language}`}})
        .then(response => {

          console.log(response.data);

          this.setState({
            isLoading: false,
            events: response.data,
          });


        })

        .catch(error => {
          console.log(error);
        });
  }*/

  render(){

    const { error, isLoaded, events } = this.state;
    const {t} = this.props


    return(
        this.state.isLoading ? <div className="loader"><img  src={spinner} /></div>:
    <div className="site-section">

    <div className="container">
      <h2 className="text-primary mb-5 font-weight-bold"> {t('Coming Events')} </h2>
      <div className="row d-flex justify-content-around">


        {events.map(event=> (
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
          <div className="feature-92912">
            <h2 className="heading">{event.name}</h2>
            <div className="card-body">
               {event.description}</div>
        </div>
        </div>
            ))}

        </div>
      </div>
    </div>

    );
}
}

export default withTranslation()(Events);