import React from "react";
//import "components/InfoDisplay.scss";
import classNames from "classnames";

export default function InfoDisplay(props) {
  const infodisplayClass = classNames("infodisplay", {
    "infodisplay--header": props.infoHeader,
    "infodisplay--content": props.infoContent
  });

  return (
    <div>
      className={infodisplayClass}
      <div>
         <h1>{props.InfoHeader}</h1>
        <p>{props.InfoContent}</p>
      </div>
    </div>
  )
}