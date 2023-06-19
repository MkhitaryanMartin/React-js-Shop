import React from "react";
import "./style.css"


export default function Input({
    type = "",
    classContainer = "",
    classInput = "",
    errorText = "",
    name = {},
}) {
    return (
        <label className={`input-container ${classContainer} ${errorText.includes("Pa") ? "height" : ""} `}>
            <span>
                {name?.name?.toUpperCase()}
                <i className={errorText ? "notValid" : "valid"}>*</i>
            </span>
            <input
                type={type ? type : "text"}
                className={`input ${classInput}}`}
                {...name}
            />
            <p className={errorText ? "errorText" : ""}>{errorText}</p>
        </label>
    )
}