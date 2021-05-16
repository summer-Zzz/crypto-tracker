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
      console.log(data.trades);
      return res.status(200).json(data);
    })
  })
  .catch(err => console.log(err));
})

// Get transaction of Trade Table - DB
router.get('/:exchange/:tradetable', function (req, res) {
  const { exchange, account_id} = req.params;
  const userId = 1;
  getUserTransactions(userId)
  .then(transactions => {
    console.log('route pinged')
    console.log('formattedData: ', transactions)
    return res.send(transactions);
  })
  .catch(err => console.log(err));
})

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
  const fetchCoins = exchange.fetchTickers(["BTC/CAD", "DOGE/USD", "ETH/USD", "ALGO/USD", "XRP/USD"]);
  const timeframes = exchange.timeframes;
  return Promise.all([fetchTrades, fetchOHLCV, fetchBalance, fetchCoins, timeframes, fetchTicker])
  .then(values => {
    const trades = formatTrades(values[0]);
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

const formatTrades = (trades) => {
  const formattedTrades = []
  trades.forEach(trade => {
    formattedTrades.push({
      cymbal: trade.symbol,
      price: trade.price,
      amount: trade.amount,
      cost: trade.cost,
      time: trade.timestamp,
      orderType: trade.type,
      side: trade.side 
    })
  })
  return formattedTrades;
}


const formatCoins = (coins) => {
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




// Split Asset:
const splitAsset = (symbol) => {
  const coin = [];
  coin.push(symbol.split("/")[0]);
  coin.push(symbol.split("/")[1]);
  return (coin);
}

// Retreive trade transaction - API
router.get('/exchange/trades', (req, res) => {
  fetchTrades()
    .then((tradeData) => res.json(tradeData))
    .catch((err) => res.json({
      error: err.message
  }));
});

// Retreive trade transaction - DB
router.get('/exchange/trades', (req, res) => {
  getUserExchangeTransactions (userId)
    .then((tradeData) => res.json(tradeData))
    console.log(tradeData)
    .catch((err) => res.json({
      error: err.message
  }));
});

// Add new trade transaction
router.get('/exchange/trades/new', (req, res) => {
  const { account_id, exchange } = req.body;
  console.log (account_id, exchange)
  fetchTrades(account_id, exchange)
    .then(tradesData => {
      if (!tradesData) {
        res.json({
          msg: 'Sorry, No transactions'
        });
      } else {
        console.log (tradesData)
        return addUserTransactions(formatTrades(trades))
      }
    })
      .then(newTradeTxn => res.json(newTradeTxn))
      .catch(err => res.json({
        error: err.message
      }));
})

module.exports = router

module.exports = router