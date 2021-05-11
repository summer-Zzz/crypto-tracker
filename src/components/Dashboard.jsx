import React from 'react'
import DropMenu from './DropDownMenu'
import InfoDisplay from './InfoDisplay'

export default function Dashboard() {

  return (
    <div>
      <div className="chart"></div>
      <div>
        <DropMenu />
        <DropMenu />
        <DropMenu />
      </div>
      <InfoDisplay infoHeader={'Balance'} infoContent={'0.85452'}/>
      <InfoDisplay infoHeader={'P%L'} infoContent={'+25%'}/>
    </div>
  )

}