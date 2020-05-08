import React from "react";
import "./chip.css";

import CancelIcon from '@material-ui/icons/Cancel';

const Chip = props => {
    const handleClick = event => {
        event.stopPropagation();
        props.onDelete();
    };

    return (
        <span className={`orange-chip ${props.state}`} onClick={props.onClick}>
            {props.children}
            {props.state === "active" ? (
                <CancelIcon className="icon-padding-left" onClick={handleClick} />
            ) : null}
        </span>
    );
};
export default Chip;
