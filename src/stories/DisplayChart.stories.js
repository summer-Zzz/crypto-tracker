import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import DisplayChart from "../components/DisplayChart"

storiesOf("DisplayChart", module)
  .add("Chart", () => (
    <DisplayChart />
  ))


