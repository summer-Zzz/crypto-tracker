import "./TradeTableRow.scss"

export default function TradeTableRow(props) {

  return (
      <tr>
        <td>{props.symbol}</td>
        <td>{props.price}</td>
        <td>{props.amount}</td>
        <td>{props.cost}</td>
        <td>{props.time}</td>
        <td>{props.orderType}</td>
        <td>{props.side}</td>
      </tr>
      
  )
}