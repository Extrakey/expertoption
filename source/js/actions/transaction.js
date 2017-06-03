/**
 * Created by jiangnan on 17/6/3.
 */
import fetch from 'isomorphic-fetch'
export const TEST_ACTION = 'TEST_ACTION';

export const GET_TRANS_START = 'GET_TRANS_START';
export const GET_TRANS_ERROR = 'GET_TRANS_ERROR';
export const GET_TRANS_SUCCESS = 'GET_TRANS_SUCCESS';

// Test action

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}

// Async action example

function getTransStart() {
  return {
    type: GET_TRANS_START,
  };
}

function getTransSuccess(data) {
  return {
    type: GET_TRANS_SUCCESS,
    data,
  };
}

function getTransError(error) {
  return {
    type: GET_TRANS_ERROR,
    error,
  };
}


export function getUserTrans(data) {
  return (dispatch, getState) => {
    dispatch(getTransStart())
    return fetch('/mock/trans.json')
      .then(response => response.json())
      .then(json => dispatch(getTransSuccess((json))))
      .catch(err => dispatch(getTransError(err)))
  }
}

// Update
