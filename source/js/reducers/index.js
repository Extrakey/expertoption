import { combineReducers } from 'redux';
import app from 'reducers/app';
import billing from 'reducers/billing';
import about from 'reducers/about';
import user from 'reducers/user';

export default combineReducers({
  app,
  billing,
  about,
  user
});
