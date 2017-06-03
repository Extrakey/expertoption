/**
 * Created by jiangnan on 17/6/2.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import TabNav from './TabNav'
import * as appAction from 'actions/app';

export default class Confirm extends Component {
  render() {
    const { title, isShow, hideLogout, sure } = this.props
    return (
      <div className={ isShow ? "wrapper_black" : "hide"} onClick={hideLogout}>
        <div className="wrapper_white">
          <h4>{title} <span onClick={hideLogout}>关闭</span></h4>
          <div>
            <button onClick={sure}>确定</button>
            <button onClick={hideLogout}>取消</button>
          </div>
        </div>
      </div>
    );
  }
}
