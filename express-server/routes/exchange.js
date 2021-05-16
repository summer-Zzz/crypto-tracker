const ccxt = require('ccxt');
const express = require('express');
const router = express.Router();
const db = require('../db/index')
const { getUserExchanges } = require('../db/queries/queries')

router.get('/:exchange/:coin/:timeframe', function (req, res) {
  const { exchange, coin, timeframe} = req.params;
  const userId = 1;
  return getUserExchanges(userId)
  .then(exchanges => {
    console.log('route pinged')
    getExchangeInfo(exchanges, exchange, coin, timeframe).then(data => {
      return res.json(data);
    })
  })
  .catch(err => console.log(err));
})

// router.get('/', function (req, res) {
//   const userId = 1;
//   getUserExchanges(userId)
//   .then(exchanges => {
//     getDefaultExchangeInfo(exchanges).then(data => {
//       return res.send(data);
//     })
//   })
//   .catch(err => console.log(err));
// })

const oneMonthAgo = () => new Date - 2629800000
const oneWeekAgo = () => new Date - 604800000
const oneDayAgo = () => new Date - 86400000
const oneMinuteAgo = () => new Date - 60000

const getExchangeInfo = (exchangeData, exchangeSelection, coin, timeframe) => {
  const firstExchange = exchangeData[0];
  const {api_key, api_secret} = firstExchange; 
  const exchangeId = exchangeSelection;
  const exchangeClass = ccxt[exchangeId];
  const exchange = new exchangeClass({
    apiKey: api_key,
    secret: api_secret,
    enableRateLimit: true
  });
  const fetchTrades = exchange.fetchMyTrades();
  const fetchOHLCV = exchange.fetchOHLCV(coin, timeframe, oneMonthAgo());
  const fetchTicker = exchange.fetchTicker(coin);
  const fetchBalance = exchange.fetchBalance();
  const fetchCoins = exchange.fetchTickers(["BTC/CAD", "DOGE/USD", "ETH/USD", "ALGO/USD"]);
  const timeframes = exchange.timeframes;
  return Promise.all([fetchTrades, fetchOHLCV, fetchBalance, fetchCoins, timeframes, fetchTicker])
  .then(values => {
    const trades = formatTrades(values[0], coin);
    const candles = values[1];
    const balance = values[2];
    const coins = formatCoins(values[3]);
    const timeframes = values[4];
    const selectedCoin = values[5];
    return {
      trades,
      candles,
      balance,
      coins,
      selectedCoin,
      timeframes
    };
  })
  .catch(err => console.log(err))
}

const formatTrades = (trades, coin) => {
  const formattedTrades = []
  trades.forEach(trade => {
    if (trade.symbol.includes(coin)) {
      formattedTrades.push({
        symbol: trade.symbol,
        price: trade.price,
        amount: trade.amount,
        cost: trade.cost,
        time: trade.timestamp,
        orderType: trade.type,
        side: trade.side 
      })
    }
  })
  return formattedTrades;
}

const formatCoins = (coins, searchParam) => {
  const coinArray = []
  for (let coin in coins) {
    // if (coin.includes(searchParam)) {
      const coinData = coins[coin]
      const coinObject = {
        key: coinData.symbol,
        symbol: coinData.symbol,
        price: coinData.ask,
        change: coinData.change,
        changePercent: coinData.percentage,
        volume: coinData.baseVolume
      }
     coinArray.push(coinObject)
    // }
  }
  return coinArray;
}
// const getDefaultExchangeInfo = (exchangeData) => {
//   const firstExchange = exchangeData[0]
//   const {api_key, api_secret, exchange_name} = firstExchange; 
//   const exchangeId = exchange_name;
//   const exchangeClass = ccxt[exchangeId];
//   const exchange = new exchangeClass({
//     apiKey: api_key,
//     secret: api_secret,
//     enableRateLimit: true
//   })
  
//   exchange.setSandboxMode(true);
//   const fetchTrades = exchange.fetchMyTrades("BTC/USD", oneMonthAgo());
//   const fetchOHLCV = exchange.fetchOHLCV("BTC/USD", "1h", oneMonthAgo());
//   const fetchBalance = exchange.fetchBalance("BTC/USD");
//   const fetchCoins = exchange.fetchTickers(["BTC/USD", "ETH/USD", "DOGE/USDT", "ADA/USDT"]);
//   const timeframes = exchange.timeframes;
//   return Promise.all([fetchTrades, fetchOHLCV, fetchBalance, fetchCoins, timeframes])
//   .then(values => {
//     const trades = formatTrades(values[0]);
//     const candles = values[1];
//     const balance = values[2];
//     const coins = formatCoins(values[3]);
//     const timeframes = values[4];
//     return {
//       trades,
//       candles,
//       balance,
//       coins,
//       timeframes
//     };
//   })
//   .catch(err => console.log(err))
// }

// const getDefaultExchangeInfo = () => {
//   const binance = new ccxt.binance({
//     enableRateLimit: true
//   })
//   return binance.fetchTickers()
//   .then(values => {
//     const coins = formatCoins(values, "BTC");
//     const coin = coins[0];
//     return {
//       coins: coins,
//       coin: coin
//     }
//   })
// }




module.exports = router

