require('dotenv').config();
const ccxt = require ('ccxt');

// EXCHANGE INSTANTIATION  //

const phemex = new ccxt.phemex({
  apiKey: process.env.PHEMEX_ID,
  secret: process.env.PHEMEX_SECRET,
  enableRateLimit: true
})

phemex.setSandboxMode(true)

const bitmex = new ccxt.bitmex({
  apiKey: process.env.BITMEX_API_PUBLIC,
  secret: process.env.BITMEX_API_SECRET,
  enableRateLimit: true
})

bitmex.setSandboxMode(true)

// HELPERS //

// accepts a date string eg: 'April 10, 2016 23:15:30'
const fetchTrades = (exchangeRequestData) => {

  const {exchange, symbol, timeframe, since} = exchangeRequestData

  return exchange.fetchMyTrades(symbol, since)
  .then(trades => {
    trades.forEach(trade => {
      console.log (
        'price: ', trade.price, 
        'amount: ', trade.amount, 
        'cost: ', trade.cost, 
        'time: ', trade.timestamp,
        'symbol: ', trade.info.symbol,
        'order-type: ', trade.type,
        'side: ', trade.side     
      )
    })
  }) 
  .catch(err => console.log(err))
}

const averageCost = (trades) => {
  const costTotal = 0;
  trades.forEach(trade => {
    costTotal += trade.price;
  })
  return costTotal / trades.length;
}

const fetchBalance = (exchange) => {

  exchange.fetchBalance()
  .then(balance => console.log(balance))
  .catch(err => console.log(err))

}

const getOHLCVData = (exchangeRequestData) => {

  const {exchange, symbol, timeframe, since} = exchangeRequestData

  exchange.fetchOHLCV(symbol, timeframe, since)
  .then(data => console.log(data))
  .catch(err => console.log(err))

}

const calculatePL = (costPrice, currentPrice) => {
  if (costPrice > currentPrice) {
    return (costPrice - currentPrice) / costPrice * 100;
  } else {
    return (currentPrice - costPrice) / costPrice * 100;
  }
}

// const averagePL = (trades) => {
//   totalPercent = 0;
//   trades.forEach(trade, i => {
//     const pL = calculatePL()
//   })
// }

const oneMonthAgo = () => new Date - 2629800000
const oneWeekAgo = () => new Date - 604800000
const oneDayAgo = () => new Date - 86400000
const oneMinuteAgo = () => new Date - 60000

// Object to mimic request coming from front-end ui 
const exchangeRequestData = {
  exchange: phemex,
  symbol: 'BTC/USDT',
  timeframe: '1m',
  since: oneDayAgo()
}

// CALL API FUNCTIONS // 

// fetch all trades 
// fetchTrades(exchangeRequestData)

// get avergge cost from all trades 
const trades = fetchTrades(exchangeRequestData)
console.log(trades);
// console.log(averageCost(trades))

// fetch balance for user
// fetchBalance(phemex)

// fetch OHLCV data
// getOHLCVData(exchangeRequestData)