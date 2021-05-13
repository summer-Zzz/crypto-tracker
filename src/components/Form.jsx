import React from 'react'

import "../components/Form.scss"
export default function Form(props) {

  return (
    <div className="form-container">
      <form action="" method="POST">
      <h2 className="form-lable">{props.formLabel}</h2>
      <div className="lable-input">
        <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
        <input className="input-feild" type="text" name={props.firstLabel}/>
      </div>
        <br/>
      <div className="lable-input">
        <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
        <input type="text" name={props.firstLabel}/>
      </div>
        <div className="button-container">
        <input type="submit" onClick={props.onClick} className="button"></input>
      </div>
      </form>
    </div>
  )
}