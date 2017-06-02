/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import * as aboutAction from 'actions/about';
import Radium from 'radium'

const style = {
  navigationTabs: {
  	width: '200px',
    lineHeight: '50px',
  	display: 'inline-block'
  },
  navigationLink: {
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    textAlign: 'center',
    display: 'block',
    fontSize: '16px'
  },
  termContent: {
  	display: 'inline-block',
  	padding: '20px'
  }
}

@connect(state => ({
  about: state.about.get('termsData'),
}), dispatch => bindActionCreators(aboutAction, dispatch))
@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  componentDidMount() {
    this.props.getTerm()
  }

  render() {
  	console.log(this.props.about)

    return (
      <div className='flex row flex1'>
      	<div className="navigation-tabs" style={ style.navigationTabs }>
          <Link style={ style.navigationLink } to={ routeCodes.TERMS }>条款和条件</Link>
          <Link style={ style.navigationLink } to={ routeCodes.PAYMENT }>支付政策</Link>
          <Link style={ style.navigationLink } to={ routeCodes.RETURNREFUND }>提款和退款政策</Link>
        </div>
        <div className="term-content flex1" style={ style.termContent }>
        	<div dangerouslySetInnerHTML={{ __html: this.props.about }} />
        </div>
      </div>
    );
  }
}