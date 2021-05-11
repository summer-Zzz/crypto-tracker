import React from "react";
//import "components/InfoDisplay.scss";
import classNames from "classnames";

export default function InfoDisplay(props) {
  // const infodisplayClass = classNames("infodisplay", {
  //   "infodisplay--header": props.infoHeader,
  //   "infodisplay--content": props.infoContent
  // });

  return (
    <div>
         <h1>{props.infoHeader}</h1>
        <p>{props.infoContent}</p>
    </div>
  )
}