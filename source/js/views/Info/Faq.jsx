/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import * as aboutAction from 'actions/about';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

@connect(state => ({
  about: state.about.get('faqList').toJS(),
}), dispatch => bindActionCreators(aboutAction, dispatch))
@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  componentDidMount() {
    this.props.getFAQ()
  }

  render() {

  	let faqDom = this.props.about.map((item, i) => {
		  return (
		  	<div className="faq-content">
			  	<p>{ item.title }</p>
			  	<p>{ item.desc }</p>
			  </div>
		  )
		})

    return (
      <div className='flex column flex1'>
      	{ faqDom }
      </div>
    );
  }
}