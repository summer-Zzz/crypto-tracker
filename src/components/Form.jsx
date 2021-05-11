import React from 'react'

import Button from './Button'

import "../components/Form.scss"
export default function Form(props) {

  return (
    <div className={"form-container"}>
      <form action="POST">
      <h2>{props.formLabel}</h2>
        <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
        <input className="input-feild" type="text" name={props.firstLabel}/>
        <br/>
        <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
        <input className="input-feild" type="text" name={props.firstLabel}/>
        <br/>
        <div className="form-button">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}