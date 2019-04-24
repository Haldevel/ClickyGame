import React from "react";
import "./style.css";

function MemoryCard(props) {
  return (
    <div className="card mb-4">
      <div className="img-container mb-4" width='300px'>
        <img alt='Pixar Characters' src={props.image} width='300px'/>
      </div>
      <div className="content">
      </div>
      <span onClick={() => props.removeCard(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default MemoryCard;