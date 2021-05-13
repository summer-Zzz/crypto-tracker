const ccxt = require('ccxt');
const express = require('express');
const router = express.Router();
const db = require('../db/index')

const exchangeData = {
  exchanges: [
    {
      id: 1,
      name: 'kraken',
    },
    {
      id: 2,
      name: 'binance',
    },
    {
      id: 3,
      name: 'phemex',
    },
    {
      id: 4,
      name: 'bitmex',
    }
  ],
  balance: {
    BTC: 0.25588023,
    USDT: 17422.2849681,
    ETH: 0.19851129,
    XRP: 70.929,
    LINK: 0,
    XTZ: 0,
    LTC: 0,
    ADA: 0,
    TRX: 0,
    ONT: 0,
    BCH: 0,
    NEO: 0,
    EOS: 0,
    COMP: 0,
    YFI: 0,
    ALGO: 0,
    DOT: 0,
    UNI: 0,
    AAVE: 0,
    DOGE: 324.675,
    BAT: 0,
    CHZ: 0,
    MANA: 0,
    ENJ: 0,
    SUSHI: 0,
    SNX: 0,
    GRT: 0,
    MKR: 0,
    VET: 0,
    ZEC: 0,
    FIL: 0,
    KSM: 0,
    XMR: 0,
    QTUM: 0,
    XLM: 0,
    ATOM: 0,
    LUNA: 0
  },
  coins: [
    {
    id: 1, 
    coinLogo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=010",
    coinName: "Bitcoin",
    currentPrice: 59203.82,
    dayPerformance: "2.3%",
    weekPerformance: "10%",
    marketCap: 1105217718036,
    volume: 67366474410
    },
    {
    id: 2, 
    coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    coinName: "Bitcoin",
    currentPrice: 59203.82,
    dayPerformance: "2.3%",
    weekPerformance: "10%",
    marketCap: 1105217718036,
    volume: 67366474410
    },
    {
    id: 3, 
    coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    coinName: "Bitcoin",
    currentPrice: 59203.82,
    dayPerformance: "2.3%",
    weekPerformance: "10%",
    marketCap: 1105217718036,
    volume: 67366474410
    },
    {
    id: 4, 
    coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    coinName: "Bitcoin",
    currentPrice: 59203.82,
    dayPerformance: "2.3%",
    weekPerformance: "10%",
    marketCap: 1105217718036,
    volume: 67366474410
    },
  ],
  trades:[
    {
    id: 1, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
    {
    id: 2, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
    {
    id: 3, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
    {
    id: 4, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
  ],
  currentPrice: 55000
}

const middleWare = () => {
  
}

router.get('/', (req, res) => {
  const userId = req.session;
  // need this data: apiKey, secret, coin, exchange
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

  initializeExchange(exchange, apiKey, secret).then(exchangeData => {
    res.json(exchangeData, userExchanges);
  })
})
// get exchanges by id 

const initializeExchange = (exchange, apiKey, secret) => {
  exchangeId = exchange;
  exchangeClass = ccxt[exchangeId];
  exchange = new exchangeClass({
    apiKey,
    secret,
    enableRateLimit: true
  })
  const fetchBalance = exchange.fetchBalance();
  const fetchCoins = exchange.fetchCoins();
  return Promise.all([fetchBalance, fetchCoins])
  .then(values => {
    const balance = values[0];
    const coins = formatCoins(values[1]);
    const coin = coins[0];
    return {
      balance,
      coins,
      coin
    }
  })
}

const formatCoins = (coins) => {
  const coinArray = []
  for (let coin of coins) {
    const coinData = {
      symbol: coin.symbol,
      price: coin.ask,
      change: coin.change,
      changePercent: coin.percentage,
      volume: coin.baseVolume
    }
    coinArray.push(coinData)
  }
  return coinArray;
}

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

module.exports = router