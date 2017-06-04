/**
 * Created by jiangnan on 17/6/1.
 */
import Immutable from 'immutable'


import {
  GET_BILLING_START,
  GET_BILLING_ERROR,
  GET_BILLING_SUCCESS,
  GET_PRICING_SUCCESS,
  GET_WITHDRAWAL_SUCCESS,
} from 'actions/billing';

const initialState = Immutable.fromJS({
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  data: {
    presets: [],
    payment_methods: [],
    payment_methods_less: [],
    currency: [],
  },
  pricingList: {},
  withdrawalList: [],
  historyList: []
});

const actionsMap = {

  // Async action
  [GET_BILLING_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [GET_BILLING_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [GET_BILLING_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      data: {
        ...action.data,
        payment_methods_less: action.data.payment_methods.slice(0, 3),
      },
    });
  },
  [GET_PRICING_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      pricingList: action.data,
    });
  },
  [GET_WITHDRAWAL_SUCCESS]: (state, action) => {
    console.log(action, 'action')
    return state.merge({
      asyncLoading: false,
      withdrawalList: action.data.faqData,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
