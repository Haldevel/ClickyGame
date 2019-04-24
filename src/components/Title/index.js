
import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="title text-center">
            {props.name}
            <h5>{props.details}</h5>
        </div>
    );
}

export default Title;