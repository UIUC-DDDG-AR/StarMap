import React from "react";
import "./card.css";

const Card = props => {
    return (
        <div className={["card", props.orient, props.extra].join(" ")}>
            <img src={props.img}></img>
            <h1>{props.title}</h1>
            <span>{props.children}</span>
        </div>
    );
};
export default Card;
