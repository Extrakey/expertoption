/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import { FormattedMessage } from 'react-intl'

export default class LeftNav extends Component {
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
             <FormattedMessage id="trade" />
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.BILLING }
           >
             <FormattedMessage id="finances" />
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.USER }
           >
             <FormattedMessage id="profile" />
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.ANALYTICS }
           >
             <FormattedMessage id="analytics" />
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.PLANTFORMS }
           >
             <FormattedMessage id="apps" />
           </Link>
         </li>
         <li>
           <Link
             activeClassName='menu-link-active'
             to={ routeCodes.INFO }
           >
             <FormattedMessage id="helps" />
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
