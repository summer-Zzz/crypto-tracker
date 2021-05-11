import React from "react";
//import "components/InfoDisplay.scss";
import classNames from "classnames";
import "./InfoDisplay.scss"
import { sum } from "d3";

export default function InfoDisplay(props) {

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
    <div>
      <h2>{props.infoHeader}</h2>
      <p>{props.infoContent}</p>
    </div>
  )
}