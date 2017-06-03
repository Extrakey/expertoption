import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as transactionAction from 'actions/transaction';
import * as appAction from 'actions/transaction';
import { routeCodes } from '../../routes';
import Radium from 'radium'
import Confirm from 'components/Global/Confirm'
import NoData from 'components/Global/NoData'


@connect(state => ({
  list: state.trans.get('list').toJS(),
}), dispatch => bindActionCreators(transactionAction,  dispatch))
export default class Transaction extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  constructor() {
    super()
    this.state={
      noData: true
    }
  }

  componentDidMount() {
    this.props.getUserTrans()
  }

  hideNoData() {
    this.setState({
      noData: false
    })
  }


  render() {
    const { list } = this.props
    const { noData } = this.state
    return (
      <div className='container'>
        交易
        {!list.length && noData &&
        <div className="wrapper_black" onClick={::this.hideNoData}>
          <div className="wrapper_white">
            <NoData linkTo={routeCodes.BILLING} buttonText="入金" title="请存入资金，用真实的钱款进行交易"/>
          </div>
        </div>
        }
      </div>
    );
  }
}
