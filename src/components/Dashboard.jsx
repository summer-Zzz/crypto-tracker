import React from 'react'
import DropMenu from './DropDownMenu/DropMenu'
import InfoDisplay from './InfoDisplay'
// import TradeTable from './TradeTable'
// import CoinTable from './CoinTable'

export default function Dashboard(props) {
  
  return (
    <div className='dashboard-container'>
      <div className="menu-container">
        <DropMenu options={props.exchanges}/>
        <DropMenu options={props.timeframes}/>
        <DropMenu options={props.currencies}/>
      </div>
      <div className="info-container">
        <InfoDisplay infoHeader={'Balance'} infoContent={props.balance.USDT}/>
        <InfoDisplay infoHeader={'P%L'} infoContent={'+25%'}/>
        <InfoDisplay infoHeader={'Average Price'} infoContent={"$53000"}/>
      </div>
      {/* <div className="trade-container">
        <TradeTable rows={props.trades}/>
      </div> */}
    </div>
  )

} 