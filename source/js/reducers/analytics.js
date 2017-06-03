/**
 * Created by jiangnan on 17/6/1.
 */
import Immutable from 'immutable'


import {
  GET_ASYNC_START,
  GET_SCHEDULE_ERROR,
  GET_SCHEDULE_SUCCESS
} from 'actions/analytics.js';

const initialState = Immutable.fromJS({
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  scheduleData: [],
});

const actionsMap = {

  // Async action
  [GET_ASYNC_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [GET_SCHEDULE_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_SCHEDULE_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      scheduleData: action.data
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
