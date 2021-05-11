import React, { useState, useEffect } from 'react'
import CryptoExchange from './hooks/useExchangeData'
import 'dotenv/config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form from "./components/Form"
import CoinTable from "./components/CoinTable"
import './App.css';

import Dashboard from "./components/Dashboard"

const exchanges = [
  {
    id: 1,
    name: 'kraken',
  },
  {
    id: 1,
    name: 'binance',
  },
  {
    id: 1,
    name: 'phemex',
  },
  {
    id: 1,
    name: 'bitmex',
  }
]

const timeframes = [
  {
    id: 1,
    name: '5 minutes'
  },
  {
    id: 2,
    name: '30 minutes'
  },
  {
    id: 3,
    name: '1 hour'
  },
  {
    id: 4,
    name: '12 hours'
  },
  {
    id: 5,
    name: '24 hours'
  },
  {
    id: 5,
    name: '1 week'
  },
  {
    id: 6,
    name: '1 month'
  }
]

const currencies = [
  {
    id: 1,
    name: "CAD"
  },
  {
    id: 2,
    name: "USD"
  },
  {
    id: 3,
    name: "EUR"
  },
  {
    id: 4,
    name: "AUD"
  },
  {
    id: 5,
    name: "CNY"
  },
  {
    id: 6,
    name: "SGD"
  }
]

const trades = [
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  },
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  },
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  },
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  }
]

const balance = {
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
}

const rows = [
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
]
// have state for user info 
// useEffect to pass user info to exchange instantiation
// 

// const phemex = new useCryptoExchanges('phemex', '6e4baee4-8560-4675-b3da-7c4c62332801', 'aysxzFt1JU4139lbt-RM-tToIdmm5aWfYLz9KABPbfRmNzM3MDE2Ny1lOGZmLTQ2NDgtYTc4NC0yZjk3ZTMyODI1YmQ')

// state.balance = phemex.fetchBalance()

// const oneMonthAgo = () => new Date - 2629800000
// const oneWeekAgo = () => new Date - 604800000
// const oneDayAgo = () => new Date - 86400000
// const oneMinuteAgo = () => new Date - 60000

// phemex.fetchBalance();

// const chartDataRequest = {
//   symbol: 'BTC/USDT',
//   timeframe: '1m',
//   since: oneDayAgo() 
// }
// phemex.getOHLCVData(chartDataRequest)

// const newExchange = new CryptoExchange('phemex', '6e4baee4-8560-4675-b3da-7c4c62332801', 'aysxzFt1JU4139lbt-RM-tToIdmm5aWfYLz9KABPbfRmNzM3MDE2Ny1lOGZmLTQ2NDgtYTc4NC0yZjk3ZTMyODI1YmQ')

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

// console.log(newExchange.fetchTrades(chartDataRequest))

export default function App() {

  // const [exchange, setExchange] = useState(null);
  // const [exchangeInfo, setExchangeInfo] = useState(null);
  // const [markets, setMarkets] = useState([])

  // useEffect(() => {
  //   if (exchangeInfo) {
  //     setExchange(
  //       new CryptoExchange(...exchangeInfo)
  //     )
  // //   }
  // },[exchangeInfo])

  return (
    <Router>
    <div>
      <header>
        <nav className="navbar">
          <Link className="nav-text" to="/">Crypto-Tracker</Link>
          <Link className="nav-text" to="/login">Login</Link>
          <Link className="nav-text" to="/register">Register</Link>
          <Link className="nav-text" to="/settings">Settings</Link>
        </nav>
        <div class="home-header">
          <img id="main_image" src="/images/background.jpeg" alt="background" />
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/register">
            <Form formLabel={'Register'} firstLabel={'email'} secondLabel={'password'}/>
          </Route>
          <Route path="/login">
            <Form formLabel={'Login'} firstLabel={'email'} secondLabel={'password'}/>
          </Route>
          <Route path="/settings">
            <Form formLabel={'New Exchange'} firstLabel={'API key/id'} secondLabel={'Secert Key'}/> 
          </Route>
          <Route path="/">
            <Dashboard 
              balance={balance} 
              exchanges={exchanges} 
              timeframes={timeframes}
              currencies={currencies}
            />
          <CoinTable rows={rows} /> 
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}
