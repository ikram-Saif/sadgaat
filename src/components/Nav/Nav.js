import React from "react";
import { BrowserRouter as Router, Link, Route, Switch ,NavLink} from "react-router-dom";
import spinner from "../spinner.gif";
import Typed from "react-typed";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import Home from '../Home/Home';
import AllHubs from '../Hubs/AllHubs';
import Members from '../Members/Members';
import AllProjects from '../Projects/AllProjects';
import SubHubsProjects from '../Projects/SubHubsProjects';
import logo from '../sadagaat.png';
import AllSubHubs from '../SubHubs/AllSubHubs';
import HubSubHubs from '../SubHubs/HubSubHubs';

import i18n from 'i18next'
import { withTranslation } from 'react-i18next'


class  Nav extends React.Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
       
    }

  handleClick(lang){
    const {i18n} = this.props
   i18n.changeLanguage(lang)

  }

    
      

    render() {
        const {t} = this.props;
        
      

        return (
            <div>
                <div className="site-mobile-menu site-navbar-target">
                      <div className="site-mobile-menu-header">
                          <div className="site-mobile-menu-close mt-3">
                              <span className="icon-close2 js-menu-toggle"></span>
                          </div>
                      </div>
                      <div className="site-mobile-menu-body"></div>
                  </div>

              <Router>

                  <header className="site-navbar site-navbar-target" role="banner">
                      <div className="container">
                          <div className="row align-items-center position-relative">

                              <div className="col-3 ">


                                  <div className="site-logo" style={{}}>


                                      <Link to="index.html" className="font-weight-bold">

                                          <img src={logo}/>
                                          {/*Sadagaat*/}

                                      </Link>
                                  </div>
                              </div>


                              <div className="col-9  text-right">
                                  <span className="d-inline-block d-lg-none"><Link to="#" className="text-primary site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-primary"></span></Link></span>

                                  <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                      <ul className="site-menu main-menu js-clone-nav ml-auto ">
                                          
                                         <li><NavLink className="nav-link"  activeClassName="active" exact to ="/"> {t('home')} </NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active" to="/about">{t('about')}</NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active" to="/hubs">{t('hubs')}</NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active"  to="/sub_hubs">{t('subhubs')}</NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active" to="/projects">{t('projects')}</NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active" to="/members">{t('members')}</NavLink></li>
                                          <li><NavLink  className="nav-link" activeClassName="active" to="/contact">{t('contact Us')}</NavLink></li>
                                      </ul>
                                
                                          <Link className="nav-link" to="/" onClick = {this.handleClick('en')}>en</Link>
                                          <Link className="nav-link" to="/" onClick = {this.handleClick('ar')}>ar</Link>

                                  </nav>
                              </div>


                          </div>
                      </div>

                  </header>
                  <Switch>

                      <Route path="/hubs/:id/subHubs" component={HubSubHubs}/>
                      <Route path="/subHubs/:id/projects" component={SubHubsProjects}/>

                      <Route exact path="/hubs">
                          <AllHubs />
                      </Route>
                      <Route exact path="/sub_hubs">
                          <AllSubHubs/>
                      </Route>
                      <Route exact path="/projects">
                          <AllProjects/>
                      </Route>
                      <Route exact path="/events">
                          <Events/>
                      </Route>

                      <Route exact path="/members">
                          <Members/>
                      </Route>
                      <Route exact path="/contact">
                          <Contact/>
                      </Route>
                      <Route exact path="/about">
                          <About/>
                      </Route>

                      <Route exact path="">
                          <Home />
                      </Route>


                  </Switch>

              </Router>
          
                </div>
        )
        }
    }export default withTranslation()(Nav)