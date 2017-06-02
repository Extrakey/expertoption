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
  breadcrumbs: {
    height: '50px',
    lineHeight: '50px',
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

@connect(state => ({
  about: state.about.get('glossaryList').toJS(),
}), dispatch => bindActionCreators(aboutAction, dispatch))
@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  componentDidMount() {
    this.props.getGlossary()
  }

  render() {

    let glossaryDom = this.props.about.map((item, i) => {
      return (
        <div className="glossary-content">
          <p>{ item.title }</p>
          <p>{ item.desc }</p>
        </div>
      )
    })

    return (
      <div className='flex column flex1'>
        <div className="breadcrumbs" style={ style.breadcrumbs }>
          <Link to={ routeCodes.EDUCATION }>学习资料</Link>
          <span>/</span>
          <Link to={ routeCodes.GLOSSARY }>Technical Analysis</Link>
          <span>/</span>
        </div>
        <div className="education-content">
          { glossaryDom }
        </div>
      </div>
    );
  }
}