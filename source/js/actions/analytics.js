/**
 * Created by jiangnan on 17/6/1.
 */
import fetch from 'isomorphic-fetch'

export const GET_ASYNC_START = 'GET_FAQ_START';
export const GET_ASYNC_ERROR = 'GET_ASYNC_ERROR';
export const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS';
export const GET_MAP_SUCCESS = 'GET_MAP_SUCCESS';

// Async action example

function getAsyncStart() {
  return {
    type: GET_ASYNC_START,
  };
}

function getScheduleSuccess(data) {
  return {
    type: GET_SCHEDULE_SUCCESS,
    data,
  };
}

function getScheduleError(error) {
  return {
    type: GET_SCHEDULE_ERROR,
    error,
  };
}

function getMapSuccess(data) {
  return {
    type: GET_MAP_SUCCESS,
    data,
  };
}

export function getSchedule(data) {
  return (dispatch, getState) => {
    dispatch(getAsyncStart())
    return fetch('/mock/get_asset_schedule.json')
      .then(response => response.json())
      .then(json => dispatch(getScheduleSuccess((json))))
      .catch(err => dispatch(getScheduleError(err)))
  }
}

export function getMap(data) {
  return (dispatch, getState) => {
    dispatch(getAsyncStart())
    return fetch('/mock/map.json')
      .then(response => response.json())
      .then(json => dispatch(getMapSuccess((json))))
      .catch(err => dispatch(getScheduleError(err)))
  }
}
