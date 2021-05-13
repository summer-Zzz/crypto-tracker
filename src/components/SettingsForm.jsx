import React, {useState} from 'react'

export default function SettingsForm(props) {

const [apiKey, setApiKey] = useState(null)
const [secret, setSecret] = useState(null)
const [exchange, setExchange] = useState(null)

  return (
    <div className={"form-container"}>
      <form method="POST">
      <h2>{props.formLabel}</h2>
        <label htmlFor="exchange">Exchange</label> 
        <select value={exchange} onChange={(e) => setExchange(e.target.value)}>
          <option value="Phemex">Phemex</option>
          <option value="Binance">Binance</option>
          <option value="Kraken">Kraken</option>
          <option value="Bitmex">Bitmex</option>
        </select>
        <label htmlFor='api-key'>API Key</label>
        <input type="text" name="api-key" value={apiKey} onChange={(e) => setApiKey(e.target.value)}/>
        <label htmlFor='secret-key'>Secret Key</label>
        <input type="text" name="secret-key" value={secret} onChange={(e) => setSecret(e.target.value)}/>
        <div className="button-container">
        <input type="submit" onSubmit={(e) => props.addExchange(exchange, apiKey, secret)} className="button"></input>
        </div>
      </form>
    </div>
  )
}
