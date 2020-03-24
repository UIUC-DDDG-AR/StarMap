import React from "react";
import "./cardView.css";

const CardView = (props) => {
    return (
        <div className="cardView">
            <h1>{props.title}</h1>
            <div className="cardContent">
                <img src={props.src}></img>
                <span>{props.children}</span>
            </div>
        </div>
    );
}
export default CardView;
