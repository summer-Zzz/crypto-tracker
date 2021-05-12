import React from 'react'
export default function MenuButton(props) {

 return (
    <button className="menu-button" onClick={() => props.setOption(props.option)}>{props.option}</button>
 )
}