/**
 * Created by jiangnan on 17/6/1.
 */
import { Map } from 'immutable';

import {
  GET_BILLING_START,
  GET_BILLING_ERROR,
  GET_BILLING_SUCCESS,
} from 'actions/billing';

const initialState = Map({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
});

const actionsMap = {

  // Async action
  [GET_BILLING_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [GET_BILLING_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_BILLING_SUCCESS]: (state, action) => {
    console.log(action, 'action')
    return state.merge({
      asyncLoading: false,
      asyncData: action.data,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
