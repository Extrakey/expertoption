/**
 * Created by jiangnan on 17/6/3.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import TabNav from './TabNav'

export default class Switch extends Component {
  render() {
    const { onClick, isOpen } = this.props
    return (
      <div className="flex" onClick={onClick}>
        {isOpen && <div>开</div>}
        {!isOpen && <div>关</div>}
      </div>
    );
  }
}
