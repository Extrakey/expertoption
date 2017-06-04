/**
 * Created by jiangnan on 17/6/1.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as billingAction from 'actions/billing';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

const style = {
  payWrapper: {
    margin: '1rem',
    padding: '1rem',
    textAlign: 'center',
    borderWidth: '1px',
    borderColor: '#000',
    width: '200px',
  },
  desc: {
    fontSize: '12px'
  },
  barWrapper: {
    width: '350px',
  },
  barInnerWrapper: {
    backgroundColor: '#fff',
    height: '45px'
  },
  gold: {
    backgroundColor: '#e2c751'
  },
  vip: {
    backgroundColor: '#9955e8'
  },
  silver: {
    backgroundColor: '#d9dcdd'
  },
  mini: {
    backgroundColor: '#40aef9'
  }
}

@Radium
export default class Bar extends Component {
  render() {
    const { color, percent } = this.props
    return (
      <div className="flex column" style={style.barWrapper}>
        <div className="flex flex1">
          <div className="flex1">mini</div>
          <div className="flex1">sliver</div>
          <div className="flex1">gold</div>
          <div className="flex1">vip</div>
        </div>
        <div className="flex1" style={style.barInnerWrapper}>
          <div style={[style[color], {height: '45px', width: `${percent*20}%`}]}></div>
        </div>
      </div>
    );
  }
}