import React from "react";
import "./card.css";

const Card = props => {
    return (
        <div className={["card", props.orient, props.extra].join(" ")}>
            <img src={props.img} alt=""></img>
            <h2>{props.title}</h2>
            <span>{props.children}</span>
        </div>
    );
};
export default Card;
