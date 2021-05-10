import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Form from "./components/Form"
import CoinTable from "./components/CoinTable"
import TradeTable from "./components/TradeTable"
import './App.css';

import { formatPrefix } from 'd3-format';

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


export default function App() {
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
            <CoinTable rows={coinRows} />
            <TradeTable rows={tradeRows} />
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}
