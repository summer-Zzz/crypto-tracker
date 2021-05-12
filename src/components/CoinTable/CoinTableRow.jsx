import "../components/CoinTableRow.scss"

export default function CoinTableRow(props) {

  return (
    <tr>
      <td><img src={props.coinlogo} alt="coinlogo"/></td>
      <td>{props.coinName}</td>
      <td>{props.currentPrice}</td>
      <td>{props.performance}</td>
      <td>{props.performancePercent}</td>
      <td>{props.volume}</td>
    </tr>
  )
}
