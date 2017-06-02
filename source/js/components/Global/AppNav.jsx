/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';
import { changeURLPar } from "../../util";
import { FormattedMessage } from 'react-intl'

const style = {
  menuLinks: {
    position: 'relative'
  },
}

export default class Menu extends Component {

  constructor(){
    super()
    this.toggleLanguageShow = this.toggleLanguageShow.bind(this)
    this.setLanguage = this.setLanguage.bind(this)
    this.state = {
      showLanguage: false,
    }
  }

  toggleLanguageShow() {
    this.setState({
      showLanguage: !this.state.showLanguage
    })
  }

  setLanguage(e) {
    if (e.target.dataset.lan) {
      window.location.href = changeURLPar('locale', e.target.dataset.lan)
    }
  }

  render() {
    const { showLanguage } = this.state
    return (
      <div className='app-navs'>
        <img src="../../../assets/img/logo.jpg" width={40} alt="logo"/>
        <span onClick={ this.toggleLanguageShow }><FormattedMessage id="changeLanguage" /></span>
        <span>全屏</span>
        <span>学习资料</span>
        <span>声音</span>
        <span>定位</span>
        <div className="language-menu" style={{ display: showLanguage ? 'block' : 'none' }} onClick={ this.setLanguage }>
          <span data-lan="en">English</span>
          <span data-lan="zh_CN">简体中文</span>
          <span data-lan="zh_TW">繁体中文</span>
          <span data-lan="ja">日文</span>
        </div>
      </div>
    );
  }
}
