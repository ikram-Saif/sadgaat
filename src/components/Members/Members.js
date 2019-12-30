import React from "react";
import  axios from "axios";
import spinner from "../spinner.gif";
import Typed from "react-typed";
//import ipp from  "../Alerts/ip"
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'

class  Members extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
      members: [],
    };
  }



  componentDidMount() {


    axios.get("http://192.168.1.112:8081/api/v1/members/",{ headers: {'accept-language':`${i18n.language}`}})
         .then(response => {
         console.log(response.data)

          this.setState({
            isLoading: false,
            members: response.data,
          });


        })

        .catch(error => {
          console.log(error);
        });
  }
/*  componentDidUpdate() {


    axios.get("http://192.168.1.112:8081/api/v1/members/", { headers: {'accept-language': `${i18n.language}`}})
         .then(response => {
         console.log(response.data)

          this.setState({
            isLoading: false,
            members: response.data,
          });


        })

        .catch(error => {
          console.log(error);
        });
  }*/

    render(){


      const { error, isLoaded, members } = this.state;
      const {t} = this.props;
      const styleChanged = i18n.dir() =="ltr"? "site-section-cover half-bg":"site-section-cover half-arbg"



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
                            strings={[t('our_members')]}
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

      <div className="row">

        <table className="table table-borderless text-center">

          <thead>
          <tr>
          <th scope="col">{t('name')}</th>
            <th scope="col">{t('email_address')}</th>
            <th scope="col">{t('city')}</th>
            <th scope="col">{t('job')}</th>
            <th scope="col">{t('studyField')}</th>
            <th scope="col">{t('Volunteered Projects')}</th>
          </tr>
          </thead>
          <tbody>

            {members.map(mem => (
                <tr>
                  <td>{mem.name}</td>
                  <td>{mem.email}</td>
                  <td>{mem.city}</td>
                  <td>{mem.job}</td>
                  <td>{mem.studyField}</td>
                  <td>{mem.volunteeredProjects}</td>
                </tr>
          ))}

</tbody>
        </table>

      </div>
    </div>
    </div>
  </div>

    );
}
}

export default withTranslation()(Members);