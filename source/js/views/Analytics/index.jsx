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
        url: routeCodes.ANALYTICS,
        name: '资产'
      }, {
      url: routeCodes.STOCKS,
      name: '股票'
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