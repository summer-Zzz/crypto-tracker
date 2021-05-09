import "../components/CoinTableRow.scss"

export default function CoinTableRow(props) {

  return (
    <tr>
      <td><img src={props.coinlogo} alt="coinlogo"/></td>
      <td>{props.coinName}</td>
      <td>{props.currentPrice}</td>
      <td>{props.dayPerformance}</td>
      <td>{props.weekPerformance}</td>
      <td>{props.marketCap}</td>
      <td>{props.volume}</td>
    </tr>
  )
}
