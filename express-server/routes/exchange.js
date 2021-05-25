const ccxt = require('ccxt');
const express = require('express');
const router = express.Router();
const db = require('../db/index')
const { getUserExchanges, addUserAccount } = require('../db/queries/queries')
const { getMockData } = require('../db/helpers/mock-data') 
const { getExchangeByName, getUserExchangeNames } = require('../db/helpers/dbHelpers')
const { sendTime, getExchangeInfo, formatExchangeNames, formatCoins } = require('../db/helpers/api-helpers')

const kraken = new ccxt.kraken()
const binance = new ccxt.binance()

// SEND MARKET INFORMATION 
router.get('/markets', (req, res) => {
  binance.fetchTickers().then(markets => {
    formattedMarkets = formatCoins(markets)
    console.log(formattedMarkets)
    return res.status(200).json(formattedMarkets)
  })
})

// DASHBOARD DATA 
router.get('/:mock/:id/:exchange/:coin/:timeframe/:time', function (req, res) {
  const { id, exchange, coin, timeframe, time,} = req.params;
    return getUserExchangeNames(id).then(exchangeNames => {
      const exchanges = formatExchangeNames(exchangeNames);
      const mockData = getMockData(exchange, coin);
      kraken.fetchOHLCV(coin, timeframe, sendTime(time))
      .then(candles => {
        kraken.fetchTicker(coin).then(selectedCoin => {
          return res.status(200).json({exchanges, candles, selectedCoin, ...mockData})
        })
      })
    })
  // }
  // const userId = 1;
  // return getUserExchanges(userId)
  // .then(exchanges => {
  //   console.log('route pinged')
  //   getExchangeInfo(exchanges, exchange, coin, timeframe).then(data => {
  //     return res.status(200).json(data);
  //   })
  // })
  .catch(err => console.log(err));
})


// NEW ACCOUNT
router.post('/account/new', (req, res) => {
  const {exchangeName} = req.body
  getExchangeByName(exchangeName.toLowerCase()).then(data => {
  exchangeId = data.id;
  newUserData = {exchangeId, ...req.body}
    addUserAccount(newUserData).then(data => {
      console.log(data)
      return res.status(200).json(data);
    })
  })
})


module.exports = router

