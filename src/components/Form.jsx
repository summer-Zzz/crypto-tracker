import React from 'react'

import Button from './Button'
export default function Form(props) {

  return (
    <div>
      <h2>{props.formLabel}</h2>
      <form action="POST">
        <label for={props.firstLabel}>{props.firstLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <label for={props.secondLabel}>{props.secondLabel}</label>
        <input type="text" name={props.firstLabel}/>
        <Button></Button>
      </form>
    </div>
  )
}