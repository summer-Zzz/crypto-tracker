import React from 'react'

import Button from './Button'

import "../components/Form.scss"
export default function Form(props) {

  return (
    <div className={"form-container"}>
      <form action="POST">
      <h2>{props.formLabel}</h2>
        <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <Button>Submit</Button>
      </form>
    </div>
  )
}