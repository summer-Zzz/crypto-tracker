const ccxt = require('ccxt');
const express = require('express');
const router = express.Router();
const db = require('../db/index')
const { getUserExchanges, getExchangeInfo } = require('../db/helpers/dbHelpers')

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

router.get('/', function (req, res) {
  const userId = 5;
  console.log(req.body)
  getUserExchanges(userId)
  .then(exchanges => {
    console.log(exchanges)
    getExchangeInfo(exchanges).then(data => {
      return res.send(data);
    })
  })
  .catch(err => console.log(err))
})

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