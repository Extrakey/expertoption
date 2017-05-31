/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as appAction from 'actions/app';

import Menu from 'components/Global/Menu';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}), dispatch => bindActionCreators(appAction, dispatch))
export default class App extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentDidMount() {

  }


  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        账户类型
      </div>
    );
  }
}