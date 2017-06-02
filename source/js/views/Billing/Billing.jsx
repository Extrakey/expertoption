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
import Info from './Info';
import Bar from './Bar';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

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
    width: '500px'
  },
  itemPayStyle: {
    width: '100px',
    height: '100px',
  },
  otherButton: {
    margin: '1rem',
    padding: '1rem',
    textAlign: 'center',
    border: '1px solid #000',
    width: '100px',
    height: '100px',
  }
}

@connect(state => ({
  billing: state.billing.get('list').toJS(),
}), dispatch => bindActionCreators(billingAction, dispatch))
@Radium
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
      showMorePay: true,
      currencyOn: 0,
      money: 1000,
      haveBonus: true,
      methodsColor: 'gold',
      percent: 3,
      moreStatus: false
    }
  }

  componentDidMount() {
    this.props.mobileDeposit()
  }


  clickPay(activeIndex, type, item) {
    this.setState({
      [type]: activeIndex,
    })

    if (type === 'activeIndex') {
      this.setState({
        money: item.amount.currencyId1,
        methodsColor: item.name,
        percent: item.index,
      })
    }
  }

  morePayMethod() {
    this.setState({
      showMorePay: false
    })
  }

  changeCurrency(event) {
    const { currency } = this.props.billing
    currency.forEach((item, index) => {
      if (item.iso_code === event.target.value) {
        this.setState({
          currencyOn: index
        })
      }
    })
  }

  changeBonus(event) {
    this.setState({
      haveBonus: event.target.checked
    })
  }

  toggleStatus() {
    if (!this.state.moreStatus) {
      this.props.pricing()
    }
    this.setState({
      moreStatus: !this.state.moreStatus
    })
  }


  render() {
    const { presets, payment_methods, payment_methods_less, currency } = this.props.billing;
    const { activeIndex, activeIndexSys, showMorePay, currencyOn, money, haveBonus, methodsColor, percent, moreStatus } = this.state
    const payment_methods_list = showMorePay ? payment_methods_less : payment_methods
    return (
      <div className="flex">
        <div className={moreStatus ? 'hide' : 'showClass'}>
          <span onClick={::this.toggleStatus}>更高的地位 — 更多的特权</span>
          <div className="flex flex_wrap" style={style.payWrapper}>
            { presets.map((item, index) =>
              <PayItem
                key = {index}
                activeStyle={activeIndex === index ? activeStyle[index] : {}}
                onClick={() => this.clickPay(index, 'activeIndex', item)}
                title={item.title}
                desc={`$${item.amount.currencyId1} + 100%奖励`}/>)}
          </div>
          <span>选择支付系统</span>
          <div className="flex flex_wrap" style={ style.payWrapper}>
            { payment_methods_list.map((item, index) =>
              <PayItem
                itemStyle = {style.itemPayStyle}
                key = {index}
                imgSrc={item.img.split('.svg')[0]}
                activeStyle={activeIndexSys === index ? activeSysStyle[index] : {}}
                onClick={() => this.clickPay(index, 'activeIndexSys')}
                desc={item.name_translation}/>)}
            { showMorePay && <div style={style.otherButton} onClick={::this.morePayMethod}>其他</div> }
          </div>
          <div>
            <span>选择金额和货币类型</span>
            <span>奖励</span>
            <span>可获得</span>
            <label htmlFor="changeBonus"><input id="changeBonus" type="checkbox" checked={haveBonus} onChange={::this.changeBonus}/> 获得奖金</label>
          </div>
          <div>
            <input type="text" value={currency[currencyOn] ? currency[currencyOn].min_deposit : 0}/>
            <select name="" id="" onChange={::this.changeCurrency}>
              {currency.map(item => {
                return <option value={item.name}>{item.sign + item.iso_code}</option>
              })}
            </select>
            <input type="text" value={haveBonus ? '100%' : 0 }/>
            <span>{currency[currencyOn] ? currency[currencyOn].min_deposit : 0}</span>
          </div>
          <button className="button" style={activeStyle[activeIndex]}> 继续</button>
          <div>账户等级 <span>存入${money}，获得GOLD地位</span></div>
          <Bar color={methodsColor} percent={percent}/>
        </div>
        <div className={moreStatus ? 'showClass' : 'hide'}>
          <span onClick={::this.toggleStatus}>back</span>
          <div></div>
        </div>
        <Info />
      </div>
    );
  }
}