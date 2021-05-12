import React from "react";
import "./Button.scss";

//Component for submit/view buttons
export default function Button(props) {

  return (
    <button
      type={props.type}
      view={props.view}
    >
      {props.children}
    </button>
  );
}