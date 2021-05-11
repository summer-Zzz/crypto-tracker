import React from "react";
//import "components/InfoDisplay.scss";
import classNames from "classnames";
import "./InfoDisplay.scss"
import { sum } from "d3";

export default function InfoDisplay(props) {

  return (
    <div>
      <h2>{props.infoHeader}</h2>
      <p>{props.infoContent}</p>
    </div>
  )
}