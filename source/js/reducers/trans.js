import Immutable from 'immutable'

import {
  TEST_ACTION,
  GET_TRANS_START,
  GET_TRANS_ERROR,
  GET_TRANS_SUCCESS
} from 'actions/transaction';

const initialState = Immutable.fromJS({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  list: []
});

const actionsMap = {
  [TEST_ACTION]: (state) => {
    const counter = state.get('counter') + 1;
    return state.merge({
      counter,
    });
  },

  // Async action
  [GET_TRANS_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [GET_TRANS_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_TRANS_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      list: action.data,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
