/**
 * Created by jiangnan on 17/6/1.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as billingAction from 'actions/billing';
import Radium from 'radium'
import { Link } from 'react-router'
import { routeCodes } from '../../routes';
import NoData from 'components/Global/NoData'

@connect(state => ({
  historyList: state.billing.get('historyList').toJS(),
}), dispatch => bindActionCreators(billingAction, dispatch))
@Radium
export default class App extends Component {
  static propTypes = {
    historyList: PropTypes.array,
  }

  constructor(){
    super()
  }

  componentDidMount() {
    //this.props.history()
  }

  render() {
    return (
      <div>
        {this.props.historyList.length ? this.props.historyList.map(item =>
          <div>

          </div>)
          :
          <NoData linkTo={routeCodes.BILLING} buttonText="入金" title="您的支付记录将在此显示"/>
        }
      </div>
    );
  }
}