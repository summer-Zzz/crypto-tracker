import React, { useState } from 'react'
import "./DropMenu.scss"
import DropDownItem from './DropDownItem'

export default function DropMenu(props) {

  const [currentOption, setOption] = useState('');

  const handleChange = (event) => {
    let value = event.target.value;
    setOption(value)
    props.setData(event.target.value)
  }

  const options = props.options.map(option => {
    return <DropDownItem 
      key={option.id}
      name={option.name}
    />
  })

  return (
      <div className="select">
        <select onChange={handleChange} value={currentOption}>
          <DropDownItem 
            name={'Select option'}
          />
          {options}
        </select>
      </div>
  )
}