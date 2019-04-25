import React from "react";
import "./style.css";

//MemoryCard component recieves onClick callback using props
function MemoryCard(props) {
  return (
    <div className="card mb-4" onClick={() => props.countClicks(props.id)}>
      <div className="img-container" style={{width: '300px'}} >
        <img alt='Pixar Characters' src={props.image} style={{width: '300px', height: '205px'}}/>
      </div>
    </div>
  );
}

export default MemoryCard;