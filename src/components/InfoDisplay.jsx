import React from "react";
import "./InfoDisplay.scss"

export default function InfoDisplay(props) {

  return (
    <div className="info-page-container">
      <div className="info-text">
        <h2 className="info-header">{props.infoHeader}</h2>
        <p className="info-content">{props.infoContent}</p>
      </div>
    </div>
  )
}