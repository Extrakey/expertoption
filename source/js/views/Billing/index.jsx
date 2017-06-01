/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as billingAction from 'actions/billing';
import { routeCodes } from '../../routes';
import PayItem from './PayItem';
import TabNav from 'components/Global/TabNav';

const activeStyle = [
  {borderColor: '#9955e8', color: '#9955e8'},
  {borderColor: '#e2c751', color: '#e2c751'},
  {borderColor: '#d9dcdd', color: '#d9dcdd'},
  {borderColor: '#40aef9', color: '#40aef9'},
]

const activeSysStyle = [
  {borderColor: '#9955e8', color: '#9955e8'},
  {borderColor: '#e2c751', color: '#e2c751'},
  {borderColor: '#d9dcdd', color: '#d9dcdd'},
  {borderColor: '#40aef9', color: '#40aef9'},
  {borderColor: '#9955e8', color: '#9955e8'},
  {borderColor: '#e2c751', color: '#e2c751'},
  {borderColor: '#d9dcdd', color: '#d9dcdd'},
  {borderColor: '#40aef9', color: '#40aef9'},
  {borderColor: '#d9dcdd', color: '#d9dcdd'},
  {borderColor: '#40aef9', color: '#40aef9'},
  {borderColor: '#9955e8', color: '#9955e8'},
  {borderColor: '#e2c751', color: '#e2c751'},
  {borderColor: '#40aef9', color: '#40aef9'},
  {borderColor: '#9955e8', color: '#9955e8'},
  {borderColor: '#e2c751', color: '#e2c751'},
]

const style = {
  payWrapper: {
    width: '450px'
  },
  itemPayStyle: {
    width: '100px',
    height: '100px',
  }
}

@connect(state => ({
  billing: state.billing.get('list').toJS(),
}), dispatch => bindActionCreators(billingAction, dispatch))
export default class App extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    dispatch: PropTypes.func,
  }

  constructor(){
    super()
    this.state = {
      activeIndex: 1,
      activeIndexSys: 0,
      showMorePay: true
    }
  }

  componentDidMount() {
    this.props.mobileDeposit()
  }


  clickPay(activeIndex, type) {
    this.setState({
      [type]: activeIndex,
    })
  }

  render() {
    const { presets, payment_methods } = this.props.billing;
    console.log(this.props.billing, 'this.props.billing')
    const { activeIndex, activeIndexSys, showMorePay } = this.state
    console.log(activeIndex, 'activeIndex')
    const navData = [{
        url: routeCodes.BILLING,
        name: '入金'
      }, {
      url: routeCodes.PAYHISTORY,
      name: '入金历史记录'
      }, {
        url: routeCodes.WITHDRAWAL,
        name: '出金'
      }
    ]
    return (
      <div className='App'>
        <TabNav navData={navData}/>
        <span>更高的地位 — 更多的特权</span>
        <div className="flex flex_wrap" style={style.payWrapper}>
          { presets.map((item, index) =>
            <PayItem
              key = {index}
              activeStyle={activeIndex === index ? activeStyle[index] : {}}
              onClick={() => this.clickPay(index, 'activeIndex')}
              title={item.title}
              desc={`$${item.amount.currencyId1} + 100%奖励`}
            />
          )}
        </div>
        <span>选择支付系统</span>
        <div className="flex flex_wrap" style={style.payWrapper}>
          { payment_methods.map((item, index) =>
            <PayItem
              itemStyle = {style.itemPayStyle}
              showMore={showMorePay}
              key = {index}
              imgSrc={item.img.split('.svg')[0]}
              activeStyle={activeIndexSys === index ? activeSysStyle[index] : {}}
              onClick={() => this.clickPay(index, 'activeIndexSys')}
              desc={item.name_translation}
            />
          )}
        </div>
      </div>
    );
  }
}