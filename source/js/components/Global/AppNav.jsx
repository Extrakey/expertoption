/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import { changeURLPar } from "../../util";
import { FormattedMessage } from 'react-intl'
import * as appAction from 'actions/app';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const style = {
  menuLinks: {
    position: 'relative'
  },
}

@connect(state => ({
  app: state.app.toJS(),
}), dispatch => bindActionCreators(appAction, dispatch))
export default class AppNav extends Component {
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
    const { app: {sound}, toggleSound, toggleChat, toggleHelp } = this.props
    const { showLanguage } = this.state
    return (
      <div className='app-navs'>
        <img src={require('../../../assets/img/logo.jpg')} width={40} alt="logo"/>
        <span onClick={ this.toggleLanguageShow }><FormattedMessage id="changeLanguage" /></span>
        <span><FormattedMessage id="fullScreen" /></span>
        <span onClick={toggleHelp}><FormattedMessage id="howToTrade" /></span>
        <span onClick={toggleSound}><FormattedMessage id="voice" />{sound ? '开' :'关'}</span>
        <span><FormattedMessage id="location" /></span>
        <span onClick={toggleChat}>live chart</span>
        <div className="language-menu" style={{ display: showLanguage ? 'block' : 'none' }} onClick={ this.setLanguage }>
          <span data-lan="en">English</span>
          <span data-lan="zh_CN">简体中文</span>
          <span data-lan="zh_TW">繁体中文</span>
          <span data-lan="ja">日文</span>
        </div>
        <Link to={routeCodes.BILLING}><button className="button">Deposit</button></Link>
      </div>
    );
  }
}
