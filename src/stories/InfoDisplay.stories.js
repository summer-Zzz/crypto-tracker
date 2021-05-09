import React from "react";
//import { Fragment } from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import InfoDisplay from "../components/InfoDisplay"

storiesOf("InfoDisplay", module)
  .add("InfoHeader", () => <h1>InfoHeader</h1>)
  .add("InfoContent", () => <p>InfoContent</p>)