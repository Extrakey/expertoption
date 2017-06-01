/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as billingAction from 'actions/billing';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';

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
    const navData = [{
        url: routeCodes.BILLING,
        name: '入金'
      }, {
      url: routeCodes.PAYHISTORY,
      name: '入金历史记录'
      }, {
        url: routeCodes.WITHDRAWAL,
        name: '出金'
      }
    ]
    console.log(routeCodes, '---', billing)
    return (
      <div className='App'>
        <TabNav navData={navData}/>
        账户类型
      </div>
    );
  }
}