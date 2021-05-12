import "../components/TradeTableRow.scss"

export default function TradeTableRow(props) {

  return (
      <tr>
        <td>{props.tradeTime}</td>
        <td>{props.tradeType}</td>
        <td>{props.tradeOrder}</td>
        <td>{props.tradePrice}</td>
        <td>{props.tradeAmount}</td>
      </tr>
  )
}