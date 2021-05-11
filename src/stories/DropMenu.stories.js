import React from "react";
//import { Fragment } from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import DropMenu from "../components/DropDownMenu/DropMenu"

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

storiesOf("DropMenu", module)
  .add("With Exchanges", () => <DropMenu options={exchanges} />)
  .add("With Timeframes", () => <DropMenu options={timePeriods} />)
  .add("With Currencies", () => <DropMenu options={currencies} />)
