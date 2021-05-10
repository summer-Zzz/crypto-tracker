import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import DisplayChart from "../components/Button"

storiesOf("DisplayChart", module)
  .add("Chart", () => (
    <Chart data={data} width={chart_width} height={chart_height} />
  ))


