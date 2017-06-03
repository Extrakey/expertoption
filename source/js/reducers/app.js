import { Map } from 'immutable';

import {
  TEST_ACTION,
  TEST_ASYNC_ACTION_START,
  TEST_ASYNC_ACTION_ERROR,
  TEST_ASYNC_ACTION_SUCCESS,
  COUNTER_DOUBLE_ASYNC,
  SHOW_SETTING,
  HIDE_SETTING,
  TOGGLE_SOUND,
  SHOW_LOGOUT,
  HIDE_LOGOUT,
  TOGGLE_CHAT,
} from 'actions/app';

const initialState = Map({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  isShowSetting: false,
  isShowChat: false,
  showLogout: false,
  sound: false
});

const actionsMap = {
  [TEST_ACTION]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge({
      counter,
    });
  },

  // Async action
  [TEST_ASYNC_ACTION_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [TEST_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [TEST_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncData: action.data,
    });
  },
  [COUNTER_DOUBLE_ASYNC]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncData: action.data,
    });
  },
  [SHOW_SETTING]: (state) => {
    return state.merge({
      isShowSetting: true,
    });
  },
  [HIDE_SETTING]: (state) => {
    return state.merge({
      isShowSetting: false,
    });
  },
  [TOGGLE_SOUND]: (state) => {
    return state.merge({
      sound: !state.get('sound'),
    });
  },
  [TOGGLE_CHAT]: (state) => {
    return state.merge({
      isShowChat: !state.get('isShowChat'),
    });
  },
  [SHOW_LOGOUT]: (state) => {
    return state.merge({
      showLogout: true,
    });
  },
  [HIDE_LOGOUT]: (state) => {
    return state.merge({
      showLogout: false,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
