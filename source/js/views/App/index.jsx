import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as appAction from 'actions/app';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LeftNav from 'components/Global/LeftNav';
import AppNav from 'components/Global/AppNav';
import RightNav from 'components/Global/RightNav';
import Modal from 'components/Global/Modal';
import Confirm from 'components/Global/Confirm';
import Chat from 'components/Global/Chat';
import Help from 'components/Global/Help';
import { routeCodes } from '../../routes';
import { browserHistory } from 'react-router'

@connect(state => ({
  app: state.app.toJS(),
}), dispatch => bindActionCreators(appAction, dispatch))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  sure(e) {
    // TO DO clear cookie
    e.stopPropagation()
    browserHistory.push(routeCodes.DASHBOARD)
  }

  render() {
    const { children, showSetting, hideSetting, showLogout, hideLogout, app } = this.props;
    return (
      <div className='App_Wrapper'>
        <AppNav />
        <div className='flex h_100 space_between'>
          <LeftNav showSetting={showSetting} showLogout={showLogout}/>
          { children }
          <RightNav />
          <Modal />
          <Confirm title='确认退出？' isShow={app.isShowLogout} hideLogout={hideLogout} sure={::this.sure} />
          <Chat />
          <Help />
        </div>
      </div>
    );
  }
}
