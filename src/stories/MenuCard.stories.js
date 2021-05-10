import React from "react";
//import { Fragment } from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import MenuCard from "../components/MenuCard"

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

storiesOf("MenuCard", module)
  .add("With Exchanges", () => <MenuCard exchanges={exchanges} />)
