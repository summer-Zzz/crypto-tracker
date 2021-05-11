import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Dashboard from "../components/Dashboard"

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

const timeframes = [
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

const trades = [
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  },
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  },
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  },
  {
    baseCurrency: 'BTC',
    quoteCurrency: 'USD',
    time: 1620331915827, // trade transaction time (milliseconds)
    side: 'buy', // side: buy or sell
    orderType: 'limit', // order type
    price:  54240.09, // unit price
    cost:  19.960353, // amount spent on coin 
    amount:  0.000368 // amount of coin received
  }
]

const balance = {
  BTC: 0.25588023,
  USDT: 17422.2849681,
  ETH: 0.19851129,
  XRP: 70.929,
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
  DOGE: 324.675,
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
  LUNA: 0
}

storiesOf("Dashboard", module)
  .add("Chart", () => (
    <Dashboard exchanges={exchanges} timeframes={timeframes} currencies={currencies} trades={trades} balance={balance} />
  ))
