/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const navData = [{
        url: routeCodes.BILLING,
        name: '个人资料'
      }, {
      url: routeCodes.PAYHISTORY,
      name: '交易日志'
      }, {
        url: routeCodes.WITHDRAWAL,
        name: '编辑个人资料'
      }
    ]
    const {children} = this.props
    return (
      <div className='App flex column flex1'>
        <div className="flex flex1">
          <div className="flex flex1">1</div>
          <div className="flex flex1">Personal info</div>
          <div className="flex flex1">Assets chart</div>
          <div className="flex flex1">4</div>
        </div>
        <div className="flex flex1">
          <div className="flex flex1">交易日志</div>
          <div className="flex flex1">交易量</div>
        </div>
      </div>
    );
  }
}