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

// const coinRows = [
//   {
//   id: 1, 
//   coinLogo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=010",
//   coinName: "Bitcoin",
//   currentPrice: 59203.82,
//   dayPerformance: "2.3%",
//   weekPerformance: "10%",
//   marketCap: 1105217718036,
//   volume: 67366474410
//   },
//   {
//   id: 2, 
//   coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//   coinName: "Bitcoin",
//   currentPrice: 59203.82,
//   dayPerformance: "2.3%",
//   weekPerformance: "10%",
//   marketCap: 1105217718036,
//   volume: 67366474410
//   },
//   {
//   id: 3, 
//   coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//   coinName: "Bitcoin",
//   currentPrice: 59203.82,
//   dayPerformance: "2.3%",
//   weekPerformance: "10%",
//   marketCap: 1105217718036,
//   volume: 67366474410
//   },
//   {
//   id: 4, 
//   coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//   coinName: "Bitcoin",
//   currentPrice: 59203.82,
//   dayPerformance: "2.3%",
//   weekPerformance: "10%",
//   marketCap: 1105217718036,
//   volume: 67366474410
//   },
// ]

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

const infoArray = ['phemex', '6e4baee4-8560-4675-b3da-7c4c62332801', 'aysxzFt1JU4139lbt-RM-tToIdmm5aWfYLz9KABPbfRmNzM3MDE2Ny1lOGZmLTQ2NDgtYTc4NC0yZjk3ZTMyODI1YmQ']

export default function App() {

  const [exchange, setExchange] = useState(null);
  const [exchangeInfo, setExchangeInfo] = useState(null);
  const [markets, setMarkets] = useState([])

  useEffect(() => {
    if (exchangeInfo) {
      setExchange(
        new CryptoExchange(...exchangeInfo)
      )
    }
  },[exchangeInfo])

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
            <Dashboard />
          <CoinTable rows={coinRows} />
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}
