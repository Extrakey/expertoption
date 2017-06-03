/**
 * Created by jiangnan on 17/6/2.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import TabNav from './TabNav'
import * as appAction from 'actions/app';

export default class Modal extends Component {
  render() {
    const { title } = this.props
    return (
      <div className="wrapper_black" onClick={hide}>
        <div>
          <h4>{title} <span>关闭</span></h4>
          <div>
            <button>确定</button>
            <button>取消</button>
          </div>
        </div>
      </div>
    );
  }
}
