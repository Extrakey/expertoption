/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium'

@Radium
export default class App extends Component {

  showIm() {
    console.log('showim showim showim showim')
  }
  render() {
    return (
      <div className='App flex flex1'>
        <div className="flex flex1 column">
          <div className="flex flex1 column">
            <p>关于您账户的信息</p>
            <h5>test</h5>
            <p>账号</p>
            <h5>test</h5>
            <p>电子邮箱</p>
            <h5>test</h5>
          </div>
          <div className="flex flex1 column">
            <h5>客服支持</h5>
            <p>我们在线</p>
            <button className="button" onClick={::this.showIm}>在线客服</button>
          </div>
        </div>
        <div className="flex flex1 column">
            <h4>您有提问么？</h4>
            <p>姓名</p>
            <input type="text" value={'123'}/>
            <p>电子邮箱</p>
            <input type="text" value={'123@qq.com'}/>
            <p>消息</p>
            <textarea placeholder="消息"></textarea>
            <p>电话号码</p>
            <input type="text" placeholder="tel" value={'tel'}/>
        </div>
      </div>
    );
  }
}