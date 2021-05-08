import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Form from "../components/Form"

storiesOf("Form", module)
  .add("Register", () => <Form formLabel={'Register'} firstLabel={'email'} secondLabel={'password'}/>)
  .add("Login", () => <Form formLabel={'Login'} firstLabel={'email'} secondLabel={'password'}/>)

