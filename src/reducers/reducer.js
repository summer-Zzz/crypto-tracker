export default function reducer(state, action) {

  switch (action.type) {
    case "CREATE_EXCHANGE":
      return {...state} // accountInfo
    case "SELECT_EXCHANGE":
      return {...state} // exchangeInfo 
    case "SELECT_COIN":
      return {...state, chartData} // coicData /chartData
  }

}