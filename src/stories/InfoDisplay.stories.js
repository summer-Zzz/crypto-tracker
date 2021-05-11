import React from "react";
//import { Fragment } from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import InfoDisplay from "../components/InfoDisplay"

const balance = 
{ BTC: 0.51841756,
  USDT: 3530.47906817,
  ETH: 0,
  XRP: 0,
  LINK: 0,
  XTZ: 0,
  LTC: 0,
  ADA: 0,
  TRX: 0,
  ONT: 0,
  BCH: 0,
  NEO: 0,
  EOS: 0,
  COMP: 0,
  YFI: 0,
  ALGO: 0,
  DOT: 0,
  UNI: 0,
  AAVE: 0,
  DOGE: 869.13,
  BAT: 0,
  CHZ: 0,
  MANA: 0,
  ENJ: 0,
  SUSHI: 0,
  SNX: 0,
  GRT: 0,
  MKR: 0,
  VET: 0,
  ZEC: 0,
  FIL: 0,
  KSM: 0,
  XMR: 0,
  QTUM: 0,
  XLM: 0,
  ATOM: 0,
  LUNA: 0 }

  const currentPrice = 
  {
    symbol:  'BTC/USDT',
    price:  55967.82
  }


  const trades = [
    {
      time: 1620408663304,
      marketPrice:  54241.17,
      cost: 646.934435,
      amount: 0.011927
    },
    {
      time: 1620408663304,
      marketPrice:  54241.36,
      cost: 353.057012,
      amount: 0.006509
    },
    {
      time: 1620738816423,
      marketPrice:  54240.91,
      cost: 9.980327,
      amount: 0.000184
    }
  ]

storiesOf("InfoDisplay", module)
  .add("Balance", () => <InfoDisplay balance={balance} currentPrice={currentPrice} trades={trades}/>)  