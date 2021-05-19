import React from 'react'

const formatValue = (exchangeName) => {
   const capChar = exchangeName[0].toUpperCase()
   return capChar + exchangeName.slice(1)
}

export default function DropDownItem(props) {

 return (
    <option value={props.name}>{formatValue(props.name)}</option>
 )
}