require('dotenv').config();
const ccxt = require ('ccxt');

// initialize test exchanges 
const phemex = new ccxt.phemex({
  apiKey: process.env.PHEMEX_API_PUBLIC,
  secret: process.env.PHEMEX_API_SECRET,
  enableRateLimit: true
})

phemex.setSandboxMode(true)

const bitmex = new ccxt.bitmex({
  apiKey: process.env.BITMEX_API_PUBLIC,
  secret: process.env.BITMEX_API_SECRET,
  enableRateLimit: true
})

bitmex.setSandboxMode(true)

// HELPERS

const oneMonthAgo = () => new Date - 2629800000
const oneWeekAgo = () => new Date - 604800000
const oneDayAgo = () => new Date - 86400000
const oneMinuteAgo = () => new Date - 60000

export default function getExchangeData() {

  const initializeExchange = (exchange, apiKey, secret) => {
    // encryp api keys 
    // store api keys in db
    // initialize exchange
    const newExchange = new ccxt[exchange]({
      apiKey,
      secret
    })
  }
  
  const fetchTrades = (exchange, dateSince, symbol) => {
    const dateRange = new Date(dateSince)
    exchange.fetchMyTrades(symbol, dateRange)
    .then(trades => console.log(trades))
    .catch(err => console.log(err))
  
  }
  
  const fetchBalance = (exchange) => {
    exchange.fetchBalance()
    .then(balance => console.log(balance))
    .catch(err => console.log(err))
  }

  const calculatePL = (costPrice, sellPrice) => {
    if (costPrice > sellPrice) {
      return (costPrice - sellPrice) / costPrice * 100;
    } else {
      return (sellPrice - costPrice) / costPrice * 100;
    }
  }
  
  const averagePL = (trades) => {
     
    for (let trade of trades) {
      [entry, exit] = trade
      calculatePL(entry, exit)
    }
  }

  // Object to mimic request coming from front-end ui 
  // const chartDataRequest = {
  //   exchange: phemex,
  //   symbol: 'BTC/USDT',
  //   timeframe: '1m',
  //   since: oneDayAgo() 
  // }

  const getOHLCVData = (chartDataRequest) => {

    const {exchange, symbol, timeframe, since} = chartDataRequest
  
    exchange.fetchOHLCV(symbol, timeframe, since)
    .then(data => console.log(data))
    .catch(err => console.log(err))
  
  }
  
  return { initializeExchange, fetchBalance, fetchTrades }
}