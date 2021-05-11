import React, { useState } from 'react'
import MenuButton from "./MenuButton"

import './DropMenu.scss'
export default function MenuCard(props) {

  const [currentOption, setOption] = useState('Select option')
  const [menuState, setMenuState] = useState(false)

  function handleBlur() {
    setMenuState(false)
  }

  const options = props.options.map(option => {
    return <MenuButton 
      key={option.id}
      setOption={setOption}
      option={option.name}
    />
  })

  return (
    <div>
      <div  className="dropdown-menu">
        <button onClick={() => setMenuState(true)}>
          {currentOption}
        </button>
      </div>
       {menuState && 
      <div className="dropdown-menu" onClick={() => handleBlur()}>
        {options}
      </div>
    }
    </div>
  )
}