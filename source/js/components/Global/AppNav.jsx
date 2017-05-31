/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu-links'>
        <img src="../../../assets/img/logo.jpg" width={40} alt="logo"/>
        <span>切换语言</span>
        <span>全屏</span>
        <span>学习资料</span>
        <span>声音</span>
        <span>定位</span>
      </div>
    );
  }
}
