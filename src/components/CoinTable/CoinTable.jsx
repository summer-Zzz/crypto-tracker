
import CoinTableRow from "./CoinTableRow"
import Table from 'react-bootstrap/Table'
import DropMenu from "../DropDownMenu/DropMenu";
import "./CoinTable.scss";

export default function CoinTable(props) {

  const handleSelect = (symbol) => {
    props.setCoin(symbol)
  }

  const tableRows = props.rows.map((row, i) => {
    return <CoinTableRow
      key={i}
      symbol={row.coinSymbol}
      price={row.price}
      change={row.change}
      changePercent={row.changePercent}
      volume={row.volume}
      setCoin={handleSelect}
    />
  })
  return (
    <div className="coin-container">
      <div className="options">
      <lable className="option-lable">Filter</lable>
      <DropMenu 
        options={props.currencies} 
        setData={props.setFilter} 
        selectedVal={props.selectedFilter} 
      />
       <lable className="option-lable">Select Exchange</lable>
      <DropMenu 
        options={props.exchanges} 
        setData={props.setExchange} 
        selectedVal={props.selectedExchange} 
      />
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <td></td>
            <td>Coin</td>
            <td>Price</td>
            <td>24h</td>
            <td>24h%</td>
            <td>Volume (24h)</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="tbody">
          {tableRows}
        </tbody>
      </Table>
    </div>
  )
}
