import React from 'react'
import "./MenuButton.scss"
export default function MenuButton(props) {

 return (
   <button onClick={() => props.setExchange(props.exchange)}>{props.exchange}</button>
 )
}