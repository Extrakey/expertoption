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

export default class NoData extends Component {


  render() {
    const { title, buttonText, linkTo } = this.props
    return (
      <div>
        <div>
          <h4>{title}</h4>
          <div>
            trending
          </div>
        </div>
      </div>
    );
  }
}
