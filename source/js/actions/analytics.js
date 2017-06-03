/**
 * Created by jiangnan on 17/6/1.
 */
import fetch from 'isomorphic-fetch'

export const GET_ASYNC_START = 'GET_FAQ_START';
export const GET_SCHEDULE_ERROR = 'GET_SCHEDULE_ERROR';
export const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS';

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

export function getSchedule(data) {
  return (dispatch, getState) => {
    dispatch(getAsyncStart())
    return fetch('/mock/get_asset_schedule.json')
      .then(response => response.json())
      .then(json => dispatch(getScheduleSuccess((json))))
      .catch(err => dispatch(getScheduleError(err)))
  }
}
