/**
 * Created by jiangnan on 17/6/1.
 */
import Immutable from 'immutable'


import {
  GET_ASYNC_START,
  GET_FAQ_ERROR,
  GET_FAQ_SUCCESS,
  GET_GLOSSARY_ERROR,
  GET_GLOSSARY_SUCCESS,
  GET_TERMS_ERROR,
  GET_TERMS_SUCCESS
} from 'actions/about';

const initialState = Immutable.fromJS({
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  faqList: [],
  glossaryList: [],
  termsData: ''
});

const actionsMap = {

  // Async action
  [GET_ASYNC_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [GET_FAQ_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_FAQ_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      faqList: action.data.faqData
    });
  },

  [GET_GLOSSARY_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_GLOSSARY_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      glossaryList: action.data.glossaryData
    });
  },

  [GET_TERMS_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_TERMS_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      termsData: decodeURI(action.data.termsData)
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
