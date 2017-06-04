/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import * as analyticsAction from 'actions/analytics';
import Radium from 'radium'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'Recharts'

@connect(state => ({
  mapData: state.analytics.get('mapData').toJS(),
}), dispatch => bindActionCreators(analyticsAction, dispatch))
@Radium
export default class Stocks extends Component {

  constructor(){
    super()
    this.state={
      dotOnIndex: 0
    }
  }

  componentDidMount() {
    this.props.getMap()
  }

  dotOn(item, index) {
    this.setState({
      dotOnIndex: index,
    })
  }

  render() {
    const {mapData} = this.props
    const {dotOnIndex} = this.state
    const des = mapData[dotOnIndex] ? mapData[dotOnIndex].translated : {}
    mapData.forEach(item => {
      item.coordX = +item.coordX
      item.coordY = +item.coordY
    })
    return (
      <div className="flex">
        <ScatterChart width={500} height={400} margin={{top: 60, right: 20, bottom: 20, left: 20}}>
          <XAxis hide tick={false} dataKey={'coordX'} interval={0} tickLine={false} axisLine={false}/>
          <YAxis hide tick={false} dataKey={'coordY'} interval={0} tickLine={false} axisLine={false}/>
          <Scatter name='A map' className="scatter-point" data={mapData} stroke='red'  fill='#8884d8' onClick={::this.dotOn}/>
          <CartesianGrid horizontal={false} vertical={false} />
        </ScatterChart>
        <div>
          <h5>{des.NAME}</h5>
          <p>{des.FOUNDED}</p>
          <p>{des.FOUNDED}</p>
        </div>
      </div>
    );
  }
}