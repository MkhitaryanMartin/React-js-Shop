import React from "react";
import "./style.css";

export default function CheckIcon({
        width, 
        height,
        primary,
        secondary,
        click,
    }){
    return(
        <div onClick={click} className="icon">
            <lord-icon
                src="https://cdn.lordicon.com/jvihlqtw.json"
                trigger="hover"
                colors={`primary:${primary || "#121331"},secondary:${secondary || "#0008ff"}`}
                style={{
                    width: (width || 100),
                    height: ( height || 100)
                }}>
            </lord-icon>
        </div>
    )
}


