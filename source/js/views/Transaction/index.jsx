import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as transactionAction from 'actions/transaction';
import { routeCodes } from '../../routes';
import Radium from 'radium'
import Confirm from 'components/Global/Confirm'

@connect(state => ({
  list: state.trans.get('list').toJS(),
}), dispatch => bindActionCreators(transactionAction, dispatch))
export default class Transaction extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  componentDidMount() {
    this.props.getUserTrans()
  }


  render() {
    const { list } = this.props
    return (
      <div className='container'>
        交易
        {/*{!list.length && <Confirm />}*/}
      </div>
    );
  }
}
