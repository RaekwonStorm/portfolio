'use strict';

import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory,
  Redirect
} from 'react-router';
import {onTravelEnter} from './enter-hooks';
import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import Portfolio from './components/Portfolio';
import TravelContainer from './containers/TravelContainer';
import ResumeContainer from './containers/ResumeContainer';
// import BlogContainer from './containers/BlogContainer';
import EducationContainer from './containers/ResumeContainers/EducationContainer';
import ExperienceContainer from './containers/ResumeContainers/ExperienceContainer';
import Skills from './components/ResumeComponents/Skills';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={HomeContainer}/>
      <Redirect from="/about" to="/about/skills"/>
      <Route path="/about" component={ResumeContainer}>
        <Route path="skills" component={Skills}/>
        <Route path="education" component={EducationContainer}/>
        <Route path="experience" component={ExperienceContainer}/>
      </Route>
      <Route path="/work" component={Portfolio}/>
      <Route path="/travel" component={TravelContainer} onEnter={onTravelEnter}/>
      {/*<Route path="/blog" component={BlogContainer}/>*/}
    </Route>
  </Router>
);
