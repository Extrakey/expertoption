import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';

export default class Menu extends Component {

  render() {
    return (
      <div className='menu'>
        <div className='menu-logo'>
          <img
            src={ workAndCoLogoImg }
            alt='Work & Co logo'
          />
        </div>
        <div className='menu-links'>
          <IndexLink
            activeClassName='menu-link-active'
            className='menu-link'
            to={ routeCodes.DASHBOARD }
          >
            Home
          </IndexLink>
          <Link
            activeClassName='menu-link-active'
            className='menu-link'
            to={ routeCodes.ABOUT }
          >
            About
          </Link>
          <Link
            activeClassName='menu-link-active'
            className='menu-link'
            to='404'
          >
            404
          </Link>
        </div>
      </div>
    );
  }
}
