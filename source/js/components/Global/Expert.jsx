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
import Switch from './Switch'

export default class NoData extends Component {


  render() {
    const { title } = this.props
    return (
      <div>
        <div>
          <h4>{title}</h4>
          <div>
            <Switch />
            <div>
              <p>显示交易者的交易</p>
              <p>999人在线</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <img src="###" alt=""/>
                <span>
                    test
                </span>
              </li>
              <li>
                <img src="###" alt=""/>
                <span>
                    test
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
