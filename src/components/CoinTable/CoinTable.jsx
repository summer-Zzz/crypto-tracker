import CoinTableRow from "./CoinTableRow"
import Table from 'react-bootstrap/Table'
import "./CoinTable.scss";

export default function CoinTable(props) {

  const tableRows = props.rows.map(row => {
    return <CoinTableRow
      key={row.symbol}
      symbol={row.symbol}
      price={row.price}
      change={row.change}
      changePercent={row.changePercent}
      volume={row.volume}
    />
  })
  return (
    <div className="coin-container">
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
