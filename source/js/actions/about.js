/**
 * Created by jiangnan on 17/6/1.
 */
import fetch from 'isomorphic-fetch'

export const GET_ASYNC_START = 'GET_FAQ_START';
export const GET_FAQ_ERROR = 'GET_FAQ_ERROR';
export const GET_FAQ_SUCCESS = 'GET_FAQ_SUCCESS';
export const GET_GLOSSARY_ERROR = 'GET_GLOSSARY_ERROR';
export const GET_GLOSSARY_SUCCESS = 'GET_GLOSSARY_SUCCESS';
export const GET_TERMS_ERROR = 'GET_TERMS_ERROR';
export const GET_TERMS_SUCCESS = 'GET_TERMS_SUCCESS';

// Async action example

function getAsyncStart() {
  return {
    type: GET_ASYNC_START,
  };
}

function getFAQSuccess(data) {
  return {
    type: GET_FAQ_SUCCESS,
    data,
  };
}

function getFAQError(error) {
  return {
    type: GET_FAQ_ERROR,
    error,
  };
}

function getGlossarySuccess(data) {
  return {
    type: GET_GLOSSARY_SUCCESS,
    data,
  };
}

function getGlossaryError(error) {
  return {
    type: GET_GLOSSARY_ERROR,
    error,
  };
}

function getTermsSuccess(data) {
  return {
    type: GET_TERMS_SUCCESS,
    data,
  };
}

function getTermsError(error) {
  return {
    type: GET_TERMS_ERROR,
    error,
  };
}

export function getFAQ(data) {
  return (dispatch, getState) => {
    dispatch(getAsyncStart())
    return fetch('/mock/about.json')
      .then(response => response.json())
      .then(json => dispatch(getFAQSuccess((json))))
      .catch(err => dispatch(getFAQError(err)))
  }
}

export function getGlossary(data) {
  return (dispatch, getState) => {
    dispatch(getAsyncStart())
    return fetch('/mock/about.json')
      .then(response => response.json())
      .then(json => dispatch(getGlossarySuccess((json))))
      .catch(err => dispatch(getGlossaryError(err)))
  }
}

export function getTerm(data) {
  return (dispatch, getState) => {
    dispatch(getAsyncStart())
    return fetch('/mock/about.json')
      .then(response => response.json())
      .then(json => dispatch(getTermsSuccess((json))))
      .catch(err => dispatch(getTermsError(err)))
  }
}


// Update
