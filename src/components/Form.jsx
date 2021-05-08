import React from 'react'

import Button from './Button'

import "../components/Form.scss"
export default function Form(props) {

  return (
    <div className={'form-container'}>
      <h2>{props.formLabel}</h2>
      <form action="POST">
        <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <Button></Button>
      </form>
    </div>
  )
}