import React from "react";
//import { Fragment } from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import InfoDisplay from "../components/InfoDisplay"

storiesOf("InfoDisplay", module)
  .add("Balance", () => <InfoDisplay infoHeader={'Balance'} infoContent={'0.85452'}/>)
  .add("P&L", () => <InfoDisplay infoHeader={'P&L'} infoContent={'+25%'}/>)
  