import React from "react";
import "./style.css"

export default function Auto({
    text = ""
}) {
    return (
        <div className="auto-block">
            <p>{text}</p>
            <div className="loop-wrapper">
                <div className="mountain"></div>
                <div className="hill"></div>
                <div className="tree"></div>
                <div className="tree"></div>
                <div className="tree"></div>
                <div className="rock"></div>
                <div className="truck"></div>
                <div className="wheels"></div>
            </div>
        </div>
    )
}
