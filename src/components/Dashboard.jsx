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
  let costTotal = 0;
  trades.forEach(trade => {
    if (trade.coinSymbol === currentCoin.symbol) {
      costTotal += trade.cost;  
    }
  })
  return costTotal;
}

const time = [
  {
    id: 1,
    name: '1m'
  },
  {
    id: 2,
    name: '5m'
  },
  {
    id: 3,
    name: '30m'
  },
  {
    id: 4,
    name: '1hr'
  },
  {
    id: 5,
    name: '12hr'
  },
  {
    id: 6,
    name: '1d'
  },
  {
    id: 7,
    name: '1w'
  },
  {
    id: 8,
    name: '2w'
  },
  {
    id: 9,
    name: '1mo'
  },
  {
    id: 10,
    name: '6mo'
  }
]

export default function Dashboard(props) {
  const { coin, trades, balance, timeframes, setTimeframe, selectedTimeframe, setTime, selectedTime} = props;
  // use selected coin's symbol to access balance 
  const baseTicker = coin.symbol.split('/')[0];
  const baseTickerBalance = balance[baseTicker].toFixed(4)
  const pL = calculatePL(trades, coin);
  const average = `$${averageCost(trades, coin)}`;
  const total = `$${totalCost(trades, coin).toFixed(2)}`

  const checkPl = (pL) => {
    if(pL.includes('+')) {
      console.log(pL)
      return true
    }
  }

  return (
    <div className="dashboard-all-container">
      <div className='dashboard-container'>
        <div className="time-container">
          <div className='timeframe'>
            <p className='timeframe'>Candle Length</p>
            <DropMenu options={timeframes} setData={setTimeframe} selectedVal={selectedTimeframe} />
            <p className='timeframe'>Chart timeframe</p>
            <DropMenu options={time} setData={setTime} selectedVal={selectedTime} />
          </div>
        </div>
        <div className="info-container">
          <div className='first-column'>
          <InfoDisplay infoHeader={'Symbol'} infoContent={coin.symbol} />
            <InfoDisplay infoHeader={'Current Price'} infoContent={`$${coin.last}`} />
            <InfoDisplay infoHeader={'Balance'} infoContent={`${baseTickerBalance || 0} ${baseTicker}`} />
            <div className={checkPl(pL) ? 'green' : 'red'}>
            <InfoDisplay infoHeader={'P&L'} infoContent={`${pL}%` || 0} />
            </div>
          </div>
          <div className='second-column'>
            <InfoDisplay infoHeader={'Volume'} infoContent={coin.baseVolume.toFixed(2)}/>
            <InfoDisplay infoHeader={'Average Price'} infoContent={average}/>
            <InfoDisplay infoHeader={'VWAP'} infoContent={coin.vwap}/>
            <InfoDisplay infoHeader={'Total Cost'} infoContent={total}/>
          </div>
        </div>
      </div>
    </div>
  )
} 