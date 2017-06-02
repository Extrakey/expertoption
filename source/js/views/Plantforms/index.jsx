/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

const style = {
  downloadItem: {
    width: '100px',
    height: '100px',
    marginRight: '20px',
    border: '1px solid #ccc'
  }
}

@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const data = [
      {
        icon: 'ios',
        url: 'ios',
        name: 'ios'
      },{
        icon: 'android',
        url: 'android',
        name: 'android'
      },{
        icon: 'MacOS',
        url: 'MacOS',
        name: 'MacOS'
      },
      {
        icon: 'windows',
        url: 'windows',
        name: 'windows'
      }
    ]
    return (
      <div className='App flex'>
        {data.map(item =>
          <div className="flex1 column" style={ style.downloadItem }>
            <img src={item.icon} alt=""/>
            <h5>{item.name}</h5>
            <a href={item.url}></a>
          </div>
        )}
      </div>
    );
  }
}