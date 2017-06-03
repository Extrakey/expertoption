import fetch from 'isomorphic-fetch'
export const TEST_ACTION = 'TEST_ACTION';

export const TEST_ASYNC_ACTION_START = 'TEST_ASYNC_ACTION_START';
export const TEST_ASYNC_ACTION_ERROR = 'TEST_ASYNC_ACTION_ERROR';
export const TEST_ASYNC_ACTION_SUCCESS = 'TEST_ASYNC_ACTION_SUCCESS';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
export const SHOW_SETTING = 'SHOW_SETTING';
export const HIDE_SETTING = 'HIDE_SETTING';
export const TOGGLE_SOUND = 'TOGGLE_SOUND';
export const TOGGLE_CHAT = 'TOGGLE_CHAT';
export const SHOW_LOGOUT = 'SHOW_LOGOUT';
export const HIDE_LOGOUT = 'HIDE_LOGOUT';
export const TOGGLE_HELP = 'TOGGLE_HELP';

// Test action

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}

// Async action example

function testAsyncStart() {
  return {
    type: TEST_ASYNC_ACTION_START,
  };
}

function testAsyncSuccess(data) {
  return {
    type: TEST_ASYNC_ACTION_SUCCESS,
    data,
  };
}

function testAsyncError(error) {
  return {
    type: TEST_ASYNC_ACTION_ERROR,
    error,
  };
}

export function showSetting() {
  return {
    type: SHOW_SETTING,
  };
}

export function hideSetting() {
  return {
    type: HIDE_SETTING,
  };
}

export function toggleSound() {
  return {
    type: TOGGLE_SOUND,
  };
}

export function toggleChat() {
  return {
    type: TOGGLE_CHAT,
  };
}

export function showLogout() {
  return {
    type: SHOW_LOGOUT,
  };
}

export function hideLogout() {
  return {
    type: HIDE_LOGOUT,
  };
}

export function toggleHelp() {
  return {
    type: TOGGLE_HELP,
  };
}

export function testAsync(data) {
  return (dispatch, getState) => {
    dispatch(testAsyncStart())
    return fetch('/mock/app.json')
      .then(response => response.json())
      .then(json => dispatch(testAsyncSuccess((json))))
      .catch(err => dispatch(testAsyncError(err)))
  }
}

// Update
