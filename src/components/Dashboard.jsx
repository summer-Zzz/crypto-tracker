import React from 'react'
import DropMenu from './DropDownMenu/DropMenu'
import InfoDisplay from './InfoDisplay'
import TradeTable from "./TradeTable"
import DisplayChart from "./Candlestick/DisplayChart"
import "./Dashboard.scss"

export default function Dashboard() {
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

  const exchanges = [
    {
      id: 1,
      name: 'kraken',
    },
    {
      id: 1,
      name: 'binance',
    },
    {
      id: 1,
      name: 'phemex',
    },
    {
      id: 1,
      name: 'bitmex',
    }
  ]
  
  const timePeriods = [
    {
      id: 1,
      name: '5 minutes'
    },
    {
      id: 2,
      name: '30 minutes'
    },
    {
      id: 3,
      name: '1 hour'
    },
    {
      id: 4,
      name: '12 hours'
    },
    {
      id: 5,
      name: '24 hours'
    },
    {
      id: 5,
      name: '1 week'
    },
    {
      id: 6,
      name: '1 month'
    }
  ]
  
  const currencies = [
    {
      id: 1,
      name: "CAD"
    },
    {
      id: 2,
      name: "USD"
    },
    {
      id: 3,
      name: "EUR"
    },
    {
      id: 4,
      name: "AUD"
    },
    {
      id: 5,
      name: "CNY"
    },
    {
      id: 6,
      name: "SGD"
    }
  ]

  const rows = [
    {
    id: 1, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
    {
    id: 2, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
    {
    id: 3, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
    {
    id: 4, 
    tradeTime: "2021-08-17 12:42",
    tradeType: "Buy",
    tradeOrder: "Limit",
    tradePrice: 59203.82,
    tradeAmount: 0.0855208
    },
  ]  
  
  return (
    <div className="dashboard">
      <div className="leftside">
        <DisplayChart />
      </div>
      <div classname="right-side">
        <div className="dropdown">
          <DropMenu options={exchanges}/>
          <DropMenu options={timePeriods}/>
          <DropMenu options={currencies}/>
        </div>
        <div>
          <InfoDisplay balance={balance}/>
        </div>
        <div>
          <TradeTable rows={rows} />
        </div>
      </div>
    </div>
  )

}