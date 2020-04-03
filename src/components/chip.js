import React from "react";
import "./chip.css";

const Chip = props => {
    const handleClick = event => {
        event.stopPropagation();
        props.onDelete()
    };

    return (
        <span className={`orange-chip ${props.state}`} onClick={props.onClick}>
            {props.children}
            {props.state === "active" ? <svg height="20" width="28">
                <g
                    className="orange-chip-svg"
                    fill="black"
                    onClick={handleClick}
                >
                    <circle cx="60%" cy="50%" r="10" />
                    <text
                        x="60%"
                        y="50%"
                        textAnchor="middle"
                        fill="white"
                        strokeWidth="1"
                        dy=".27em"
                        fontSize="20px"
                    >
                        &times;
                    </text>
                </g>
            </svg> : null}
        </span>
    );
};
export default Chip;
