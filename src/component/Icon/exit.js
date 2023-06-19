import React from "react";
import "./style.css";

export default function ExitIcon({
        width, 
        height,
        primary,
        secondary,
        click,
    }){
    return(
        <div onClick={click} className="icon">
            <lord-icon
                src="https://cdn.lordicon.com/moscwhoj.json"
                trigger="hover"
                colors={`primary:${primary || "#121331"},secondary:${secondary || "#08a88a"}`}
                style={{
                    width: (width || 100),
                    height: ( height || 100)
                }}>
            </lord-icon>
        </div>
    )
}