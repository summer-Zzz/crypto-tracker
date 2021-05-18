import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/App'
import { useCookies } from 'react-cookie';

export default function useApplicationData() {

  // STATE

  const [currentUser, setCurrentUser] = useState(null);
  const [exchangeData, setExchangeData] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['Email']);

  const [state, dispatch] = useReducer(reducer, {
    exchange: "kraken",
    timeframe: '1hr',
    coin: "BTC/USD",
    filter: "none", 
    time: "30m" 
  });
  
  const handleSubmit = (userData) => {
    const { dataType, password, email } = userData;
    axios
    .post(`http://localhost:3001/api/users/${dataType}/${email}/${password}`)
    .then((res) => {
      if (res.status === 200){
        setCurrentUser(res.data.id);
        setCookie('Email', email, { path: '/' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  const handleLogout = () => {
    setCurrentUser(null)
    axios.post('http://localhost:3001/api/users/logout')
    .then(res => {
      removeCookie("Email")
    })
  }

  const handleAddAccount = (userId, exchangeName, apiKey, apiSecret) => {
    axios.post(`http://localhost:3001/api/exchange/account/new`, {userId, exchangeName, apiKey, apiSecret})
    .then(res => {
      setExchange(exchangeName);
      alert('Exchange added!')
    })
    .catch(err => console.log(err))
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
<<<<<<< HEAD
    if (cookies.Email) { 
      const { exchange, timeframe, coin } = state;
=======
    if (currentUser) { 
      const { exchange, timeframe, time, coin } = state;
>>>>>>> 6ade83096398e3a00c3bf7716ae0af3fd2a1d2cb
      const formattedCoin = coin.split('/').join('%2F');
      const id = 1;
      const apiUrl = `http://localhost:3001/api/exchange/${true}/${id}/${exchange}/${formattedCoin}/${timeframe}/${time}`
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
  }, [state, currentUser])
  
  return { handleSubmit, handleAddAccount, handleLogout, setExchange, setTimeframe, setCoin, setTime, setFilter, state, currentUser, exchangeData, cookies }
}
