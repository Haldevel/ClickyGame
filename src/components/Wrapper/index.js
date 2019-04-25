import React from "react";
import "./style.css";

//Wrapper component will contain a list of MemoryCard components
function Wrapper(props) {
  return <div className="wrapper" style={{width: '80%'}}>{props.children}</div>;
}

export default Wrapper;
