/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

@Radium
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div className='App flex flex1'>
        <div className="flex1">
          <h5>625-781-905</h5>
          <p>账号 625-781-905</p>
          <h5>地址</h5>
          <p>国家</p>
          <input type="text" placeholder="hk"/>
          <p>城市</p>
          <input type="text" placeholder="hk"/>
          <p>街道地址</p>
          <input type="text" placeholder="hk"/>
        </div>
        <div className="flex1">
          <h5>个人资料</h5>
          <p>性别</p>
          <select name="" id="">
            <option value="0">男</option>
            <option value="1">女</option>
          </select>
          <p>生日</p>
          <select name="" id="">
            <option value="0">男</option>
          </select>
          <select name="" id="">
            <option value="0">男</option>
          </select>
          <select name="" id="">
            <option value="0">男</option>
          </select>
          <p>联系电话</p>
          <input type="text"/>
          <input type="text"/>
          <p>电子邮箱</p>
          <input type="text" value="229142144@qq.com"/>
          <button className="button">保存更改</button>
        </div>
        <div className="flex1">
          <h5>头像</h5>
          <input type="file"/>
          <button className="button">上传</button>
        </div>
      </div>
    );
  }
}