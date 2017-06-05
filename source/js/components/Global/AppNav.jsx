/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import { FormattedMessage } from 'react-intl'
import * as appAction from 'actions/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SwitchLanguage from "./SwitchLanguage";

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
    this.state = {
      showLanguage: false,
    }
  }

  toggleLanguageShow() {
    this.setState({
      showLanguage: !this.state.showLanguage
    })
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
        <SwitchLanguage showLanguage={showLanguage} />
        <Link to={routeCodes.BILLING}><button className="button">Deposit</button></Link>
      </div>
    );
  }
}
