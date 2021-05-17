import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/App'
export default function useApplicationData() {

  // STATE
  const [currentUser, setCurrentUser] = useState(null)
  const [exchangeData, setExchangeData] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    exchange: "kraken",
    timeframe: '1hr',
    coin: "BTC/USD",
    filter: "none"  
  });
  
  const handleSubmit = (userData) => {
    const { dataType, password, email } = userData;
    axios
    .post(`http://localhost:3001/api/users/${dataType}/${email}/${password}`)
    .then((res) => {
      if (res.status === 200){
        setCurrentUser(res.data.id);
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
  
    })
  }
  
  // REDUCER FUNCTIONS
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
       console.log(timeframes);
        setExchangeData({
          trades,
          candles,
          timeframes,
          balance,
          coins,
          selectedCoin
        });
      })
      .catch(err => console.log(err))
    }
  }, [state, currentUser])
  
  return { handleSubmit, handleLogout, setExchange, setTimeframe, setCoin, setFilter, state, currentUser, exchangeData }
}
