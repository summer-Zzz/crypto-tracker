import React from 'react'
import DropMenu from './DropDownMenu/DropMenu'
import InfoDisplay from './InfoDisplay'
import "./Dashboard.scss";

export default function Dashboard(props) {
  
  return (
    <div className='dashboard-container'>
      <div className="menu-container">
        <lable className="option-lable">Select an Exchange:</lable>
        <DropMenu options={props.exchanges}/>
        <lable className="option-lable">Select a Timeframe:</lable>
        <DropMenu options={props.timeframes}/>
      </div>
      <div className="info-container">
        <InfoDisplay infoHeader={'Balance'} infoContent={props.balance.USDT}/>
        <InfoDisplay infoHeader={'P%L'} infoContent={'+25%'}/>
        <InfoDisplay infoHeader={'Average Price'} infoContent={"$53000"}/>
      </div>
    </div>
  )
} 