/**
 * Created by jiangnan on 17/5/31.
 */
/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu-links' style={{width: '180px'}}>
       <ul>
         <li>
           <Link
             activeClassName='Menu-link--active'
             className='Menu-link'
             to={ routeCodes.APP }
           >
             交易
           </Link>
         </li>
         <li>
           <Link
             activeClassName='Menu-link--active'
             className='Menu-link'
             to={ routeCodes.BILLING }
           >
             财务管理
           </Link>
         </li>
         <li>
           <Link
             activeClassName='Menu-link--active'
             className='Menu-link'
             to={ routeCodes.USER }
           >
             个人资料
           </Link>
         </li>
         <li>
           <Link
             activeClassName='Menu-link--active'
             className='Menu-link'
             to={ routeCodes.ANALYTIES }
           >
             市场分析
           </Link>
         </li>
         <li>
           <Link
             activeClassName='Menu-link--active'
             className='Menu-link'
             to={ routeCodes.INFO }
           >
             帮助
           </Link>
         </li>
       </ul>
      </div>
    );
  }
}
