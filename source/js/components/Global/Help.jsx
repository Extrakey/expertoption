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
export default class Help extends Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }

  changeImg() {
    this.setState({
      index: ++this.state.index,
    })
  }

  jumpTo(index) {
    this.setState({
      index,
    })
  }

  render() {
    const { app: {isShowHelp}, toggleHelp } = this.props
    const { index } = this.state
    return (
      <div className={isShowHelp ? "wrapper_black" : "hide"}>
        <div className="help">
          <p onClick={toggleHelp}>关闭</p>
          <div className="help_inner">
            {index === 0 && <div>1111</div> }
            {index === 1 && <div>222</div> }
            {index === 2 && <div>33</div> }
          </div>
          <div>
            {[1,2,3].map((item, index) => <span onClick={() => this.jumpTo(index)}>{item}</span>)}
          </div>
          {index !== 2 ?
            <button className="button" onClick={::this.changeImg}>下一页</button>
            : <Link onClick={toggleHelp} to={routeCodes.BILLING}><button>去交易</button></Link>}
        </div>
      </div>
    );
  }
}
