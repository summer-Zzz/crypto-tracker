const ccxt = require('ccxt');
const express = require('express');
const router = express.Router();
const db = require('../db/index')
const { getUserExchanges } = require('../db/queries/queries')

// const exchangeData = {
//   exchanges: [
//     {
//       id: 1,
//       name: 'kraken',
//     },
//     {
//       id: 2,
//       name: 'binance',
//     },
//     {
//       id: 3,
//       name: 'phemex',
//     },
//     {
//       id: 4,
//       name: 'bitmex',
//     }
//   ],
//   balance: {
//     BTC: 0.25588023,
//     USDT: 17422.2849681,
//     ETH: 0.19851129,
//     XRP: 70.929,
//     LINK: 0,
//     XTZ: 0,
//     LTC: 0,
//     ADA: 0,
//     TRX: 0,
//     ONT: 0,
//     BCH: 0,
//     NEO: 0,
//     EOS: 0,
//     COMP: 0,
//     YFI: 0,
//     ALGO: 0,
//     DOT: 0,
//     UNI: 0,
//     AAVE: 0,
//     DOGE: 324.675,
//     BAT: 0,
//     CHZ: 0,
//     MANA: 0,
//     ENJ: 0,
//     SUSHI: 0,
//     SNX: 0,
//     GRT: 0,
//     MKR: 0,
//     VET: 0,
//     ZEC: 0,
//     FIL: 0,
//     KSM: 0,
//     XMR: 0,
//     QTUM: 0,
//     XLM: 0,
//     ATOM: 0,
//     LUNA: 0
//   },
//   coins: [
//     {
//     id: 1, 
//     coinLogo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=010",
//     coinName: "Bitcoin",
//     currentPrice: 59203.82,
//     dayPerformance: "2.3%",
//     weekPerformance: "10%",
//     marketCap: 1105217718036,
//     volume: 67366474410
//     },
//     {
//     id: 2, 
//     coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//     coinName: "Bitcoin",
//     currentPrice: 59203.82,
//     dayPerformance: "2.3%",
//     weekPerformance: "10%",
//     marketCap: 1105217718036,
//     volume: 67366474410
//     },
//     {
//     id: 3, 
//     coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//     coinName: "Bitcoin",
//     currentPrice: 59203.82,
//     dayPerformance: "2.3%",
//     weekPerformance: "10%",
//     marketCap: 1105217718036,
//     volume: 67366474410
//     },
//     {
//     id: 4, 
//     coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//     coinName: "Bitcoin",
//     currentPrice: 59203.82,
//     dayPerformance: "2.3%",
//     weekPerformance: "10%",
//     marketCap: 1105217718036,
//     volume: 67366474410
//     },
//   ],
//   trades:[
//     {
//     id: 1, 
//     tradeTime: "2021-08-17 12:42",
//     tradeType: "Buy",
//     tradeOrder: "Limit",
//     tradePrice: 59203.82,
//     tradeAmount: 0.0855208
//     },
//     {
//     id: 2, 
//     tradeTime: "2021-08-17 12:42",
//     tradeType: "Buy",
//     tradeOrder: "Limit",
//     tradePrice: 59203.82,
//     tradeAmount: 0.0855208
//     },
//     {
//     id: 3, 
//     tradeTime: "2021-08-17 12:42",
//     tradeType: "Buy",
//     tradeOrder: "Limit",
//     tradePrice: 59203.82,
//     tradeAmount: 0.0855208
//     },
//     {
//     id: 4, 
//     tradeTime: "2021-08-17 12:42",
//     tradeType: "Buy",
//     tradeOrder: "Limit",
//     tradePrice: 59203.82,
//     tradeAmount: 0.0855208
//     },
//   ],
//   currentPrice: 55000
// }

router.get('/:exchange/:coin/:timeframe', function (req, res) {
  const { exchangeSelection, coin, timeframe} = req.params;
  console.log(coin)
  const userId = 2;
  getUserExchanges(userId)
  .then(exchanges => {
    getExchangeInfo(exchanges, exchangeSelection, coin, timeframe).then(data => {
      return res.send(data);
    })
  })
  .catch(err => console.log(err));
})

router.get('/', function (req, res) {
  const userId = 2;
  getUserExchanges(userId)
  .then(exchanges => {
    getDefaultExchangeInfo(exchanges).then(data => {
      return res.send(data);
    })
  })
  .catch(err => console.log(err));
})

