import React, { useEffect, useRef, useState } from 'react'
import Parallax from 'parallax-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../components/Form.scss"
export default function Form(props) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const userData = {
    email,
    password,
    dataType: props.formLabel.toLowerCase()
  }
  
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();

  }, [])

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="form-all-container">
      <div id="scene" ref={sceneEl}>
        <img className="form-coins" src="/images/coins1.png" alt="coins" data-depth="1.5" />
        <img className="form-coins" src="/images/coins2.png" alt="coins" data-depth="0.4" />
      </div>
      <div className="form-container">
        <form action="" method="POST" onSubmit={(event) => {
          event.preventDefault()
          props.handleSubmit(userData)
        }
        }>
          <h2 className="form-label">{props.formLabel}</h2>
          <div className="label-input">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <label htmlFor={props.firstLabel}>{props.firstLabel}</label>
            <input className="input-feild" type="text" name={props.firstLabel} placeholder="Enter your email" onChange={(e) => handleEmailChange(e)} />
          </div>
          <br />
          <div className="label-input">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <label htmlFor={props.secondLabel}>{props.secondLabel}</label>
            <input type="text" name={props.firstLabel} placeholder="Enter your password" onChange={(e) => handlePasswordChange(e)} />
          </div>
          <div className="button-container">
            <input type="submit" onSubmit={(event) => props.handleSubmit(userData)} className="button"></input>
          </div>
        </form>
    </div >
    </div>
  )
}