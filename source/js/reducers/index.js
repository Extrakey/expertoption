import { combineReducers } from 'redux';
import app from 'reducers/app';
import billing from 'reducers/billing';

export default combineReducers({
  app,
  billing
});
