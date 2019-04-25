
import React from "react";
import "./style.css";

//Title component receives two variables via the props system
function Title(props) {
    return (
        <div className="title text-center">
            {props.name}
            <h5>{props.details}</h5>
        </div>
    );
}

export default Title;