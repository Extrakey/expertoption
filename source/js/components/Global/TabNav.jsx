import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  render() {
    const { navData } = this.props
    console.log(navData, 'navDatanavData')
    return (
      <div className='Menu'>
        <div className='menu-link'>
           {navData.map(item =>
             <Link
              activeClassName='menu-link-active'
              className='menu-link'
              to={ item.url }>
              {item.name}
            </Link>
          )}
        </div>
      </div>
    );
  }
}
