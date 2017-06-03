/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as analyticsAction from 'actions/analytics';
import PropTypes from 'prop-types';
import { routeCodes } from '../../routes';
import TabNav from 'components/Global/TabNav';
import Radium from 'radium'

const style = {
  tableRow: {
    height: '40px',
    overflow: 'hidden',
    borderBottom: '1px solid #414a60',
  },
  tableLaber: {
    height: '40px',
    lineHeight: '40px',
    textAlign: 'center',
    float: 'left',
    width: '150px',
    borderRight: '1px solid #414a60',
  },
  tableValue: {
    position: 'relative',
    overflow: 'hidden',
    marginLeft: '150px'
  },
  tableItem: {
    height: '40px',
    borderRight: '1px solid #414a60',
    lineHeight: '40px',
    boxSizing: 'border-box',
    float: 'left',
    position: 'relative',
    width: '4.16666666666%',
    textAlign: 'center'
  },
  timescale: {
    zIndex: '1',
    opacity: '1',
    position: 'absolute',
    top: '50%',
    height: '12px',
    marginTop: '-6px',
    borderRadius: '10px',
    background: '#3099f5',
  }
}

@Radium
@connect(state => ({
  analytics: state.analytics.get('scheduleData').toJS(),
}), dispatch => bindActionCreators(analyticsAction, dispatch))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  constructor(){
    super()
    this.state = {
      scheduleDate: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    }
  }

  componentDidMount() {
    this.props.getSchedule()
  }

  render() {
    console.log(this.props.analytics)
    return (
      <div className='flex column flex1'>
        <div className="schedule-table">
          <div className="row heading" style={style.tableRow}>
            <div className="label" style={style.tableLaber}>Asset</div>
            <div className="values" style={style.tableValue}>
              {this.state.scheduleDate.map(item => {
                return (
                  <div className="item item-heading" style={style.tableItem}>{item}</div>
                )
              })}
            </div>
          </div>
        </div>
        {this.props.analytics.map(item => {
          return (
            <div className="row" style={style.tableRow}>
              <div className="label" style={style.tableLaber}>{item.name}</div>
              <div className="values" style={style.tableValue}>
                <div className="timescale" style={{ ...style.timescale, left: `${item.startTime*100/24}%`, width: `${(item.endTime-item.startTime+1)*100/24}%`}}></div>
                {this.state.scheduleDate.map(item => {
                  return (
                    <div className="item" style={style.tableItem}></div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}