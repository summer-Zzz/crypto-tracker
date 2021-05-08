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
      onClick={props.onClick}
      disabled={props.disabled}
    >I am button
      {props.children}
    </button>
  );
 //return <button>I am button</button>
}

// import React from 'react';

// var buttonStyle = {
//   margin: '10px 10px 10px 0'
// };

// var Button = React.createClass({
//   render: function () {
//     return (
//       <button
//         className="btn btn-default"
//         style={buttonStyle}
//         onClick={this.props.handleClick}>{this.props.label}</button>
//     );
//   }
// });