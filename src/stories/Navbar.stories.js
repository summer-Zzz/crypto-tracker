import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Navbar from "../components/Navbar"

storiesOf("Navbar", module)
  .add("Title", () => <Navbar/>)
  .add("Settings", () => <Navbar/>)
  .add("Login", () => <Navbar/>)
  .add("Register", () => <Navbar/>)
 // "navbar--settings": props.settings,