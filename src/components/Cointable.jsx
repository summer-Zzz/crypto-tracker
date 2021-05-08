import CointableRow from "../components/CoinTableRow"

export default function Cointable(props) {

  const tableRows = props.rows.map(row => {
    return 
      <table>
        <CointableRow/>
      </table>
  })
}



 