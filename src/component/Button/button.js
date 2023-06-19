import React from "react";
import "./style.css"

export default function Button({
    type = "",
    mode = "",
    onClick,
    disabled = false,
    style = {},
    children
}) {
    return (
        <button
            type={type || "button"}
            className={disabled ? "disabled blue-button" : mode || "blue-button"}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    )
}