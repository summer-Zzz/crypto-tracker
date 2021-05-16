import React from 'react'
import DropMenu from './DropDownMenu/DropMenu'
import InfoDisplay from './InfoDisplay'
import "./Dashboard.scss";

const calculatePL = (trades, currentPrice) => {
  let costs = 0;
  let amounts = 0;
    for(let trade of trades) {
      // if (trade.)
      costs += trade.cost;
      amounts += trade.amount;
    }
  const proLoss =((currentPrice * amounts) - costs) /costs * 100;
  return proLoss;
}

const averageCost = (trades, currentCoin) => {
  let priceTotal = 0;
  let tradesArray = [];
  trades.forEach(trade => {
    if (trade.symbol = currentCoin.symbol) {
      priceTotal += trade.price;  
      tradesArray.push(trade)
    }
  })
  return priceTotal / tradesArray.length;
}

const formatTimeframes = (timeframes) => {
  const timeFrameArr = [] 
  for (let tf in timeframes) {
    timeFrameArr.push({
      id: tf,
      name: tf
    })
  }
  return timeFrameArr
}

export default function Dashboard(props) {
  const { coin, trades, balance, exchanges, timeframes, currencies } = props;
  // use selected coin's symbol to access balance 
  const baseTicker = coin.symbol.split('/')[0];
  const baseTickerBalance = balance[baseTicker].total
  const pL = calculatePL(trades, coin.last);
  const average = `$${averageCost(trades, coin)}`;
  const formattedTimeframes = formatTimeframes(timeframes);
 
  return (
    <div className='dashboard-container'>
      <div className="menu-container">
        <label>Pick your exchange</label>
        <DropMenu options={exchanges} setData={props.setExchange} selectedVal={props.selectedExchange}/>
        <label>Chart timeframe</label>
        <DropMenu options={formattedTimeframes} setData={props.setTimeframe} selectedVal={props.selectedTimeframe}/>
      </div>
      <div className="info-container">
        <InfoDisplay infoHeader={'Balance'} infoContent={`${baseTickerBalance} ${baseTicker}`} />
        <InfoDisplay infoHeader={'P&L'} infoContent={`${pL.toFixed(2)}%`}/>
        <InfoDisplay infoHeader={'Average Price'} infoContent={average}/>
      </div>
    </div>
  )
} 