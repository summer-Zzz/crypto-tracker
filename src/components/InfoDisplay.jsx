import React from "react";
//import "components/InfoDisplay.scss";
import classNames from "classnames";
import "./InfoDisplay.scss"
import { sum } from "d3";

export default function InfoDisplay(props) {
  // const infodisplayClass = classNames("infodisplay", {
  //   "infodisplay--header": props.infoHeader,
  //   "infodisplay--content": props.infoContent
  // });

  const usBalance = props.balance.USDT.toFixed(2)

  console.log({props})
  const priceNow = props.currentPrice.price
  let costs = 0;
  let amounts = 0;
    for(let trade of props.trades) {
      costs += trade.cost;
      amounts += trade.amount;
    }

  const proLoss =((priceNow * amounts) - costs) /costs * 100


  return (
    <div className="info-display">
      <div className="balance">
        <p>Balance: {usBalance}</p>
      </div>
      <div className="profit-loss">
        <p>P&L: {proLoss}</p>
      </div>
    </div>
  )
}