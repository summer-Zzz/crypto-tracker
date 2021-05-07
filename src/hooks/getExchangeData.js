require('dotenv').config();
const ccxt = require ('ccxt');

// SINGLE EXCHANGE INSTANTIATION  //

const phemex = new ccxt.phemex({
  apiKey: process.env.PHEMEX_API_PUBLIC,
  secret: process.env.PHEMEX_API_SECRET,
  enableRateLimit: true
})

phemex.setSandboxMode(true)

// const bitmex = new ccxt.bitmex({
//   apiKey: process.env.BITMEX_API_PUBLIC,
//   secret: process.env.BITMEX_API_SECRET,
//   enableRateLimit: true
// })

// bitmex.setSandboxMode(true)

// USEREXCHANGE CLASS INSTANTIATION // 
// for each exchange a user adds to our app, we create a new userExchange class 

export class userExchange {
 
  constructor(exchange, apiKey, secret) {
    this.exchangeId = exchange,
    this.exchangeClass = ccxt[this.exchangeId],
    this.exchange = new this.exchangeClass ({
      apiKey,
      secret,
      enableRateLimit: true
    })
    this.exchange.setSandboxMode(true)
  }

  // set get method?
  fetchBalance = (symbol = "") => {
    this.exchange.fetchBalance(symbol)
    .then(balance => console.log(balance))
    .catch(err => console.log(err))
  }

  fetchTrades = (exchangeRequestData) => {
    const {symbol, since} = exchangeRequestData
  
    this.exchange.fetchMyTrades(symbol, since)
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

  averageCost = (exchangeRequestData) => {
    const {symbol, since} = exchangeRequestData
    
    let costTotal = 0;
    this.exchange.fetchMyTrades(symbol, since)
    .then(trades => {
      trades.forEach(trade => {
        costTotal += trade.price;
      })
      // average cost
      console.log(costTotal / trades.length);
    })
    .catch(err => console.log(err))
  }

  calculatePL(trades) {
    // for each trade
    // if trade is a buy, 
    // compare it to current price of asset and calculate P/L
    // if trade is a sell, compare 
  }

  getOHLCVData(chartDataRequest) {
    const { symbol, timeframe, since } = chartDataRequest
  
    this.exchange.fetchOHLCV(symbol, timeframe, since)
    .then(data => console.log(data))
    .catch(err => console.log(err))
  
  }

}

// HELPERS

const oneMonthAgo = () => new Date - 2629800000
const oneWeekAgo = () => new Date - 604800000
const oneDayAgo = () => new Date - 86400000
const oneMinuteAgo = () => new Date - 60000

  //******* TEST DATA *******//
  const chartDataRequest = {
    exchange: phemex,
    symbol: 'BTC/USDT',
    timeframe: '1m',
    since: oneDayAgo() 
  }

