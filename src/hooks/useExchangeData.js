// require('dotenv').config();
import ccxt from 'ccxt'

// SINGLE EXCHANGE INSTANTIATION  //

// const phemex = new ccxt.phemex({
//   apiKey: process.env.PHEMEX_API_PUBLIC,
//   secret: process.env.PHEMEX_API_SECRET,
//   enableRateLimit: true
// })

// phemex.setSandboxMode(true)

// const bitmex = new ccxt.bitmex({
//   apiKey: process.env.BITMEX_API_PUBLIC,
//   secret: process.env.BITMEX_API_SECRET,
//   enableRateLimit: true
// })

// bitmex.setSandboxMode(true)

// const binance = new ccxt.binance({
//   apiKey: process.env.BITMEX_API_PUBLIC,
//   secret: process.env.BITMEX_API_SECRET,
//   enableRateLimit: true
// })

// USEREXCHANGE CLASS INSTANTIATION // 
// for each exchange a user adds to our app, we create a new userExchange class 

class CryptoExchange {
 
  constructor(exchange, apiKey, secret) {
    this.exchangeId = exchange;
    this.exchangeClass = ccxt[this.exchangeId];
    this.exchange = new this.exchangeClass ({
      apiKey,
      secret,
      enableRateLimit: true,
      proxy: 'https://cors-anywhere.herokuapp.com/'
    });
    this.exchange.setSandboxMode(true);
  }


  fetchBalance = (symbol = "") => {
    return this.exchange.fetchBalance(symbol)
    // .then(balance => console.log(balance))
    // .catch(err => console.log(err))
  }
 
  fetchTrades = (exchangeRequestData) => {
    const {symbol, since} = exchangeRequestData;
  
   return this.exchange.fetchMyTrades(symbol, since)
    .then(trades => {
      return trades.map(trade => {
        return {
          price: trade.price, 
          amount: trade.amount, 
          cost: trade.cost, 
          time: trade.timestamp,
          symbol: trade.info.symbol,
          orderType: trade.type,
          side: trade.side     
        }
      })
    })
    .catch(err => console.log(err))
  }

  averageCost = (exchangeRequestData) => {
    const {symbol, since} = exchangeRequestData
    
    let costTotal = 0;
    return this.exchange.fetchMyTrades(symbol, since)
    .then(trades => {
      trades.forEach(trade => {
        costTotal += trade.price;
      })
      // average cost
      return costTotal / trades.length
    })
    .catch(err => console.log(err));
  }

  calculatePL(trades) {
    // for each trade
    // if trade is a buy, 
    // compare it to current price of asset and calculate P/L
    // if trade is a sell, compare 
  }

  getOHLCVData(chartDataRequest) {
    const { symbol, timeframe, since } = chartDataRequest
  
    return this.exchange.fetchOHLCV(symbol, timeframe, since)
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
  }

// filter your search by entering a ticker ie: "BTC" or "CAD"
  fetchExchangeCoins = (searchTicker) => {

    return this.exchange.fetchTickers()
    .then(tickers => { 
      const tickersArr = Object.keys(tickers);
      return tickersArr.map(ticker => {
        if (ticker.includes(searchTicker.toUpperCase())) {
          const tickerInfo = tickers[ticker];
          return {
            symbol: tickerInfo.symbol,
            price: tickerInfo.ask,
            change: tickerInfo.change,
            changePercent: tickerInfo.percentage,
            volume: tickerInfo.baseVolume,
          }
        }
      })
    })
    .catch(err => console.log(err));
  }
}

export default CryptoExchange

// HELPERS

// const oneMonthAgo = () => new Date - 2629800000
// const oneWeekAgo = () => new Date - 604800000
// const oneDayAgo = () => new Date - 86400000
// const oneMinuteAgo = () => new Date - 60000

//   //******* TEST DATA *******//
//   const chartDataRequest = {
//     exchange: "phemex",
//     symbol: 'BTC/USDT',
//     timeframe: '1m',
//     since: oneDayAgo() 
//   }

