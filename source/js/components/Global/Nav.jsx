import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

export default class Nav extends Component {

  render() {
    return (
      <div className='Menu'>
        <div className='flex'>
          <IndexLink
            activeClassName='menu-link-active'
            className='menu-link'
            to={ routeCodes.DASHBOARD }
          >
            主页
          </IndexLink>
          <Link
            activeClassName='menu-link-active'
            className='menu-link'
            to={ routeCodes.PLATFORM }
          >
            平台
          </Link>
          <Link
            activeClassName='menu-link-active'
            className='menu-link'
            to={ routeCodes.PRICING }
          >
            账户类型
          </Link>
          <Link
            activeClassName='menu-link-active'
            className='menu-link'
            to={ routeCodes.TEACH }
          >
            学习资料
          </Link>
          <Link
            activeClassName='menu-link-active'
            className='menu-link'
            to={ routeCodes.CONTACTS }
          >
            关于我们
          </Link>
          <Link
            activeClassName='menu-link-active'
            className='Menu-link'
            to='/app'
          >
            登陆后页面
          </Link>
        </div>
      </div>
    );
  }
}
