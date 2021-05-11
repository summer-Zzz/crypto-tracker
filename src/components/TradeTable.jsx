import React from 'react'
import TradeTableRow from "./TradeTableRow"
import "./TradeTable.scss";

export default function TradeTable(props) {

  const tableRows = props.rows.map(row => {
    return <TradeTableRow 
      key={row.id}
      tradeTime={row.tradeTime}
      tradeType={row.tradeType}
      tradeOrder={row.tradeOrder}
      tradePrice={row.tradePrice}
      tradeAmount={row.tradeAmount}
    />

  })
  
  return (
  <table className="table">
      <thead>
      <tr>
        <td>Time</td>
        <td>Type</td>
        <td>Order %</td>
        <td>Price</td>
        <td>Amount</td>
      </tr>
    </thead>
    <tbody>
      {tableRows}
    </tbody>
  </table>
  )
  
}

