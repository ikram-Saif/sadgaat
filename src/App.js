import React from 'react';
import { useTranslation} from 'react-i18next';
//import './js/jquery-3.3.1.min';
//import './public/js/jquery-3.3.1.min'
//import '/js/jquery-migrate-3.0.0'
//import '/js/popper.min'
//import '/js/owl.carousel.min'
//import '/js/jquery.sticky'
//import '/js/jquery.waypoints.min'
//import '/js/jquery.animateNumber.min'
//import '/js/jquery.fancybox.min'
//import '/js/jquery.stellar.min'
//import '/js/jquery.easing.1.3'
//import '/js/bootstrap.min'
//import '/js/isotope.pkgd.min'
//import '/js/aos'
import {BrowserRouter as Router, Link, Route, Switch ,NavLink} from "react-router-dom";
import './';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AllHubs from './components/Hubs/AllHubs';
import Members from './components/Members/Members';
import AllProjects from './components/Projects/AllProjects';
import SubHubsProjects from './components/Projects/SubHubsProjects';
import logo from './components/sadagaat.png';
import AllSubHubs from './components/SubHubs/AllSubHubs';
import HubSubHubs from './components/SubHubs/HubSubHubs';
//import Testimonials from './components/testimonials/Testimonials';
import './css/aos.css';
import './css/bootstrap-datepicker.css';
import './css/bootstrap.min.css';
import './css/jquery.fancybox.min.css';
import './css/owl.theme.default.min.css';
import './css/spinner.css';
import './css/style.css';
import './fonts/flaticon/font/flaticon.css';
import './fonts/icomoon/style.css';
import './i18n';
import LanguageSelector from './LanguageSelector';
//import LanguageSelector from './LanguageSelector';

function App() {

    let { t, i18n } = useTranslation()
    const align = i18n.dir()==="rtl"? "right" :"left"
    const float_menu = i18n.dir()==="rtl"? "left" :"right"
    const fontStyle = i18n.dir()==="rtl"? "arbic-font":"en-font"
    const menuAlign = i18n.dir()==="rtl"? "text-left":"text-right"
   

    
   
  return (
    
             <div style={{direction: i18n.dir(), textAlign :`${align}`}} className={fontStyle}>

                <Router basename ={process.env.PUBLIC_URL}>

                  <div className={`${i18n.language === "en" ? "site-mobile-menu site-navbar-target" : "site-mobile-menu_arabic site-mobile-menu site-navbar-target"}`}>
                      <div className="site-mobile-menu-header">
                          <div className="site-mobile-menu-close mt-3">
                              <span className="icon-close2 js-menu-toggle"></span>
                          </div>
                      </div>
                      <div className="site-mobile-menu-body">
                           <ul className="site-nav-wrap">
                                          <li><a className="nav-link"  href ="/"> {t('home')} </a></li>
                                          <li><a className="nav-link"  href="/about">{t('about')}</a></li>
                                          <li><a className="nav-link"  href="/hubs">{t('hubs')}</a></li>
                                          <li><a className="nav-link"  href="/sub_hubs">{t('subhubs')}</a></li>
                                          <li><a className="nav-link"  href="/projects">{t('projects')}</a></li>
                                          <li><a className="nav-link" href="/contact">{t('contact Us')}</a></li>
                                          <li><LanguageSelector /> </li>
                          </ul> 
                      </div>
                  </div>

              

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


                              <div className={`col-9 ${menuAlign}`}>
                                  <span className="d-inline-block d-lg-none"><Link to="#" className="text-primary site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-primary"></span></Link></span>

                                  <nav  className={`site-navigation ${menuAlign} ml-auto d-none d-lg-block`} role="navigation">
                                      <ul className="site-menu main-menu js-clone-nav ml-auto">
                                          
                                         <li><NavLink className="nav-link"  activeClassName="active" exact to ="/"> {t('home')} </NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active" to="/about">{t('about')}</NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active" to="/hubs">{t('hubs')}</NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active"  to="/sub_hubs">{t('subhubs')}</NavLink></li>
                                          <li><NavLink className="nav-link" activeClassName="active" to="/projects">{t('projects')}</NavLink></li>
                                          <li><NavLink  className="nav-link" activeClassName="active" to="/contact">{t('contact Us')}</NavLink></li>
                                          <li><LanguageSelector /> </li> 
                                      </ul>
                                      
                                
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



              <Footer/>

              
          </div>


  );
}

export default App;
