import React from 'react'
import DropMenu from './DropDownMenu/DropMenu'
import InfoDisplay from './InfoDisplay'
import "./Dashboard.scss";

const calculatePL = (trades, currentCoin) => {
  let costs = 0;
  let amounts = 0;
    for(let trade of trades) {
      if (trade.coinSymbol === currentCoin.symbol) {
        costs += trade.cost;
        amounts += trade.amount;
      }
    }
  let proLoss =(((currentCoin.last * amounts) - costs) /costs) * 100;
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
  return (priceTotal / tradesArray.length).toFixed(5);
}

const checkPl = (pL) => {
  if(pL.includes('+')) {
    console.log(pL)
    return true
  }
}

export default function Dashboard(props) {
  console.log(props)
  const { coin, trades, balance, timeframes, setTimeframe, selectedTimeframe} = props;
  // use selected coin's symbol to access balance 
  const baseTicker = coin.symbol.split('/')[0];
  const baseTickerBalance = balance[baseTicker].toFixed(4)
  const pL = calculatePL(trades, coin);
  const average = `$${averageCost(trades, coin)}`;

  return (
    <div className='dashboard-container'>
      <div className='timeframe'>
        <p className='timeframe'>Chart timeframe</p>
        <DropMenu options={timeframes} setData={setTimeframe} selectedVal={selectedTimeframe} />
      </div>
      <div className="info-container">
        <InfoDisplay infoHeader={'Symbol'} infoContent={coin.symbol} />
        <InfoDisplay infoHeader={'Current Price'} infoContent={`$${coin.last}`} />
        <InfoDisplay infoHeader={'Balance'} infoContent={`${baseTickerBalance || 0} ${baseTicker}`} />
        <div className={checkPl(pL) ? 'green' : 'red'}>
        <InfoDisplay infoHeader={'P&L'} infoContent={`${pL}%` || 0} />
        </div>
        <InfoDisplay infoHeader={'Average Price'} infoContent={average || 0}/>
      </div>
    </div>
  )
} 