
import "./CoinTableRow.scss"

export default function CoinTableRow(props) {

  return (
    <tr onClick={() => props.setCoin(props.symbol)}>
      <td className="coin-td"><img src={props.coinlogo} alt="coinlogo"/></td>
      <td className="coin-column">{props.symbol}</td>
      <td className="price">{props.price}</td>
      <td className="coin-td">{props.change}</td>
      <td className="coin-td">{props.changePercent}</td>
      <td className="coin-td">{props.volume}</td>
    </tr>
  )
}
