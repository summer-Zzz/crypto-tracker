import React, { useState } from 'react'
import MenuButton from "./MenuButton"

import './MenuCard.scss'
export default function MenuCard(props) {

  const [currentExchange, setExchange] = useState('Select exchange')
  const [menuState, setMenuState] = useState(false)

  // document.addEventListener('click', () => setMenuState(false))
  function handleBlur() {
    setMenuState(false)
  }


  const exchanges = props.exchanges.map(exchange => {
    return <MenuButton 
      key={exchange.id}
      setExchange={setExchange}
      exchange={exchange.name}
    />
  })

  return (
    <div>
      <div  className="dropdown-menu">
        <button onClick={() => setMenuState(true)}>
          {currentExchange}
        </button>
      </div>
       {menuState && 
      <div className="dropdown-menu" onClick={() => handleBlur()}>
        {exchanges}
      </div>
    }
    </div>
  )
}