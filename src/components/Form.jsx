<<<<<<< HEAD
import React, { useEffect, useRef } from 'react'
import Parallax from 'parallax-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../components/Form.scss"
export default function Form(props) {
    const sceneEl = useRef(null);
    useEffect(() => {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
      })
      
      parallaxInstance.enable();
  
      return () => parallaxInstance.disable();
  
    }, [])
  
  return (
    <div className="form-back-container">
    <div id="scene" ref={sceneEl}>
      <img className="form-coins" src="/images/coins1.png" alt="coins" data-depth="1.5"/>
      <img className="form-coins" src="/images/coins2.png" alt="coins" data-depth="0.4"/>
    </div>
=======
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
>>>>>>> 57eb2bee957f21ec2f04e7732561b01ca8f83edd
    <div className="form-container">
      <form action="" method="POST">
      <h2 className="form-label">{props.formLabel}</h2>
      <div className="label-input">
      <FontAwesomeIcon icon={faUser} className="icon" />
        <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
        <input className="input-feild" type="text" name={props.firstLabel} placeholder="Enter your email"/>        
      </div>
        <br/>
      <div className="label-input">
      <FontAwesomeIcon icon={faLock} className="icon"/>
        <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
        <input type="text" name={props.firstLabel} placeholder="Enter your password"/>
      </div>
        <div className="button-container">
        <input type="submit" onClick={props.onClick} className="button"></input>
      </div>
      </form>
    </div>
    </div>
  )
}