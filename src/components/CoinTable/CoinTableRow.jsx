
import "./CoinTableRow.scss"

export default function CoinTableRow(props) {

  return (
    <tr onClick={() => props.setCoin(props.symbol)}>
      <td><img src={props.coinlogo} alt="coinlogo"/></td>
      <td>{props.symbol}</td>
      <td>{props.price}</td>
      <td>{props.change}</td>
      <td>{props.changePercent}</td>
      <td>{props.volume}</td>
    </tr>
  )
}
