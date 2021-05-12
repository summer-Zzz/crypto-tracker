// require('dotenv').config();
import ccxt from 'ccxt'

class Exchange {
 
  constructor(accountInfo) {
    const {exchange, apiKey, secret} = accountInfo;
    this.exchangeId = exchange;
    this.exchangeClass = ccxt[this.exchangeId];
    this.exchange = new this.exchangeClass ({
      apiKey,
      secret,
      enableRateLimit: true,
      proxy: 'https://cors-anywhere.herokuapp.com/'
    });
    this.exchange.setSandboxMode(true);
    this.coins = this.exchange.fetchExchangeCoins()
  }


  fetchBalance = (symbol = "") => {
    return this.exchange.fetchBalance(symbol)
    .then(balance => {
      return balance
    })
    .catch(err => console.log(err))
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
        const tickerInfo = tickers[ticker];
        return {
          symbol: tickerInfo.symbol,
          price: tickerInfo.ask,
          change: tickerInfo.change,
          changePercent: tickerInfo.percentage,
          volume: tickerInfo.baseVolume
        }
      })
    })
    .catch(err => console.log(err));
  }

  fetchTickerPrice = (symbol) => {
    return this.exchange.fetchTicker(symbol).then(ticker => {
      return ticker.ask;
    })
    .catch(err => console.log(err))
  }
  
}

export default Exchange

