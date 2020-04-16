import React from "react";
import "./chip.css";

const Chip = props => {
    const handleClick = event => {
        event.stopPropagation();
        props.onDelete();
    };

    return (
        <span className={`orange-chip ${props.state}`} onClick={props.onClick}>
            {props.children}
            {props.state === "active" ? (
                <span class="material-icons md-24 icon-padding-left" onClick={handleClick}>
                cancel
                </span>
            ) : null}
        </span>
    );
};
export default Chip;
