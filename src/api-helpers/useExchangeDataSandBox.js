require('dotenv').config();
const ccxtpro = require ('ccxt.pro');
const axios = require('axios');

// SINGLE EXCHANGE INSTANTIATION  //

// const phemex = new ccxt.phemex({
//   apiKey: process.env.PHEMEX_ID,
//   secret: process.env.PHEMEX_SECRET,
//   enableRateLimit: true
// })

// phemex.setSandboxMode(true);  


// const bitmex = new ccxt.bitmex({
//   apiKey: process.env.BITMEX_ID,
//   secret: process.env.BITMEX_SECRET,
//   enableRateLimit: true
// })

// bitmex.setSandboxMode(true);

// const binance = new ccxt.binance({
//   apiKey: process.env.BNB_ID,
//   secret: process.env.BNB_SECRET, 
//   enableRateLimit: true
// })

const kraken = new ccxtpro.kraken({
  apiKey: process.env.KRAKEN_ID,
  secret: process.env.KRAKEN_SECRET,
  enableRateLimit: true
})


// USEREXCHANGE CLASS INSTANTIATION // 
// for each exchange a user adds to our app, we create a new userExchange class 

// HELPERS //

const fetchTrades = (exchangeRequestData) => {

  const {exchange, symbol, since} = exchangeRequestData

  return exchange.fetchMyTrades(symbol, since)
  .then(trades => {
    trades.forEach(trade => {
      console.log (
        'symbol', symbol,
        'time: ', trade.timestamp,
        'side: ', trade.side,     
        'order-type: ', trade.type,
        'price: ', trade.price, 
        'cost: ', trade.cost, 
        'amount: ', trade.amount
      )
    })
  }) 
  .catch(err => console.log(err))
}

// given an array of trades, calculates average cost of trades
const averageCost = (trades) => {
  const costTotal = 0;
  trades.forEach(trade => {
    costTotal += trade.price;
  })
  return costTotal / trades.length;
}

const fetchBalance = (exchange) => {

  exchange.fetchBalance()
  .then(balance => console.log(balance.total))
  .catch(err => console.log(err))

}

const getOHLCVData = (exchangeRequestData) => {

  const {exchange, symbol, timeframe, since} = exchangeRequestData

  exchange.fetchOHLCV(symbol, timeframe, since)
  .then(data => console.log(data))
  .catch(err => console.log(err))

}

// we get a % for the profit or loss of a single trade from this function
const calculatePL = (trades, currentPrice) => {
  let costs = 0;
  let amounts = 0;
    for(let trade of trades) {
      costs += trade.cost;
      amounts += trade.amount;
    }
  const proLoss =((currentPrice * amounts) - costs) /costs * 100;
  return proLoss;
}

// alternate method using CryptoCompare
// const fetchExchangeCoinsPrice = (exchange, currency) => {
//   // get symbols from exchange
//   exchange.fetchMarkets().then(markets => {
//     markets.forEach(market => {
//       // get prices for symbols in selected currency fomr crypto compare 
//       axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${market.base}&tsyms=${currency}&api_key=${process.env.CC_API}`)
//       .then(res => {
//         console.log(`${market.base} => ${res.data[currency]}`)
//       })
//       .catch(err => console.log(err))
//     })
//   })
// }

const fetchTickerPrice = (exchange, symbol) => {
  exchange.fetchTicker(symbol).then(ticker => {
    console.log(ticker.ask)
  })
}

const fetchExchangeCoins = (exchange, searchTicker) => {

  exchange.fetchTickers()
  .then(tickers => {
    const tickersArr = Object.keys(tickers);
    tickersArr.forEach(ticker => {
      // if (ticker.includes(searchTicker)) {
        const tickerInfo = tickers[ticker];
        console.log(
          'symbol: ', tickerInfo.symbol,
          'price: ', tickerInfo.ask,
          'change: ', tickerInfo.change,
          'change%: ', tickerInfo.percentage,
          'volume: ', tickerInfo.baseVolume,
        )
      // }
    })
  })
  .catch(err => console.log(err))
}


// const averagePL = (trades) => {
//   totalPercent = 0;
//   trades.forEach(trade, i => {
//     const pL = calculatePL()
//   })
// }
const allTime = () => new Date - 4000000000000000
const oneMonthAgo = () => new Date - 2629800000
const oneWeekAgo = () => new Date - 604800000
const oneDayAgo = () => new Date - 86400000
const oneMinuteAgo = () => new Date - 60000

// Object to mimic request coming from front-end ui 
const exchangeRequestData = {
  symbol: 'ALGO/USD',
  timeframe: '1m',
  since: allTime(),
  exchange: kraken
}

// CALL API SANDBOX FUNCTIONS // 

// // fetch all trades 
// fetchTrades(exchangeRequestData)
kraken.fetchMyTrades().then(res => {console.log(res)})

// // get average cost from all trades 
// const trades = fetchTrades(exchangeRequestData)
// console.log(trades);
// console.log(averageCost(trades))

// // fetch balance for user
// fetchBalance(kraken)

// binance.fetchBalance().then(balance => console.log(balance)).catch(err => console.log(err))

// fetch OHLCV data
// getOHLCVData(exchangeRequestData)

// fetch exchange coins
// fetchExchangeCoins(kraken)

// fetch single ticker price
// fetchTickerPrice(binance, 'BTC/USDT')
