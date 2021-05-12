// import React from 'react'
import React, { useState, useEffect } from 'react'
import Exchange from './api-helpers/useExchangeData'
import 'dotenv/config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Form from "./components/Form"
import SettingsForm from "./components/SettingsForm"
import CoinTable from "./components/CoinTable/CoinTable"
import Dashboard from "./components/Dashboard"
import DisplayChart from './components/Candlestick/DisplayChart';
import TradeTable from "./components/TradeTable/TradeTable";
import axios from 'axios';

const exchanges = [
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
const coinRows = [
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
const tradeRows = [
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
]

// const currentPrice = 65281.91;

export default function App() {

  // exchange insantiation
  const [accountInfo, setAccountInfo] = useState(null)
    // exchange: null,
    // apiKey: null,
    // secret: null

  // exchange related
  const [exchangeInfo, setExchangeInfo] = useState(null)
  // exchangeName,
  // exchange
  // coins

  // coin related
  const [coinData, setCoinData] = useState(null)
    // coin: null,
    // trades: [],
    // current: null,
    // pl: null,
    // balance: null

  // chart related 
  const [chartData, setChartData] = useState(null)
    // candles: [],
    // timeframe: null,
    // candleLength: null

 
  useEffect(() => {
    if (accountInfo) {
      // get exchange name
      const exchangeName = accountInfo.exchange;
    // create new Exchange object
     const exchange = new Exchange(accountInfo);
     // fetch available coins from market 
     const coins = exchange.coins;
     // set coin data in state 
     setExchangeInfo({exchangeName, exchange, coins});
    }
  },[accountInfo])

  useEffect(() => {
    if (coinData.coin) {
      // fetch chart data
      const candles = exchange.fetchOHLCV(coinData.coin, chartData.timeframe, chartData.candleLength);
      setChartData({...candles});
      // fetch user trades
      const trades = exchange.fetchTrades(coinData.coin);
      // fetch user balance
      const balance = exchange.fetchBalance(coinData.coin);
      // fetch user P&L
      const currentPrice = exhange.fetchTickerPrice(coinData.coin);
      const pL = exchange.calculatePL(coinData.trades, currentPrice);
      setCoinData({...coinData, trades, balance, pL});
    }
  },[coinData])

  function handleExchangeInfo(e, exchange, apiKey, secret) {
    e.preventDefault()
    setAccountInfo({exchange, apiKey, secret})
  }

  // console.log("PL:", calculatePL(trades, currentPrice))

  return (
    <Router>
    <div>
      <header>
        <nav className="navbar">
          <Link className="nav-text" to="/">Crypto-Tracker</Link>
          <Link className="nav-text" to="/login">Login</Link>
          <Link className="nav-text" to="/register">Register</Link>
          <Link className="nav-text" to="/tradetable">Trade Table</Link>
          <Link className="nav-text" to="/settings">Settings</Link>
        </nav>
        <div class="home-header">
          <img id="main_image" src="/images/background.jpeg" alt="background" />
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/register">
            <Form formLabel={'Register'} firstLabel={'email'} secondLabel={'password'} />
          </Route>
          <Route path="/login">
            <Form formLabel={'Login'} firstLabel={'email'} secondLabel={'password'}/>
          </Route>
          <Route path="/tradetable">
            <TradeTable rows={tradeRows}/>
          </Route>
          <Route path="/settings">
            <SettingsForm addExchange={handleExchangeInfo}/> 
          </Route>
          <Route path="/">
            <div class="chart-dashboard-container">
              <DisplayChart />
              <Dashboard 
                balance={balance} 
                exchanges={exchanges} 
                timeframes={timeframes}
                currencies={currencies}
              />
            </div>
            <CoinTable rows={coinRows} /> 
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}
