import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as appAction from 'actions/app';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LeftNav from 'components/Global/LeftNav';
import AppNav from 'components/Global/AppNav';
import RightNav from 'components/Global/RightNav';
import Modal from 'components/Global/Modal';

@connect(state => ({
  app: state.app.toJS(),
}), dispatch => bindActionCreators(appAction, dispatch))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children, showSetting, hideSetting, logOut, app } = this.props;
    return (
      <div className='App_Wrapper'>
        <AppNav />
        <div className='flex h_100 space_between'>
          <LeftNav showSetting={showSetting} logOut={logOut}/>
          { children }
          <RightNav />
          {app.showSetting && <Modal hideSetting={hideSetting} />}
        </div>
      </div>
    );
  }
}
