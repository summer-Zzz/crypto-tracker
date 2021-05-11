import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Dashboard from "../components/Dashboard"

storiesOf("Dashboard", module)
  .add("Chart", () => (
    <Dashboard />
  ))
