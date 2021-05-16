// import React from 'react'
import React, { useState, useEffect, useReducer } from 'react'
import 'dotenv/config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import reducer from "./reducers/App"
import './App.css';


import Home from "./components/Home"
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

// kraken = {
// timeframes
// coins
// balance
// trades 
// }
export default function App() {
  
  // STATE
  const [currentUser, setCurrentUser] = useState(null)
  const [exchangeData, setExchangeData] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    exchange: "kraken",
    timeframe: '1hr',
    coin: "BTC/USD",
    filter: "0"
  });

  // EVENT HANDLING
  const handleSubmit = (userData) => {
    const { dataType, password, email } = userData;
    axios
    .post(`http://localhost:3001/api/users/${dataType}/${email}/${password}`)
    .then((res) => {
      if(res.status === 200){
        setCurrentUser(res.data.id);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleLogOut = () => {
    setCurrentUser(null)
    axios.post('http://localhost:3001/api/users/logout')
    .then(res => {
      console.log(res)
    })
  }

  const setExchange = (exchange) => {
    dispatch({type: "SET_EXCHANGE", value: exchange});
  }
  const setTimeframe = (timeframe) => {
    dispatch({type: "SET_TIMEFRAME", value: timeframe});
  }
  const setCoin = (coin) => {
    dispatch({type: "SET_COIN", value: coin});
  }
  const setFilter = (currency) => {
    dispatch({type: "SET_FILTER", value: currency});
  }

  // Re-renders all api data when user interacts with state
  useEffect(() => {
    if (currentUser) { 
      const { exchange, timeframe, coin } = state;
      const formattedCoin = coin.split('/').join('%2F');
      const apiUrl = `http://localhost:3001/api/exchange/${exchange}/${formattedCoin}/${timeframe}`
      axios.get(apiUrl)
      .then(res => {
       const {trades, candles, balance, coins, selectedCoin, timeframes} = res.data;
        setExchangeData({
          trades,
          candles,
          balance,
          coins,
          coin,
          timeframes,
          selectedCoin
        });
      })
      .catch(err => console.log(err))
    }
  }, [state, currentUser])

  return (
    <Router>
    <div>
      {/* <button onClick={() => setExchangeCredentials("Exchange set")}>Update data</button> */}
      {/* <div>{JSON.stringify(exchangeData)}</div> */}
      <header>
        <nav className="navbar">
          <Link className="nav-text" to="/">Crypto-Tracker</Link>
          {currentUser && <Link className="nav-text" to="/dashboard">Dashboard</Link> }–
          {!currentUser && <Link className="nav-text" to="/login">Login</Link> }
          {!currentUser && <Link className="nav-text" to="/register">Register</Link> }
          {currentUser && <Link onClick={() => handleLogOut()} className="nav-text" to="/api/logout">Logout</Link> }
          {currentUser && <Link className="nav-text" to="/tradetable">Trade Table</Link> }
          {currentUser && <Link className="nav-text" to="/settings">Settings</Link> }
        </nav>

        {/* <Navbar collapseOnSelect expand='sm' className="navbar">
          <Container>  
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                  <Nav.Link className="nav-text" href="/">Crypto-Tracker</Nav.Link>
                  <Nav.Link className="nav-text" href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link className="nav-text" href="/login">Login</Nav.Link>
                  <Nav.Link className="nav-text" href="/register">Register</Nav.Link>
                  <Nav.Link className="nav-text" href="/settings">Logout</Nav.Link> 
                  <Nav.Link className="nav-text" href="/tradetable">Trade Table</Nav.Link>
                  <Nav.Link className="nav-text" href="/settings">Settings</Nav.Link>
                </Nav>  
              </Navbar.Collapse>
          </Container> 
        </Navbar> */}

      </header>
      <main>
        <Switch>
          <Route path="/register">
            <Form formLabel={'Register'} firstLabel={'Email:'} secondLabel={'Password:'} handleSubmit={handleSubmit}/>
          </Route>
          <Route path="/login">
            {currentUser ? <Redirect to="/dashboard" /> :
            <Form formLabel={'Login'} firstLabel={'Email:'} secondLabel={'Password:'} handleSubmit={handleSubmit}/>}
          </Route>
          <Route path="/tradetable">
          { exchangeData && <TradeTable rows={exchangeData.trades}/> }
          </Route>
          <Route path="/settings">
            <SettingsForm /> 
          </Route>
          {/* <Home /> */}
        { exchangeData &&
          <Route path="/dashboard">
            <div id="chart-dashboard-container">
              <DisplayChart candles={exchangeData.candles} coinName={exchangeData.selectedCoin.symbol || "no data"} />
              <Dashboard 
                coin={exchangeData.selectedCoin}
                trades={exchangeData.trades}
                balance={exchangeData.balance} 
                exchanges={exchanges} 
                timeframes={exchangeData.timeframes}
                currencies={currencies}
                setTimeframe={setTimeframe}
                setExchange={setExchange}
              />
            </div>
            <CoinTable rows={exchangeData.coins} currencies={currencies} setCoin={setCoin} setFilter={setFilter} />
            </Route>  
          }
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}
