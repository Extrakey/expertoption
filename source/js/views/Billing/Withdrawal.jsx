/**
 * Created by jiangnan on 17/6/1.
 */
/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as billingAction from 'actions/billing';
import { routeCodes } from '../../routes';
import PayItem from './PayItem';
import Info from './Info';
import Bar from './Bar';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'


@connect(state => ({
  withdrawalList: state.billing.get('withdrawalList').toJS(),
}), dispatch => bindActionCreators(billingAction, dispatch))
@Radium
export default class App extends Component {
  static propTypes = {
    withdrawalList: PropTypes.array,
  }

  constructor(){
    super()
  }

  componentDidMount() {
    this.props.withdrawal()
  }

  render() {
    console.log(this.props.withdrawalList, 'this.props.withdrawalList')
    return (
      <div>
        {this.props.withdrawalList.map(item =>
          <div>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>)}
      </div>
    );
  }
}