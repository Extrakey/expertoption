/**
 * Created by jiangnan on 17/6/2.
 */
/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import TabNav from './TabNav'

export default class Modal extends Component {


  render() {
    const navData = [{
      url: 'javascript::',
      name: '应用设置',
    }, {
      url: 'javascript::',
      name: '修改密码'
    }]
    const { hideSetting } = this.props
    return (
      <div className="wrapper_black" onClick={hideSetting}>
        <div>
          <TabNav navData={navData}/>
        </div>
      </div>
    );
  }
}
