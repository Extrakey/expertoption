/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'
import Bar from 'views/Billing/Bar'
import NoData from 'components/Global/NoData'

@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const navData = [{
        url: routeCodes.BILLING,
        name: '个人资料'
      }, {
      url: routeCodes.PAYHISTORY,
      name: '交易日志'
      }, {
        url: routeCodes.WITHDRAWAL,
        name: '编辑个人资料'
      }
    ]
    const {children} = this.props
    return (
      <div className='App flex column flex1'>
        <div className="flex flex1">
          <div className="flex flex1 column">
            <Link to={routeCodes.EDIT}><button className="button">去编辑</button></Link>
            <p>625-781-905</p>
            <p>$0</p>
            <Bar color={'vip'} percent={3} />
          </div>
          <div className="flex flex1 column">
            <h5>Personal info</h5>
            <p>229142144@qq.com</p>
            <p>625-781-905</p>
            <p>beijing</p>
          </div>
          <div className="flex flex1 column">
            <h5>Assets chart</h5>
            <NoData linkTo={routeCodes.APP} buttonText="交易" title="资产表显示了您交易的资产"/>
          </div>
          <div className="flex flex1"></div>
        </div>
        <div className="flex flex1">
          <div className="flex flex1 column">
            <h5>交易日志  <Link to={routeCodes.DEALS}>更多</Link></h5>
            <NoData linkTo={routeCodes.APP} buttonText="交易" title="资产表显示了您交易的资产"/>
          </div>
          <div className="flex flex1">
            <div className="flex flex1 column">
              <h5>交易量</h5>
              <NoData linkTo={routeCodes.APP} buttonText="交易" title="资产表显示了您交易的资产"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}