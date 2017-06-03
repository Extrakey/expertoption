/**
 * Created by jiangnan on 17/6/3.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appAction from 'actions/app';

import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import TabNav from './TabNav'
import Switch from './Switch'

@connect(state => ({
  app: state.app.toJS(),
}), dispatch => bindActionCreators(appAction, dispatch))
export default class Chat extends Component {


  render() {
    const { app: {isShowChat}, toggleChat } = this.props
    return (
      <div className={ isShowChat ? "chat" : "hide"}>
          <p onClick={toggleChat}>关闭</p>
          <textarea placeholder="testtest" />
          <button className="button">发送</button>
      </div>
    );
  }
}
