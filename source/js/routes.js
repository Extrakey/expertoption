import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import demoIndex from 'views/Index/demoIndex';
import demoApp from 'views/App';
import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';

// TO DO
import Home from 'views/Home';
import Index from 'views/Index';
import Platform from 'views/Platform';
import Pricing from 'views/Pricing';
import Education from 'views/Education';
import Contacts from 'views/Contacts';

import App from 'views/App/app';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  DEMO: `${ publicPath }demo`,
  DEMOINDEX: `${ publicPath }demoindex`,
  ABOUT: `${ publicPath }about`,
  // TO DO
  PLATFORM: `${ publicPath }platform`,
  PRICING: `${ publicPath }pricing`,
  EDUCATION: `${ publicPath }education`,
  CONTACTS: `${ publicPath }contacts`,
  APP: `${ publicPath }app`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ routeCodes.DASHBOARD } component={ Home }>
          <IndexRoute component={ Index } />
          <Route path={ routeCodes.PLATFORM } component={ Platform } />
          <Route path={ routeCodes.PRICING } component={ Pricing } />
          <Route path={ routeCodes.EDUCATION } component={ Education } />
          <Route path={ routeCodes.CONTACTS } component={ Contacts } />
          <Route path={ routeCodes.APP} component={ App } />
          <Route path={ routeCodes.DEMO } component={ demoApp }>
            <Route path={ routeCodes.DEMOINDEX } component={ demoIndex } />
            <Route path={ routeCodes.DASHBOARD } component={ Dashboard } />
            <Route path={ routeCodes.ABOUT } component={ About } />
            <Route path='*' component={ NotFound } />
          </Route>
        </Route>
      </Router>
    );
  }
}
