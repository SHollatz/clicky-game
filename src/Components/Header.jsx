import React from "react";

const Header = (props) => (
  <div className="Header">
    <nav className="navbar">
        <span className="navbar-item">Clicky Game</span>
        <span className="navbar-item">{props.message}</span>
        <span className="navbar-item">
          Score: {props.score} | Topscore: {props.topscore}
        </span>
    </nav>
  </div>
);

export default Header;