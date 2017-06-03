/**
 * Created by jiangnan on 17/6/1.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userAction from 'actions/user';
import Radium from 'radium'
import { Link } from 'react-router'
import { routeCodes } from '../../routes';
import NoData from 'components/Global/NoData'

@connect(state => ({
  dealsList: state.user.get('dealsList').toJS(),
}), dispatch => bindActionCreators(userAction, dispatch))
@Radium
export default class App extends Component {
  static propTypes = {
    dealsList: PropTypes.array,
  }

  constructor(){
    super()
  }

  componentDidMount() {
    //this.props.deals()
  }

  render() {
    return (
      <div>
        {this.props.dealsList.length ? this.props.dealsList.map(item =>
          <div>

          </div>)
          :
          <NoData linkTo={routeCodes.APP} buttonText="交易" title="您的支付记录将在此显示"/>
        }
      </div>
    );
  }
}