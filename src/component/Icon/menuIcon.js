import React from "react";
import "./style.css";

export default function MenuIcon({
    width,
    height,
    primary,
    secondary,
    click,
}) {
    return (
        <div onClick={click} className="icon">
            <lord-icon
                src="https://cdn.lordicon.com/jtqpkhoh.json"
                trigger="click"
                colors={`primary:${primary || "#121331"},secondary:${secondary || "#0008ff"}`}
                style={{
                    width: (width || 40),
                    height: (height || 40)
                }}>
            </lord-icon>
        </div>
    )
}


