import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import CoinTable from "../components/Cointable"

storiesOf("CoinTable", module)
  .add("Populated", () => <CoinTable/>)
