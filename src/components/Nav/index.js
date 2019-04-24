import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game</a>
      <div className="ml-auto">
      <div className="navbar-brand">Score: {props.score} | Top Socore: {props.topscore}</div>
      </div>
    </nav>
  );
}

export default Nav;