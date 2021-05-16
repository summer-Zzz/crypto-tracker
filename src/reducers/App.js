export default function reducer(state, action) {

  switch (action.type) {
    case "SET_EXCHANGE":
      return {...state, exchangeSelection: action.value} 
    case "SET_TIMEFRAME":
      return {...state, timeframe: action.value} 
    case "SET_COIN":
      return {...state, coin: action.value} 
    case "SET_FILTER":
      return {...state, filter: action.value} 
  }
}