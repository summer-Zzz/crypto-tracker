import React from 'react'

import "../components/Form.scss"
export default function Form(props) {

  return (
    <div className={"form-container"}>
      <form action="" method="POST">
      <h2>{props.formLabel}</h2>
        <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <input type="submit" onClick={props.onClick}></input>
      </form>
    </div>
  )
}