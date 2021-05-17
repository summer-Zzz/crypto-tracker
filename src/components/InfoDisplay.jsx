import React from "react";
//import "components/InfoDisplay.scss";
import classNames from "classnames";
import "./InfoDisplay.scss"

export default function InfoDisplay(props) {

  return (
    <div className="info-text">
      <h2 className="info-header">{props.infoHeader}</h2>
      <p className="info-content">{props.infoContent}</p>
    </div>
  )
}