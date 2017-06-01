import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import NotFound from 'views/NotFound';

// TO DO
import Home from 'views/Home';
import Index from 'views/Index';
import Platform from 'views/Platform';
import Pricing from 'views/Pricing';
import Education from 'views/Education';
import Contacts from 'views/Contacts';

import App from 'views/App';
import appIndex from 'views/App/appIndex';
import Billing from 'views/Billing';
import BillingIndex from 'views/Billing/Billing';
import Withdrawal from 'views/Billing/Withdrawal';
import PayHistory from 'views/Billing/PayHistory';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  // TO DO
  PLATFORM: `${ publicPath }platform`,
  PRICING: `${ publicPath }pricing`,
  EDUCATION: `${ publicPath }education`,
  CONTACTS: `${ publicPath }contacts`,

  // APP
  APP: `${ publicPath }app`,
  BILLING: `${ publicPath }app/billing`,
  PAYHISTORY: `${ publicPath }app/billing/payment-history`,
  WITHDRAWAL: `${ publicPath }app/billing/withdrawal`,
  USER: `${ publicPath }app/user`,
  ANALYTIES: `${ publicPath }app/analytics`,
  PLANTFORMS: `${ publicPath }app/platforms`,
  INFO: `${ publicPath }app/info`,
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
        </Route>
        <Route path={ routeCodes.APP} component={ App }>
          <IndexRoute component={ appIndex } />
          <Route path={ routeCodes.BILLING } component={ Billing }>
            <IndexRoute component={ BillingIndex } />
            <Route path={ routeCodes.PAYHISTORY } component={ PayHistory } />
            <Route path={ routeCodes.WITHDRAWAL } component={ Withdrawal } />
          </Route>
        </Route>
      </Router>
    );
  }
}
