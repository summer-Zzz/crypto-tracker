import React, { useState } from 'react'
import "./DropMenu.scss"
import DropDownItem from './DropDownItem'

export default function DropMenu(props) {

  const [currentOption, setOption] = useState('')
    function handleChange(event) {
    let value = event.target.value;
    setOption(value)
  }

  const options = props.options.map(option => {
    return <DropDownItem 
      key={option.id}
      name={option.name}
    />
  })

  return (
    <div>
      <div>
        <select onChange={handleChange} value={currentOption}>
          <DropDownItem 
            name={'Select option'}
          />
          {options}
        </select>
      </div>
    </div>
  )
}