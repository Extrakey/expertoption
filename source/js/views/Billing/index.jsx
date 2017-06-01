/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as billingAction from 'actions/billing';

import Menu from 'components/Global/Menu';

@connect(state => ({
  billing: state.billing,
}), dispatch => bindActionCreators(billingAction, dispatch))
export default class App extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentDidMount() {
    this.props.mobileDeposit()
  }


  render() {
    const { billing } = this.props;
    console.log(billing.toJS(), 'billing')
    return (
      <div className='App'>
        账户类型
      </div>
    );
  }
}