const ccxtpro = require('ccxt.pro');
const express = require('express');
const router = express.Router();
const db = require('../db/index')
const { getUserExchanges, getUserTransactions,
  addUserTransactions } = require('../db/helpers/dbHelpers')

router.get('/:exchange/:coin/:timeframe', function (req, res) {
  const { exchange, coin, timeframe} = req.params;
  const userId = 1;
  getUserExchanges(userId)
  .then(exchanges => {
    console.log('route pinged')
    getExchangeInfo(exchanges, exchange, coin, timeframe).then(data => {
      return res.send(data);
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
  const firstExchange = exchangeData[0]
  const {api_key, api_secret} = firstExchange; 
  const exchangeId = exchangeSelection;
  const exchangeClass = ccxtpro[exchangeId];
  const exchange = new exchangeClass({
    apiKey: api_key,
    secret: api_secret,
    enableRateLimit: true
  })
  const fetchTrades = exchange.fetchMyTrades();
  const fetchOHLCV = exchange.fetchOHLCV(coin, timeframe, oneMonthAgo());
  const fetchTicker = exchange.fetchTicker(coin)
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
    console.log(coin);
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
  console.log(formattedTrades)
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



// Retreive trade transaction
router.get('/exchange/trades', (req, res) => {
  fetchTrades()
    .then((tradeData) => res.json(tradeData))
    .catch((err) => res.json({
      error: err.message
  }));
});

  router.get('/exchange/trades/new', (req, res) => {
    const { account_id, exchange } = req.body;
    console.log (account_id, exchange)
    fetchTrades(account_id, exchange)
      .then(tradesData => {
        if (!tradesData) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
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

// Add new trade transaction
  router.post('/exchange/trades/new', (req, res) => {
    const { account_id, exchange } = req.body;
    console.log (account_id, exchange)
    fetchTrades(account_id, exchange)
      .then(tradesData => {
        if (!tradesData) {
          res.json({
            msg: 'Sorry, a user account with this email already exists'
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
