import React, { useState } from 'react'
import MenuButton from "./MenuButton"

export default function DropMenu(props) {

  const [currentOption, setOption] = useState('Select option')
  const [menuState, setMenuState] = useState(false)
  const onClick = () => setMenuState(!menuState)
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
    <div className="dropdown-menu">
      <div>
        <button onClick={onClick}>
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