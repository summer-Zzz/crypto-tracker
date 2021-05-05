require('dotenv').config();
const ccxt = require ('ccxt');

// initialize test exchanges 
const phemex = new ccxt.phemex({
  apiKey: process.env.PHEMEX_API_PUBLIC,
  secret: process.env.PHEMEX_API_SECRET,
  enableRateLimit: true
})

phemex.setSandboxMode(true)

const bitmex = new ccxt.bitmex({
  apiKey: process.env.BITMEX_API_PUBLIC,
  secret: process.env.BITMEX_API_SECRET,
  enableRateLimit: true
})

bitmex.setSandboxMode(true)

// HELPERS

export default function getExchangeData() {

  const initializeExchange = (exchange, apiKey, secret) => {
    // encryp api keys 
    // store api keys in db
    // initialize exchange
    const newExchange = new ccxt[exchange]({
      apiKey,
      secret
    })
  }
  
  const fetchTrades = (exchange, dateSince, symbol) => {
    const dateRange = new Date(dateSince)
    exchange.fetchMyTrades(symbol, dateRange)
    .then(trades => console.log(trades))
    .catch(err => console.log(err))
  
  }
  
  const fetchBalance = (exchange) => {
    exchange.fetchBalance()
    .then(balance => console.log(balance))
    .catch(err => console.log(err))
  }

  const calculatePL = (entry, exit) => {
    // calculate profit or loss from a single trade
  }
  
  const averagePL = (trades) => {
    for (let trade of trades) {
      [entry, exit] = trade
      calculatePL(entry, exit)
    }
  }
}