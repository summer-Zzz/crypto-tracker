import { useState } from "react"
import CoinTableRow from "./CoinTableRow"
import Table from 'react-bootstrap/Table'
import DropMenu from "../DropDownMenu/DropMenu";
import "./CoinTable.scss";

export default function CoinTable(props) {

  const handleSelect = (symbol) => {
    props.setCoin(symbol)
  }

  const tableRows = props.rows.map(row => {
    return <CoinTableRow
      key={row.symbol}
      symbol={row.symbol}
      price={row.price}
      change={row.change}
      changePercent={row.changePercent}
      volume={row.volume}
      setCoin={handleSelect}
    />
  })
  return (
    <div className="coin-container">
      <lable className="option-lable">Select Currency:</lable>
      <DropMenu options={props.currencies} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <td></td>
            <td>Coin</td>
            <td>Price</td>
            <td>24h</td>
            <td>24h%</td>
            <td>Volume (24h)</td>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </div>
  )
}
