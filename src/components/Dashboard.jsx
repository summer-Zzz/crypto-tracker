import React from 'react'
import DropMenu from './DropDownMenu'
import InfoDisplay from './InfoDisplay'
import TradeTable from './TradeTable'
import CoinTable from './CoinTable'

export default function Dashboard(props) {

  return (
    <div className='dashboard-container'>
      <div className="chart-container">
        <Chart />
      </div>
      <div className="menu-container">
        <DropMenu options={props.exchanges}/>
        <DropMenu options={props.timeframes}/>
        <DropMenu options={props.currencies}/>
      </div>
      <div className="info-container">
        <InfoDisplay infoHeader={'Balance'} infoContent={'0.85452'}/>
        <InfoDisplay infoHeader={'P%L'} infoContent={'+25%'}/>
      </div>
      <div className="trade-container">
        <TradeTable rows={props.TradeData}/>
      </div>
      <div className="coin-container">
        <CoinTable rows={props.CoinData}/>
      </div>
    </div>
  )

}