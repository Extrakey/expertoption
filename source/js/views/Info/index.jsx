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
    const navData = [{
        url: routeCodes.INFO,
        name: '帮助'
      }, {
      url: routeCodes.FAQ,
      name: '常见问题'
      }, {
        url: routeCodes.EDUCATION,
        name: '学习资料'
      }, {
      url: routeCodes.TERMS,
      name: '条款和条件'
      }, {
        url: routeCodes.ABOUT,
        name: '关于我们'
      } ]
    const {children} = this.props
    return (
      <div className='App flex column flex1'>
        <TabNav navData={navData}/>
        { children }
      </div>
    );
  }
}