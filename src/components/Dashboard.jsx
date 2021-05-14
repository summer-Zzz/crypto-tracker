import React from 'react'
import DropMenu from './DropDownMenu/DropMenu'
import InfoDisplay from './InfoDisplay'
import "./Dashboard.scss";

const calculatePL = (trades, currentPrice) => {
  let costs = 0;
  let amounts = 0;
    for(let trade of trades) {
      costs += trade.cost;
      amounts += trade.amount;
    }
  const proLoss = ((currentPrice * amounts) - costs) /costs * 100;
  return proLoss;
}

const averageCost = (trades) => {
  let costTotal = 0;
  trades.forEach(trade => {
    costTotal += trade.cost;
  })
  return costTotal / trades.length;
}

export default function Dashboard(props) {
  const { coin, trades, balance, exchanges, timeframes, currencies } = props;
  // use selected coin's symbol to access balance 
  const baseTicker = coin.symbol.split('/')[0];
  const baseTickerBalance = balance[baseTicker].total;
  const pL = calculatePL(trades, coin.price);
  const average = `$${averageCost(trades)}`;

  return (
    <div className='dashboard-container'>
      <div className="menu-container">
        <lable className="option-lable">Select an Exchange:</lable>
        <DropMenu options={exchanges}/>
        <lable className="option-lable">Select a Timeframe:</lable>
        <DropMenu options={timeframes}/>
      </div>
      <div className="info-container">
        <InfoDisplay infoHeader={'Balance'} infoContent={baseTickerBalance} />
        <InfoDisplay infoHeader={'P&L'} infoContent={pL.toFixed(2)}/>
        <InfoDisplay infoHeader={'Average Price'} infoContent={average}/>
      </div>
    </div>
  )
} 