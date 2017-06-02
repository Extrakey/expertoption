/**
 * Created by jiangnan on 17/6/1.
 */
import fetch from 'isomorphic-fetch'

export const GET_BILLING_START = 'GET_BILLING_START';
export const GET_BILLING_ERROR = 'GET_BILLING_ERROR';
export const GET_BILLING_SUCCESS = 'GET_BILLING_SUCCESS';
export const GET_PRICING_SUCCESS = 'GET_PRICING_SUCCESS';
export const GET_WITHDRAWAL_SUCCESS = 'GET_WITHDRAWAL_SUCCESS';

// Test action

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}

// Async action example

function getBillingStart() {
  return {
    type: GET_BILLING_START,
  };
}

function getBillingSuccess(data) {
  return {
    type: GET_BILLING_SUCCESS,
    data,
  };
}

function getBillingError(error) {
  return {
    type: GET_BILLING_ERROR,
    error,
  };
}

function getPricingSuccess(data) {
  return {
    type: GET_PRICING_SUCCESS,
    data,
  };
}

function getWithdrawalSuccess(data) {
  return {
    type: GET_WITHDRAWAL_SUCCESS,
    data,
  };
}

export function mobileDeposit(data) {
  return (dispatch, getState) => {
    dispatch(getBillingStart())
    return fetch('/mock/billing.json')
      .then(response => response.json())
      .then(json => dispatch(getBillingSuccess((json))))
      .catch(err => dispatch(getBillingError(err)))
  }
}

export function pricing(data) {
  return (dispatch, getState) => {
    dispatch(getBillingStart())
    return fetch('/mock/pricing.json')
      .then(response => response.json())
      .then(json => dispatch(getPricingSuccess((json))))
      .catch(err => dispatch(getBillingError(err)))
  }
}

export function withdrawal(data) {
  return (dispatch, getState) => {
    dispatch(getBillingStart())
    return fetch('/mock/withdrawal.json')
      .then(response => response.json())
      .then(json => dispatch(getWithdrawalSuccess((json))))
      .catch(err => dispatch(getBillingError(err)))
  }
}

// Update
