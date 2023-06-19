import React from "react";

export default function StarIcon({
        width, 
        height,
        primary,
        secondary,
        click,
        className
    }){
    return(
        <div onClick={click} className={className}>
            <lord-icon
                src="https://cdn.lordicon.com/mdgrhyca.json"
                trigger="morph"
                colors={`primary:${primary || "#121331"},secondary:${secondary || "#0008ff"}`}
                style={{
                    width: (width || 70),
                    height: ( height || 70),
                }}>
            </lord-icon>
        </div>
    )
}
