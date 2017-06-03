import { combineReducers } from 'redux';
import app from 'reducers/app';
import billing from 'reducers/billing';
import about from 'reducers/about';
import user from 'reducers/user';
import trans from 'reducers/trans';
import analytics from 'reducers/analytics';

export default combineReducers({
  app,
  billing,
  about,
  user,
  trans,
  analytics
});
