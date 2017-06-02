import fetch from 'isomorphic-fetch'
export const TEST_ACTION = 'TEST_ACTION';

export const TEST_ASYNC_ACTION_START = 'TEST_ASYNC_ACTION_START';
export const TEST_ASYNC_ACTION_ERROR = 'TEST_ASYNC_ACTION_ERROR';
export const TEST_ASYNC_ACTION_SUCCESS = 'TEST_ASYNC_ACTION_SUCCESS';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
export const SHOW_SETTING = 'SHOW_SETTING';
export const HIDE_SETTING = 'HIDE_SETTING';

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
