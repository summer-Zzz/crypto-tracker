import React from 'react'
import DropMenu from './DropDownMenu/DropMenu'
import InfoDisplay from './InfoDisplay'
import "./Dashboard.scss";

const calculatePL = (trades, currentPrice) => {
  let costs = 0;
  let amounts = 0;
    for(let trade of trades) {
      if (trade.coinSymbol === currentPrice.symbol) {
        costs += trade.cost;
        amounts += trade.amount;
      }
    }
  let proLoss =(((currentPrice.last * amounts) - costs) /costs) * 100;
  return((proLoss.toFixed(2) > 0) ? "+" + proLoss.toFixed(2) : proLoss.toFixed(2));
}

const averageCost = (trades, currentCoin) => {
  let priceTotal = 0;
  let tradesArray = [];
  trades.forEach(trade => {
    if (trade.coinSymbol === currentCoin.symbol) {
      priceTotal += trade.price;  
      tradesArray.push(trade);
    }
  })
  return (priceTotal / tradesArray.length).toFixed(2);
}

export default function Dashboard(props) {
  const { coin, trades, balance, timeframes, setTimeframe, selectedTimeframe} = props;
  // use selected coin's symbol to access balance 
  const baseTicker = coin.symbol.split('/')[0];
  const baseTickerBalance = balance[baseTicker].total
  const pL = calculatePL(trades, coin);
  const average = `$${averageCost(trades, coin)}`;
 
  return (
    <div className='dashboard-container'>
      <div className='timeframe'>
        <label>Chart timeframe</label>
        <DropMenu options={timeframes} setData={setTimeframe} selectedVal={selectedTimeframe} />
      </div>
      <div className="info-container">
        <InfoDisplay infoHeader={'Balance'} infoContent={`${baseTickerBalance} ${baseTicker}`} />
        <InfoDisplay infoHeader={'P&L'} infoContent={`${pL}%`}/>
        <InfoDisplay infoHeader={'Average Price'} infoContent={average}/>
      </div>
    </div>
  )
} 