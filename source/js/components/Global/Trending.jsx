/**
 * Created by jiangnan on 17/6/3.
 */
/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import TabNav from './TabNav'

export default class Trending extends Component {

  constructor() {
    super()
    this.state={
      navIndex: 0
    }
  }

  navClick(navIndex, e) {
    e.stopPropagation()
    this.setState({
      navIndex,
    })
  }

  render() {
    const navData = [{
      url: 'javascript::',
      name: '1min',
    }, {
      url: 'javascript::',
      name: '2min',
    }, {
      url: 'javascript::',
      name: '3min',
    }]
    const { title, buttonText, linkTo } = this.props
    const { navIndex } = this.state
    return (
      <div>
        <div>
          <h4>{title}</h4>
          <TabNav navData={navData} onClick={::this.navClick}/>
          {navIndex === 0 && <div>
              <ul>
                <li className="flex space_between">
                  <span>test</span>
                  <span>111</span>
                </li>
              </ul>
          </div>}
          {navIndex === 1 && <div>
            <ul>
              <li className="flex space_between">
                <span>test</span>
                <span>222</span>
              </li>
            </ul>
          </div>}
          {navIndex === 2 && <div>
            <ul>
              <li className="flex space_between">
                <span>test</span>
                <span>333</span>
              </li>
            </ul>
          </div>}
        </div>
      </div>
    );
  }
}
