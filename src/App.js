// import React from 'react'
import React, { useState, useEffect } from 'react'
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

export default function App() {

const [exchangeInfo, setExchangeInfo] = useState(null)  

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
