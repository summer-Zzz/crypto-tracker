import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import CoinTable from "../components/CoinTable/CoinTable"
import "../components/CoinTable/CoinTable.scss"

const rows = [
  {
  id: 1, 
  coinLogo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=010",
  coinName: "Bitcoin",
  currentPrice: 59203.82,
  dayPerformance: "2.3%",
  weekPerformance: "10%",
  marketCap: 1105217718036,
  volume: 67366474410
  },
  {
  id: 2, 
  coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  coinName: "Bitcoin",
  currentPrice: 59203.82,
  dayPerformance: "2.3%",
  weekPerformance: "10%",
  marketCap: 1105217718036,
  volume: 67366474410
  },
  {
  id: 3, 
  coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  coinName: "Bitcoin",
  currentPrice: 59203.82,
  dayPerformance: "2.3%",
  weekPerformance: "10%",
  marketCap: 1105217718036,
  volume: 67366474410
  },
  {
  id: 4, 
  coinLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  coinName: "Bitcoin",
  currentPrice: 59203.82,
  dayPerformance: "2.3%",
  weekPerformance: "10%",
  marketCap: 1105217718036,
  volume: 67366474410
  },
]

storiesOf("CoinTable", module)
  .add("Populated", () => <CoinTable rows={rows} />)
