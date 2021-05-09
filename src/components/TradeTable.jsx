import React from 'react'

import TradeTableRow from "../components/TradeTableRow"

export default function TradeTable(props) {

  const tableRows = props.rows.map(row => {
    return <TradeTableRow 
      key={row.id}
      tradeTime={row.time}
      tradeType={row.type}
      tradeOrder={row.order}
      tradePrice={row.price}
      tradeAmount={row.amount}
    />
  })
  return <table>
    <thead>
      <tr>
        <td></td>
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
}
