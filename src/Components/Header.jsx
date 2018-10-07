import React from "react";

const Header = (props) => (
  <div>
    <nav className="navbar">
        <span className="navbar-item">Clicky Game</span>
        <span className="navbar-item">Click an image to begin!</span>
        <span className="navbar-item">
          Score: {props.score} | Topscore: {props.topscore}
        </span>
    </nav>
  </div>
);

export default Header;