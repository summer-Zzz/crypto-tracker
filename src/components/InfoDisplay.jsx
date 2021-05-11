import React from "react";
//import "components/InfoDisplay.scss";
import classNames from "classnames";
import "./InfoDisplay.scss"

export default function InfoDisplay(props) {
  // const infodisplayClass = classNames("infodisplay", {
  //   "infodisplay--header": props.infoHeader,
  //   "infodisplay--content": props.infoContent
  // });
  const usBalance = props.balance.USDT.toFixed(2)

  return (
    <div className="info-display">
      <div className="balance">
        <p>Balance: {usBalance}</p>
      </div>
      <div className="profit-loss">
        <p>P&L: </p>
      </div>
    </div>
  )
}