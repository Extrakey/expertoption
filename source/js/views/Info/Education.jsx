/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import { IndexLink, Link } from 'react-router';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

const style = {
  educationTab: {
    width: '100%'
  },
  educationTabLink: {
    width: '50%',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '20px'
  },
}

@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {

    return (
      <div className='flex column flex1'>
      	<div className="education-tab" style={ style.educationTab }>
      		<Link style={ style.educationTabLink } to={ routeCodes.GLOSSARY }>Glossary</Link>
      		<Link style={ style.educationTabLink } to={ routeCodes.TECHNICALANALYSIS }>Technical analysis</Link>
      	</div>
      </div>
    );
  }
}