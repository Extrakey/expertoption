/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import { changeURLPar } from "../../utils";

export default class SwitchLanguage extends Component {
  constructor(){
    super()
    this.setLanguage = this.setLanguage.bind(this)
  }

  setLanguage(e) {
    if (e.target.dataset.lan) {
      window.location.href = changeURLPar('locale', e.target.dataset.lan)
    }
  }

  render() {
    const {showLanguage} = this.props
    return (
      <div className="language-menu" style={{ display: showLanguage ? 'block' : 'none' }} onClick={ this.setLanguage }>
        <span data-lan="en">English</span>
        <span data-lan="zh_CN">简体中文</span>
        <span data-lan="zh_TW">繁体中文</span>
        <span data-lan="ja">日文</span>
      </div>
    );
  }
}
