import React from "react";
import "./style.css";

export default function Search({
        width, 
        height,
        primary,
        secondary,
        click,
    }){
    return(
        <div onClick={click} className="icon">
            <lord-icon
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger="hover"
                colors={`primary:${primary || "#121331"},secondary:${secondary || "#08a88a"}`}
                style={{
                    width: (width || 70),
                    height: ( height || 70)
                }}>
            </lord-icon>
        </div>
    )
}
