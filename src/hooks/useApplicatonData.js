import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/App'
import { useCookies } from 'react-cookie';

export default function useApplicationData() {

  // STATE

  const [currentUser, setCurrentUser] = useState(null);
  const [alert, setAlert] = useState(null)
  const [exchangeData, setExchangeData] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);

  const [state, dispatch] = useReducer(reducer, {
    exchange: "Kraken",
    timeframe: '1h',
    coin: "BTC/USD",
    filter: "none", 
    time: "1d" 
  });

  const handleAlert = (alert) => {
    setAlert(alert)
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  
  const handleLogin = (userData) => {
    const { password, email } = userData;
    axios
    .post(`http://localhost:3001/api/users/login`, {password, email})
    .then((res) => {
      if (res.status === 200) {
        setCookie('user_id', res.data, { path: '/' });
      }
    })
    .catch((err) => {
      handleAlert(err.response.data);
    });
  }

  const handleRegister = (userData) => {
    const { password, email } = userData;
    axios
    .post(`http://localhost:3001/api/users/register`, {password, email})
    .then(res => {
      if (res) {
        return setCookie('user_id', res.data.id, { path: '/' });
      }
    })
    .catch((err) => {
      handleAlert(err.response.data)
    });
  }
 
  const handleLogout = () => {
    removeCookie("user_id");
  }

  const handleAddAccount = (userId, exchangeName, apiKey, apiSecret) => {
    axios.post(`http://localhost:3001/api/exchange/account/new`, {userId, exchangeName, apiKey, apiSecret})
    .then(res => {
      handleAlert("New exchange added!")
      setCurrentUser(true);
      setCurrentUser(false);
    })
    .catch(err => console.log(err));
  }
  
  // REDUCER FUNCTIONS
  function setExchange(exchange) {
    dispatch({ type: "SET_EXCHANGE", value: exchange });
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

  const setTime = (time) => {
    dispatch({type: "SET_TIME", value: time})
  }
  
  // Re-renders all api data when user interacts with state
  useEffect(() => {
    if (cookies.user_id) { 
      const { exchange, timeframe, time, coin } = state;
      const formattedExchange = exchange.toLowerCase()
      const formattedCoin = coin.split('/').join('%2F');
      const id = cookies.user_id;
      const apiUrl = `http://localhost:3001/api/exchange/${true}/${id}/${formattedExchange}/${formattedCoin}/${timeframe}/${time}`
      axios.get(apiUrl)
      .then(res => {
       const {exchanges, trades, candles, balance, coins, selectedCoin, timeframes} = res.data;
        setExchangeData({
          trades,
          candles,
          timeframes,
          balance,
          coins,
          selectedCoin,
          exchanges
        });
      })
      .catch(err => console.log(err))
    }
  }, [state, currentUser, cookies.user_id])
  
  return { handleLogin, handleRegister, handleAddAccount, handleLogout, setExchange, setTimeframe, setCoin, setTime, setFilter, setAlert, alert, state, currentUser, exchangeData, cookies }
}
