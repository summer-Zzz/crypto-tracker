import CoinTableRow from "./CoinTableRow"
import "./CoinTable.scss";

export default function CoinTable(props) {

  const tableRows = props.rows.map(row => {
    return <CoinTableRow
      key={row.id}
      coinLogo={row.coinLogo}
      coinName={row.coinName}
      currentPrice={row.currentPrice}
      performance={row.dayPerformance}
      performancePercent={row.weekPerformance}
      volume={row.volume}
    />
  })
  return (
    <table className="table">
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
    </table>
  )
}
