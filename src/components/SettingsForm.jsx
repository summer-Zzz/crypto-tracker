import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Parallax from 'parallax-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from "@fortawesome/free-solid-svg-icons";

import './SettingsForm.scss';

export default function SettingsForm(props) {

const [apiKey, setApiKey] = useState(null)
const [secret, setSecret] = useState(null)
const [exchange, setExchange] = useState(null)

const handleCreateAccount = async () => {
  const account = await axios.post('http://localhost:3001/api/users/exchanges/new', { userId: 1, exchangeId: 1, apiKey, apiSecret: secret })
}

const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();

  }, [])

  return (
    <div className="form-all-container">
      <div id="scene" ref={sceneEl}>
        <img className="form-coins" src="/images/coins1.png" alt="coins" data-depth="1.5" />
        <img className="form-coins" src="/images/coins2.png" alt="coins" data-depth="0.4" />
      </div>
      <div className="form-container">
      <h2>{props.formLabel}</h2>
        <label className="exchange-label" htmlFor="exchange">Exchange:</label> 
        <select className="exchange-select" value={exchange} onChange={(e) => setExchange(e.target.value)}>
          <option value="Phemex">Phemex</option>
          <option value="Binance">Binance</option>
          <option value="Kraken">Kraken</option>
          <option value="Bitmex">Bitmex</option>
        </select>
        <div className="label-input">
          <FontAwesomeIcon icon={faKey} className="icon" />
          <label className="form-label" htmlFor='api-key'>API Key:</label>
          <input className="input-feild" type="text" name="api-key" value={apiKey} placeholder='Enter your API key' onChange={(e) => setApiKey(e.target.value)}/>
        </div>
        <div className="label-input">
          <FontAwesomeIcon icon={faKey} className="icon" />
          <label htmlFor='secret-key'>Secret Key:</label>
          <input type="text" name="secret-key" value={secret} placeholder='Enter your API secret key' onChange={(e) => setSecret(e.target.value)}/>
        </div>
        <div className="button-container">
        <button onClick={handleCreateAccount} className="button">Submit</button>
        </div>
      </div>
    </div>
  )
}
