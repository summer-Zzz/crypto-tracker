
import "./CoinTableRow.scss"

export default function CoinTableRow(props) {
console.log('coinlogo', props.coinLogo)
  return (
    <tr onClick={() => props.setCoin(props.symbol)}>
      <td className="coin-td"><img className='coin-logo' src={props.coinLogo} alt="coinlogo"/></td>
      <td className="coin-column">{props.symbol}</td>
      <td className="price">{props.price}</td>
      <td className="coin-td">{props.change}</td>
      <td className="coin-td">{props.changePercent}</td>
      <td className="coin-td">{props.volume.toFixed(2)}</td>
      <td><button className="coin-button" onClick={() => props.setCoin(props.symbol)}>Select Coin</button></td>
    </tr>
  )
}
