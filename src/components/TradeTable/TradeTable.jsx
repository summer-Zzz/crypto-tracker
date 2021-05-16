import React from 'react'
import TradeTableRow from "./TradeTableRow"
import "./TradeTable.scss";
import Table from 'react-bootstrap/Table'

export default function TradeTable(props) {

  const tableRows = props.rows.map(row => {
    return <TradeTableRow 
      key={row.id}
      symbol={row.symbol}
      price={row.price}
      amount={row.amount}
      cost={row.cost}
      time={row.time}
      orderType={row.orderType}
      side={row.side}
    />
  })
  
  return (

    <div className="trade-table">
      <h2>Trades</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Symbol</td>
            <td>Price</td>
            <td>Amount</td>
            <td>Cost</td>
            <td>Time</td>
            <td>Order Type</td>
            <td>Side</td>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </div>
  )
}
