/**
 * Created by jiangnan on 17/5/31.
 */

import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';

export default class RightMenu extends Component {
  render() {
    return (
      <div className='right-menu'>
      	<div className="left-content"></div>
      	<div className="right-content">
      		<ul>
      			<li>交易</li>
      			<li>趋势</li>
      			<li>专家</li>
      		</ul>
      	</div>
      </div>
    );
  }
}
