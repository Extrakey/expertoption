import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import Routes from 'routes';
import 'babel-polyfill';
import logger from 'dev/logger';

// 多语言
import {IntlProvider, addLocaleData} from 'react-intl';
import intl from 'intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import locale from './locale';
import { getQueryValue } from "./util";

addLocaleData([...en, ...zh]);

const language = !!getQueryValue('locale') ? getQueryValue('locale') : 'zh_CN'

// Load SCSS
import '../scss/app.scss';

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
let store = null;

if (isProduction) {
  // In production adding only thunk middleware
  const middleware = applyMiddleware(thunk);

  store = createStore(
    rootReducer,
    middleware
  );
} else {
  // In development mode beside thunk
  // logger and DevTools are added
  const middleware = applyMiddleware(thunk, logger);
  let enhancer;

  // Enable DevTools if browser extension is installed
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }


  store = createStore(
    rootReducer,
    enhancer
  );
}

// Render it to DOM
ReactDOM.render(
  <IntlProvider locale={navigator.language.split('-')[0]} messages={locale[language] ? locale[language] : locale['zh']}>
    <Provider store={ store }>
      <Routes />
    </Provider>
   </IntlProvider>,
  document.getElementById('root')
);
