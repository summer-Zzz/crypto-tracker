// import React from 'react'
import React, { useState, useEffect, useReducer } from 'react'
import 'dotenv/config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
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

const userDatabase = {
  'testlogin@test.com' : {
    email: 'testlogin@test.com',
    password: '123'
  }
}

export default function App() {
  
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null)

  const handleSubmit = (userData) => {
    // event.preventDefault()
    const { dataType, password, email } = userData;
    axios
    .post(`http://localhost:3001/api/users/${dataType}/${email}/${password}`)
    .then((res) => {
      if(res.status === 200){
        history.push('/select')
        history.go('/select')
        setCurrentUser(res.data.id)
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const [exchangeCredentials, setExchangeCredentials] = useState(null);
  const [exchangeData, setExchangeData] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    exchange: "kraken",
    timeframe: '1hr',
    coin: "BTC/USD"
  })

  const setExchange = (exchange) => {
    dispatch({type: "SET_EXCHANGE", value: exchange})
  }
  const setTimeframe = (timeframe) => {
    dispatch({type: "SET_TIMEFRAME", value: timeframe})
  }
  const setCoin = (coin) => {
    dispatch({type: "SET_COIN", value: coin})
  }

  const escapeCoinSlash = (coin) => {
   return coin.split('/').join('%2F');
  }

  useEffect(() => {
    if (exchangeCredentials) { 
      const { exchange, timeframe, coin } = state;
      const formattedCoin = escapeCoinSlash(coin);
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
    }
  }, [exchangeCredentials, state])

  // useEffect(() => {
  //   if (exchangeCredentials) { 
  //     const apiUrl = `http://localhost:3001/api/exchange`
  //     axios.get(apiUrl)
  //     .then(res => {
  //      const {trades, candles, balance, coins, timeframes} = res.data;
  //      const coin = state.coin;
  //       setExchangeData({
  //         trades,
  //         candles,
  //         balance,
  //         coins,
  //         coin,
  //         timeframes
  //       });
  //     })
  //   }
  // }, [exchangeCredentials])

  return (
    <Router>
    <div>
      <button onClick={() => setExchangeCredentials("Exchange set")}>Update data</button>
      {/* <div>{JSON.stringify(exchangeData)}</div> */}
      <header>
        <nav className="navbar">
          <Link className="nav-text" to="/">Crypto-Tracker</Link>
          <Link className="nav-text" to="/dashboard">Dashboard</Link>
          <Link className="nav-text" to="/login">Login</Link>
          <Link className="nav-text" to="/register">Register</Link>
          <Link className="nav-text" to="/settings">Logout</Link> 
          <Link className="nav-text" to="/tradetable">Trade Table</Link>
          <Link className="nav-text" to="/settings">Settings</Link>
        </nav>

      </header>
      <main>
        <Switch>
          <Route path="/register">
            <Form formLabel={'Register'} firstLabel={'Email:'} secondLabel={'Password:'} handleSubmit={handleSubmit}/>
          </Route>
          <Route path="/login">
            <Form formLabel={'Login'} firstLabel={'Email:'} secondLabel={'Password:'} handleSubmit={handleSubmit}/>
          </Route>
          <Route path="/tradetable">
          { exchangeData && <TradeTable rows={exchangeData.trades}/> }
          </Route>
          <Route path="/settings">
            <SettingsForm /> 
          </Route>
          <Route path="/select">
            <h1>Hello</h1>
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
            <CoinTable rows={exchangeData.coins} currencies={currencies} setCoin={setCoin} />
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
