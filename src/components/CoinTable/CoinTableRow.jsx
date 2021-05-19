import "./CoinTableRow.scss"

const addDollarSign = (num) => {
  if (num < 0) {
    num = num * -1;
    return `-$${num.toFixed(2)}`;
  } else {
    return `$${num.toFixed(2)}`;
  }
}

export default function CoinTableRow(props) {

  console.log(props.change)
  return (
    <tr onClick={() => props.setCoin(props.symbol)}>
      <td className="coin-td"><img className='coin-logo' src={props.coinLogo} alt="coinlogo"/></td>
      <td className="coin-column">{props.symbol}</td>
      <td className="price">${props.price.toFixed(2)}</td>
      <td className="coin-td">{addDollarSign(props.change)}</td>
      <td className="coin-td">{props.changePercent}%</td>
      <td className="coin-td">{props.volume.toFixed(2)}</td>
      <td><button className="coin-button" onClick={() => props.setCoin(props.symbol)}>Select Coin</button></td>
    </tr>
  )
}
