/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Menu extends Component {
  render() {
    const {showSetting, showLogout} = this.props
    return (
      <div className='menu-links'>
       <ul>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.APP }
           >
             交易
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.BILLING }
           >
             财务管理
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.USER }
           >
             个人资料
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.ANALYTICS }
           >
             市场分析
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.PLANTFORMS }
           >
             应用
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.INFO }
           >
             帮助
           </Link>
         </li>
       </ul>
        <div className="menu-bottom">
          <div onClick={showSetting}>设置</div>
          <div onClick={showLogout}>退出</div>
        </div>
      </div>
    );
  }
}
