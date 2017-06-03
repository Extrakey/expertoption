/**
 * Created by jiangnan on 17/6/1.
 */
/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as billingAction from 'actions/billing';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

const style = {
  payWrapper: {
    margin: '1rem',
    padding: '1rem',
    textAlign: 'center',
    border: '1px solid #000',
    width: '200px',
  },
  desc: {
    fontSize: '12px'
  }
}

@Radium
export default class App extends Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    active: PropTypes.object,
  }

  render() {
    const { title, desc, activeStyle, onClick, imgSrc, itemStyle } = this.props;
    let imgText
    if (imgSrc){
      const url = `../../../assets/img/${imgSrc}.png`
      // TO DO
      // imgText = <img src={require(url)} alt={imgSrc} />
      imgText = <img src={require('../../../assets/img/card.png')} alt={imgSrc} />
    }
    return (
      <div className="flex column" style={[style.payWrapper, itemStyle, activeStyle]} onClick={onClick}>
        {imgText}
        {title && <h5>{title}</h5>}
        {desc && <p style={style.desc}>{desc}</p>}
      </div>
    );
  }
}