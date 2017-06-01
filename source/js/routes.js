import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import NotFound from 'views/NotFound';

// TO DO
import Home from 'views/Home';
import Index from 'views/Index';
import Platform from 'views/Platform';
import Pricing from 'views/Pricing';
import Teach from 'views/Education';
import Contacts from 'views/Contacts';

import App from 'views/App';

import Transaction from 'views/Transaction';
import Billing from 'views/Billing';
import BillingIndex from 'views/Billing/Billing';
import Withdrawal from 'views/Billing/Withdrawal';
import PayHistory from 'views/Billing/PayHistory';

import User from 'views/User';
import UserIndex from 'views/User/User';
import Deals from 'views/User/Deals';
import Edit from 'views/User/Edit';

import Analytics from 'views/Analytics';
import AnalyticsIndex from 'views/Analytics/AnalyticsIndex';
import Stocks from 'views/Analytics/Stocks';

import Plantforms from 'views/Plantforms';

import Info from 'views/Info';
import InfoIndex from 'views/Info/Info';
import Faq from 'views/Info/Faq';
import Education from 'views/Info/Education';
import Terms from 'views/Info/Terms';
import About from 'views/Info/About';


const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  // TO DO
  PLATFORM: `${ publicPath }platform`,
  PRICING: `${ publicPath }pricing`,
  TEACH: `${ publicPath }teach`,
  CONTACTS: `${ publicPath }contacts`,

  // APP
  APP: `${ publicPath }app`,
  BILLING: `${ publicPath }app/billing`,
  PAYHISTORY: `${ publicPath }app/billing/payment-history`,
  WITHDRAWAL: `${ publicPath }app/billing/withdrawal`,

  USER: `${ publicPath }app/user`,
  DEALS: `${ publicPath }app/user/deals`,
  EDIT: `${ publicPath }app/user/edit`,

  ANALYTICS: `${ publicPath }app/analytics`,
  STOCKS: `${ publicPath }app/analytics/stocks`,


  PLANTFORMS: `${ publicPath }app/platforms`,

  INFO: `${ publicPath }app/info`,
  FAQ: `${ publicPath }app/info/faq`,
  EDUCATION: `${ publicPath }app/info/education`,
  TERMS: `${ publicPath }app/info/terms`,
  ABOUT: `${ publicPath }app/info/about`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ routeCodes.DASHBOARD } component={ Home }>
          <IndexRoute component={ Index } />
          <Route path={ routeCodes.PLATFORM } component={ Platform } />
          <Route path={ routeCodes.PRICING } component={ Pricing } />
          <Route path={ routeCodes.TEACH } component={ Teach } />
          <Route path={ routeCodes.CONTACTS } component={ Contacts } />
        </Route>
        <Route path={ routeCodes.APP} component={ App }>
          <IndexRoute component={ Transaction } />
          <Route path={ routeCodes.BILLING } component={ Billing }>
            <IndexRoute component={ BillingIndex } />
            <Route path={ routeCodes.PAYHISTORY } component={ PayHistory } />
            <Route path={ routeCodes.WITHDRAWAL } component={ Withdrawal } />
          </Route>
          <Route path={ routeCodes.USER } component={ User }>
            <IndexRoute component={ UserIndex } />
            <Route path={ routeCodes.DEALS } component={ Deals } />
            <Route path={ routeCodes.EDIT } component={ Edit } />
          </Route>
          <Route path={ routeCodes.ANALYTICS } component={ Analytics }>
            <IndexRoute component={ AnalyticsIndex } />
            <Route path={ routeCodes.STOCKS } component={ Stocks } />
          </Route>
          <Route path={ routeCodes.PLANTFORMS } component={ Plantforms } />
          <Route path={ routeCodes.INFO } component={ Info }>
            <IndexRoute component={ InfoIndex } />
            <Route path={ routeCodes.FAQ } component={ Faq } />
            <Route path={ routeCodes.EDUCATION } component={ Education } />
            <Route path={ routeCodes.TERMS } component={ Terms } />
            <Route path={ routeCodes.ABOUT } component={ About } />
          </Route>
          </Route>
      </Router>
    );
  }
}
