import React from 'react'
import { useState} from 'react'

import "../components/Form.scss"
export default function Form(props) {
  const[user, setUser] = useState({
    email:"",
    password: ""
  })

  const handleSubmit = event => {
    event.preventDefault()
    props.handleLogin(user)
  }

  const handleChange = event => {
    setUser({...user, [event.target.name]:event.target.value})
  }


  return (
    // // <form onSubmit={handleLogin}>
    // //   <input type="text" name="email" value={user.email} onChange={handleChange} />
    // //   <input type="password" name="password" value={user.password} onChange={handleChange} />
    // // </form>

    // // <div className={"form-container"}>
    //   <form onSubmit={handleSubmit} action="POST">
    //   <h2>{props.formLabel}</h2>
    //     <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
    //     <input type="text" name="email" value={user.email} onChange={handleChange} />
    //     <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
    //     <input type="password" name="password" value={user.password} onChange={handleChange} />
    //     <Button>Submit</Button>
    //   </form>
    // // </div>
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