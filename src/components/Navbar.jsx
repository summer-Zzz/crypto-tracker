import React from "react";
//import "components/Navbar.scss";
import classNames from "classnames";

//Component for navbar

export default function Navbar(props) {
  const navbarClass = classNames("navbar", {
    "navbar--title": props.title,
    "navbar--settings": props.settings,
    "navbar--login": props.login,
    "navbar--register": props.register,
    "navbar--tradetable": props.tradetable
  });

  return (
    <nav className="navbar">
      <h1>Crypto-Tracker</h1>
        <ul>
          <li><a href="#">Tradetable</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">tradetable</a></li>
        </ul>
    </nav>
  );
}
