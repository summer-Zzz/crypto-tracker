import React from 'react'
import "./DropMenu.scss"
import DropDownItem from './DropDownItem'

export default function DropMenu(props) {

  function handleChange(e) {
    props.setData(e.target.value);
  }

  const options = props.options.map(option => {
    return <DropDownItem 
      key={option.id}
      name={option.name}
    />
  })

  return (
      <div className="select">
        <select onChange={(e) => handleChange(e)}>
          <DropDownItem 
            name={props.selectedVal}
          />
          {options}
        </select>
      </div>
  )
}

