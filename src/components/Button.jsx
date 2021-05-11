import React from "react";
// import "components/Button.scss";
import classNames from "classnames";

//Component for submit/view buttons
export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--submit": props.submit,
    "button--view": props.view,
  });

  return (
    <button 
      className={buttonClass}
      submit={props.submit}
      view={props.view}
    >
      {props.children}
    </button>
  );
}