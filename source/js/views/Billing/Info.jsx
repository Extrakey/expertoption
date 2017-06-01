/**
 * Created by jiangnan on 17/6/1.
 */
/**
 * Created by jiangnan on 17/6/1.
 */
/**
 * Created by jiangnan on 17/5/31.
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
    border: '1px solid #000',
    width: '200px',
  },
  desc: {
    fontSize: '12px'
  }
}

@Radium
export default class App extends Component {

  render() {

    return (
      <div>
        <div>
          <img src="img" alt=""/>
          受VFSC监管
        </div>
        <div>
          <img src="img" alt=""/>
          受VFSC监管
        </div>
        <div>
          <img src="img" alt=""/>
          受VFSC监管
        </div>
        <div>
          <img src="img" alt=""/>
          受VFSC监管
        </div>
        <div>
          <img src="img" alt=""/>
          受VFSC监管
        </div>
        <div>
          <img src="img" alt=""/>
          受VFSC监管
        </div>
      </div>
    );
  }
}