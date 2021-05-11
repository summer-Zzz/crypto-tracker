import React from 'react'
import "./MenuButton.scss"
export default function MenuButton(props) {

 return (
   <button onClick={() => props.setOption(props.option)}>{props.option}</button>
 )
}