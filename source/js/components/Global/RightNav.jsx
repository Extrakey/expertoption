/**
 * Created by jiangnan on 17/5/31.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import NoData from './NoData'
import Trending from './Trending'
import Expert from './Expert'

export default class RightMenu extends Component {

  static propTypes = {
    children: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      showRightNav: false,
      rightNavIndex: 0
    }
  }

  toggleRightNav(index) {
    let showRightNav
    if (this.state.showRightNav) {
      showRightNav = index === this.state.rightNavIndex ? !this.state.showRightNav : this.state.showRightNav
    } else {
      showRightNav = true
    }
    this.setState({
      showRightNav,
      rightNavIndex: index
    })
  }

  toggleRightNavBtn () {
    this.setState({
      showRightNav: !this.state.showRightNav
    })
  }

  render() {
    const {showRightNav, rightNavIndex} = this.state
    return (
      <div className='right-menu'>
      	<div className="top-btn" onClick={::this.toggleRightNavBtn}> {showRightNav ? 'X' :  '打开'}</div>
        <div className="flex h_100">
          {showRightNav && rightNavIndex === 0 &&
            <div className="left-content">
              <NoData linkTo={routeCodes.APP} buttonText="交易" title="您最近的交易将在这里显示" />
            </div>}

          {showRightNav && rightNavIndex === 1 &&
          <div className="left-content">
            <Trending />
          </div> }

          {showRightNav && rightNavIndex === 2 &&
          <div className="left-content">
            <Expert />
          </div>}

          <div className="right-content">
            <ul>
              {['交易', '趋势','专家' ].map((item, index) => <li key={index} onClick={() => this.toggleRightNav(index)}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
