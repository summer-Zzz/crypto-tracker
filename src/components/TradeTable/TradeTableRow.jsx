import "./TradeTableRow.scss"

export default function TradeTableRow(props) {
  const d = new Date(props.time)
  const date = d.toLocaleString();
  return (
      <tr>
        <td className="coin-column">{props.symbol}</td>
        <td>{props.price}</td>
        <td>{props.amount}</td>
        <td>{props.cost}</td>
        <td>{date}</td>
        <td>{props.orderType}</td>
        <td>{props.side}</td>
      </tr>
  )
}