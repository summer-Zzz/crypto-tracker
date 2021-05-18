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

export default function App() {
  const { handleSubmit, handleAddAccount, handleLogout, setExchange, setTimeframe, setCoin, setFilter, setTime, state, exchangeData, cookies } = useApplicationData()
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
                        timeframes={exchangeData.timeframes}
                        selectedTimeframe={state.timeframe}
                        setTimeframe={setTimeframe}
                        selectedTime={state.time}
                        setTime={setTime}
                        selectedExchange={state.exchange}
                      />
                    </div>
                  </div>
                    <div className="cointable">
                    <CoinTable
                      rows={exchangeData.coins}
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
