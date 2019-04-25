import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand divlocat" href="/">{props.result}
      </a>
      <div className="navbar-brand ml-auto divlocat">Score: {props.score} | Top Socore: {props.topscore}</div>
    </nav>
  );
}

export default Nav;