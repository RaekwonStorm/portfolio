'use strict';

import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory
} from 'react-router';
import {onTravelEnter} from './enter-hooks';
import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import TravelContainer from './containers/TravelContainer';
import ResumeContainer from './containers/ResumeContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={HomeContainer}/>
      <Route path="/about" component={ResumeContainer}/>
      <Route path="/portfolio" component={PortfolioContainer}/>
      <Route path="/travel" component={TravelContainer} onEnter={onTravelEnter}/>
    </Route>
  </Router>
);