const oneMonthAgo = () => new Date - 2629800000
const oneWeekAgo = () => new Date - 604800000
const oneDayAgo = () => new Date - 86400000
const oneMinuteAgo = () => new Date - 60000

const getExchangeInfo = (exchangeData, exchangeSelection, coin, timeframe) => {
  const firstExchange = exchangeData[0]
  // 
  const {api_key, api_secret} = firstExchange; 
  exchangeId = exchangeSelection;
  exchangeClass = ccxt[exchangeId];
  const exchange = new exchangeClass({
    apiKey: api_key,
    secret: api_secret,
    enableRateLimit: true
  })
  
  exchange.setSandboxMode(true);
  const fetchTrades = exchange.fetchMyTrades(coin, oneMonthAgo());
  const fetchOHLCV = exchange.fetchOHLCV(coin, timeframe, oneMonthAgo());
  const fetchBalance = exchange.fetchBalance();
  const fetchCoins = exchange.fetchTickers();
  const timeframes = exchange.timeframes;
  return Promise.all([fetchTrades, fetchOHLCV, fetchBalance, fetchCoins, timeframes])
  .then(values => {
    const trades = formatTrades(values[0]);
    const candles = values[1];
    const balance = values[2];
    const coins = formatCoins(values[3]);
    const timeframes = values[4];
    return {
      trades,
      candles,
      balance,
      coins,
      timeframes
    };
  })
  .catch(err => console.log(err))
}

const getDefaultExchangeInfo = (exchangeData) => {
  const firstExchange = exchangeData[0]
  const {api_key, api_secret, exchange_name} = firstExchange; 
  exchangeId = exchange_name;
  exchangeClass = ccxt[exchangeId];
  const exchange = new exchangeClass({
    apiKey: api_key,
    secret: api_secret,
    enableRateLimit: true
  })
  
  exchange.setSandboxMode(true);
  const fetchTrades = exchange.fetchMyTrades("BTC/USD", oneMonthAgo());
  const fetchOHLCV = exchange.fetchOHLCV("BTC/USD", "1h", oneMonthAgo());
  const fetchBalance = exchange.fetchBalance("BTC/USD");
  const fetchCoins = exchange.fetchTickers(["BTC/USD", "ETH/USD", "DOGE/USDT", "ADA/USDT"]);
  const timeframes = exchange.timeframes;
  return Promise.all([fetchTrades, fetchOHLCV, fetchBalance, fetchCoins, timeframes])
  .then(values => {
    const trades = formatTrades(values[0]);
    const candles = values[1];
    const balance = values[2];
    const coins = formatCoins(values[3]);
    const timeframes = values[4];
    return {
      trades,
      candles,
      balance,
      coins,
      timeframes
    };
  })
  .catch(err => console.log(err))
}

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

const formatTrades = (trades) => {
  const formattedTrades = trades.map(trade => {
    return {
      price: trade.price, 
      amount: trade.cost, 
      cost: trade.amount, 
      time: trade.timestamp,
      symbol: trade.info.symbol,
      orderType: trade.type,
      side: trade.side     
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


module.exports = router

// MIDDLEWARE
// is user logged in? - req.session.userId
// if no - return 401 status("user must be logged in")
// if yes - fetch user data, next()
// does the user have an account for exchange already? - accounts table db query
// if no - return 401 status("user must have an account")
// if yes - fetch exchange data and coinList, next()


// ROUTE
// do we have coin param?
// if yes, fetch coindata and render
// // is coin param present in coinList?
// // if yes, render coinList
// // if no, next()
// if no, fetch first available coin and render 


// app.get('/api/exchange/:name', (req, res) => {
//   db.query('select accountinfo from user where exchange is ...')
//   .then(accountInfo => {
//     new Exchange(accountinfo)
//     const trades = exchange.fetchTrades()
//     res.json(trades)
//   })
// })
module.exports = ({
  getUserByEmail,
  getUserExchanges,
  addUserAccount,
  getUserTransactions,
  addUserTransactions,
 }) => {

  router.get('/', (req, res) => {
    getUserExchanges()
      .then((exchanges) => res.json(exchanges))
      .catch((err) => res.json({
        error: err.message
    }));
  });

    getUserByEmail(email)
      .then(user => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
          });
        } else {
          return addUser(email, password)
        }
      })
        .then(newUser => res.json(newUser))
        .catch(err => res.json({
          error: err.message
        }));
  return router;
};

module.exports = router
