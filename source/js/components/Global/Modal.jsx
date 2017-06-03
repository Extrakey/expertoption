/**
 * Created by jiangnan on 17/6/2.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TabNav from './TabNav'
import Switch from './Switch'
import * as appAction from 'actions/app';

@connect(state => ({
  app: state.app.toJS(),
}), dispatch => bindActionCreators(appAction, dispatch))

export default class Modal extends Component {

  constructor(){
    super()
    this.state={
      navIndex: 0
    }
  }

  toggleSound(e) {
    e.stopPropagation()
    this.props.toggleSound()
  }

  navClick(navIndex, e) {
    e.stopPropagation()
    this.setState({
      navIndex,
    })
  }

  render() {
    const navData = [{
      url: 'javascript::',
      name: '应用设置',
    }, {
      url: 'javascript::',
      name: '修改密码'
    }]
    const { app: {sound, isShowSetting }, hideSetting } = this.props
    const { navIndex } = this.state
    return (
      <div className={ isShowSetting ? "wrapper_black" : "hide"} onClick={hideSetting}>
        <div className="wrapper_white">
          <TabNav navData={navData} onClick={::this.navClick}/>
          {navIndex === 0 && <div>
            <ul>
              <li className="flex space_between p10">
                <span>声音</span>
                <Switch onClick={::this.toggleSound} isOpen={sound}/>
              </li>
            </ul>
          </div>}
          {navIndex === 1 && <div>
            <p>原密码</p>
            <input type="text"/>
            <p>原密码</p>
            <input type="text"/>
            <p>原密码</p>
            <input type="text"/>
            <div>
              <button className="button">更改密码</button>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}
