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
        url: routeCodes.USER,
        name: '个人资料'
      }, {
      url: routeCodes.DEALS,
      name: '交易日志'
      }, {
        url: routeCodes.EDIT,
        name: '编辑个人资料'
      }
    ]
    const {children} = this.props
    return (
      <div className='App flex column flex1'>
        <TabNav navData={navData}/>
        { children }
      </div>
    );
  }
}