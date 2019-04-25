import React from "react";

//the code to create Nav bar component and pass three variables using props
function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#0e8ff8"}}>
      <a className="navbar-brand" href="/" style={{fontSize: '1.8rem'}}>{props.result}
      </a>
      <div className="navbar-brand ml-auto" style={{fontSize: '1.8rem'}}>Score: {props.score} | Top Score: {props.topscore}</div>
    </nav>
  );
}

export default Nav;