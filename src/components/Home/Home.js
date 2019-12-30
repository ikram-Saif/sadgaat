import React from 'react';

import Grow from '../Header/Grow';
import Hubs from '../Hubs/Hubs'
import SubHubs from '../SubHubs/SubHubs'
import Projects from '../Projects/Projects'
import News from '../News/News'
import  Events from  '../Events/Events'

import i18n from 'i18next'


class  Home extends  React.Component{
  render() {
    //const {t} = this.props;

    return (
           <div style={{direction: i18n.dir()}}>
        
               <Grow/>
               <Hubs/>
               <SubHubs/>
               <Projects/>
               <Events/>
               <News/>
           </div>

  );
}}

export default Home;
