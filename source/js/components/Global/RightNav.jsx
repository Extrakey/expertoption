/**
 * Created by jiangnan on 17/5/31.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class RightMenu extends Component {

  static propTypes = {
    children: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      showRightNav: false
    }
  }

  toggleRightNav() {
    this.setState({
      showRightNav: !this.state.showRightNav
    })
  }

  render() {
    const {showRightNav} = this.state
    return (
      <div className='right-menu'>
      	<div className="top-btn" onClick={::this.toggleRightNav}> {showRightNav ? 'X' :  '打开'}</div>
        <div className="flex h_100">
          <div className="left-content" style={showRightNav ? {display: 'block'} :{display: 'none'}}>
            1111
          </div>
          <div className="right-content">
            <ul>
              <li>交易</li>
              <li>趋势</li>
              <li>专家</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
