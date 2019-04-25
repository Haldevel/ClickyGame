import React from "react";
import "./style.css";

//Wrapper component will contain a list of MemoryCard components
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
