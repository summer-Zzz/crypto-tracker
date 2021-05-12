import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import SettingsForm from '../components/SettingsForm'

storiesOf("SettingsMenu", module)
  .add("Enter new Exchange", () => (
    <SettingsForm onSubmit={() =>action("clicked")}/>
  ))