import React from 'react';
import { useTranslation } from 'react-i18next';
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
import { BrowserRouter as Router, Link, Route, Switch ,NavLink} from "react-router-dom";
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
import Nav from './components/Nav/Nav';
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

//import LanguageSelector from './LanguageSelector';

function App() {

    const { t, i18n } = useTranslation()
    const align = i18n.dir()==="rtl"? "right" :"left"
    const float_menu = i18n.dir()==="rtl"? "left" :"right"
    const fontStyle = i18n.dir()==="rtl"? "arbic-font":"en-font"
    
    
    //alert(textAlign)
   

  return (
             <div style={{direction: i18n.dir(), textAlign :`${align}`}} className={fontStyle}>
            <Nav />
              <Footer/>
          </div>








  );
}

export default App;
