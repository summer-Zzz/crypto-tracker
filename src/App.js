// import React from 'react'
import React from 'react'
import 'dotenv/config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import useApplicationData from "./hooks/useApplicatonData"
import './App.scss';

import Home from "./components/Home"
import Form from "./components/Form"
import SettingsForm from "./components/SettingsForm"
import CoinTable from "./components/CoinTable/CoinTable"
import Dashboard from "./components/Dashboard"
import DisplayChart from './components/Candlestick/DisplayChart';
import TradeTable from "./components/TradeTable/TradeTable";
import { propTypes } from 'react-bootstrap/esm/Image';
const Spinner = require('react-spinkit');

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
    id: 6,
    name: '1 week'
  },
  {
    id: 7,
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
    coinSymbol: "BTC/USD",
    currentPrice: 59203.82,
    dayPerformance: "2.3%",
    weekPerformance: "10%",
    marketCap: 1105217718036,
    volume: 67366474410
  },
  {
    id: 2,
    coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    coinSymbol: "BTC/USD",
    currentPrice: 59203.82,
    dayPerformance: "2.3%",
    weekPerformance: "10%",
    marketCap: 1105217718036,
    volume: 67366474410
  },
  {
    id: 3,
    coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    coinSymbol: "BTC/USD",
    currentPrice: 59203.82,
    dayPerformance: "2.3%",
    weekPerformance: "10%",
    marketCap: 1105217718036,
    volume: 67366474410
  },
  {
    id: 4,
    coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    coinSymbol: "BTC/USD",
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


export default function App() {
  const { handleSubmit, handleAddAccount, handleLogout, setExchange, setTimeframe, setCoin, setFilter, state, currentUser, exchangeData, cookies } = useApplicationData()
 
  return (
    <Router>
      <div>
        <header>
          <nav className="navbar">
            <div className="navbar-left">
              <Link className="nav-text-title" to="/">Crypto-Tracker</Link>
            </div>
            <div className="navbar-right">
              {!cookies.Email && <Link className="nav-text" to="/login">Login</Link>}
              {!cookies.Email && <Link className="nav-text" to="/register">Register</Link>}
              {cookies.Email && <Link onClick={() => handleLogout()} className="nav-text" to="/logout">Logout</Link>}
              {cookies.Email && <Link className="nav-text" to="/settings">Add Exchange</Link>}
              {cookies.Email && <Link className="nav-text" to="/tradetable">Your Trades</Link>}
              {cookies.Email && <Link className="nav-text" to="/dashboard">Dashboard</Link>}
            </div>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/register">
              <Form formLabel={'Register'} firstLabel={'Email:'} secondLabel={'Password:'} handleSubmit={handleSubmit} />
            </Route>
            <Route path="/login">
              {cookies.Email ? <Redirect to="/dashboard" /> :
                <Form formLabel={'Login'} firstLabel={'Email:'} secondLabel={'Password:'} handleSubmit={handleSubmit} />}
            </Route>
            <Route path="/tradetable">
              <div className="loader-container">
                {!exchangeData && cookies.Email && <Spinner name="pacman" fadeIn="none" className="loader" />}
              </div>
              {cookies.Email ? exchangeData && <TradeTable rows={exchangeData.trades} /> : <Redirect to="/" />}
            </Route>
            <Route path="/settings">
              <SettingsForm handleAddAccount={handleAddAccount}/>
            </Route>
            <Route path="/logout">
              <Redirect to="/" />
            </Route>
            <Route path="/dashboard">
            { !exchangeData && cookies.Email && <div><Spinner name="pacman" fadeIn="none" className="loader"/><p className="loading-text">Loading...</p></div>}
            { cookies.Email ?
            exchangeData &&
                <div>
                  <div className="show-container">
                    <div id="chart-dashboard-container">
                      <DisplayChart
                        candles={exchangeData.candles}
                        coinName={exchangeData.selectedCoin.symbol || "no data"} 
                      />
                      <Dashboard
                        coin={exchangeData.selectedCoin}
                        trades={exchangeData.trades}
                        balance={exchangeData.balance}
                        exchanges={exchanges}
                        timeframes={exchangeData.timeframes}
                        selectedTimeframe={state.timeframe}
                        setTimeframe={setTimeframe}
                        selectedExchange={state.exchange}
                      />
                    </div>
                  </div>
                    <div className="cointable">
                    <CoinTable
                      rows={exchangeData.coins}
                      currencies={currencies}
                      setCoin={setCoin}
                      setFilter={setFilter}
                      exchanges={exchangeData.exchanges}
                      setExchange={setExchange}
                      selectedExchange={state.exchange}
                      selectedFilter={state.filter} />
                    </div>
                  </div> : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
