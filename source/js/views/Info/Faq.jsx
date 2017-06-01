/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {

    return (
      <div className='App flex column flex1'>
      </div>
    );
  }
}