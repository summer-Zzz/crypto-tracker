import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "../components/Button"

storiesOf("Button", module)
  .add("Submit", () => (
    <Button onClick={action("button-clicked")}>Submit</Button>
  ))
  .add("View", () => (
    <Button disabled onClick={action("button-clicked")}>View</Button>
  ));