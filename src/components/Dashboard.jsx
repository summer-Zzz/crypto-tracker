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

const priceInfo = (coin) => {
  console.log(coin)
  const volume = coin.baseVolume.toFixed(2)
  const currentPrice = coin.last;
  const coinSymbol = coin.symbol;
  const vwap = coin.vwap.toFixed(2)
  return {currentPrice, coinSymbol, volume, vwap}
}

const averageCost = (trades, currentCoin) => {
  console.log('ttt', trades)
  let priceTotal = 0;
  let tradesArray = [];
  trades.forEach(trade => {
    if (trade.coinSymbol === currentCoin.symbol) {
      priceTotal += trade.price;  
      tradesArray.push(trade);
    }
  })
  console.log(tradesArray)

  return (priceTotal / tradesArray.length).toFixed(2);
}

const totalCost = (trades, currentCoin) => {
  let priceTotal = 0;
  trades.forEach(trade => {
    if (trade.coinSymbol === currentCoin.symbol) {
      priceTotal += trade.price;  
    }
  })
  return priceTotal;
}

export default function Dashboard(props) {
  const { coin, trades, balance, timeframes, setTimeframe, selectedTimeframe} = props;
  // use selected coin's symbol to access balance 
  const baseTicker = coin.symbol.split('/')[0];
  console.log(baseTicker)
  const baseTickerBalance = balance[baseTicker].total
  const pL = calculatePL(trades, coin);
  const average = `$${averageCost(trades, coin)}`;
  const total = `$${totalCost(trades, coin)}`

  const checkPl = (pL) => {
    if(pL.includes('+')) {
      console.log(pL)
      return true
    }
  }

  return (
    <div className='dashboard-container'>
      <div className='timeframe'>
        <p className='timeframe'>Chart timeframe</p>
        <DropMenu options={timeframes} setData={setTimeframe} selectedVal={selectedTimeframe} />
      </div>
      <div className="info-container">
        <div className='first-column'>
          <InfoDisplay infoHeader={'Symbol'} infoContent={priceInfo(coin).coinSymbol} />
          <InfoDisplay infoHeader={'Current Price'} infoContent={`$${priceInfo(coin).currentPrice}`} />
          <InfoDisplay infoHeader={'Balance'} infoContent={`${baseTickerBalance} ${baseTicker}`} />
          <div className={checkPl(pL) ? 'green' : 'red'}>
            <InfoDisplay infoHeader={'P&L'} infoContent={`${pL}%`} />
          </div>
        </div>
        <div className='second-column'>
          <InfoDisplay infoHeader={'Volume'} infoContent={priceInfo(coin).volume}/>
          <InfoDisplay infoHeader={'VWAP'} infoContent={priceInfo(coin).vwap}/>
          <InfoDisplay infoHeader={'Average Price'} infoContent={average}/>
          <InfoDisplay infoHeader={'Total Cost'} infoContent={total}/>
        </div>
      </div>
    </div>
  )
} 