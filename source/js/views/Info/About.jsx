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

    const {children} = this.props
    return (
      <div className='flex column flex1'>
        <p>ExpertOption trading platform combines the top developments in trading on financial markets with high quality customer service. Many specialists are involved in the process of development of an ideal platform to gain profit from trading in binary options on all available markets. Having eliminated all inconveniences for a trader we succeeded in creating a comfortable work environment that serves not only to earn profit, but to communicate with like-minded individuals obtaining new knowledge and using the best ideas developed by the Company experts to improve one’s strategy.</p>
        <p>The desktop of our hi-tech but simple and very comfortable platform with an intuitive interface displays all tools necessary to perform technical and fundamental analysis. A prompt execution of transactions ensures entering the market at a price planned by the user.</p>
      </div>
    );
  }
}