import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Parallax from 'parallax-js';
import './SettingsForm.scss';

export default function SettingsForm(props) {

const [apiKey, setApiKey] = useState(null)
const [apiSecret, setApiSecret] = useState(null)
const [exchange, setExchange] = useState("Binance")

const handleExchange = (event) => {
  setExchange(event.target.value)
}
const handleApiKey = (event) => {
  setApiKey(event.target.value)
}
const handleSecret = (event) => {
  setApiSecret(event.target.value)
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
        <label htmlFor="exchange">Exchange</label> 
        <select value={exchange} onChange={(e) => handleExchange(e)}>
          <option value="Phemex">Phemex</option>
          <option value="Binance">Binance</option>
          <option value="Kraken">Kraken</option>
          <option value="Bitmex">Bitmex</option>
          <option value="BitBuy">BitBuy</option>
          <option value="BitMap">BitMap</option>
          <option value="CoinSquare">CoinSquare</option>
          <option value="AAX">AAX</option>
        </select>
        <label htmlFor='api-key'>API Key</label>
        <input type="text" name="api-key" value={apiKey} onChange={(e) => handleApiKey(e)}/>
        <label htmlFor='secret-key'>Secret Key</label>
        <input type="text" name="secret-key" value={apiSecret} onChange={(e) => handleSecret(e)}/>
        <div className="button-container">
        <button onClick={() => props.handleAddAccount(1, exchange, apiKey, apiSecret)} className="button">Submit</button>
        </div>
      </div>
    </div>
  )
}
