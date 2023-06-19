import React from "react";
import "./style.css";

export default function ShopIcon({
    width, 
    height, 
    click,
    primary,
    secondary,
    count=""
    }){
    return(
        <div onClick={click} className="icon shop-icon">
            <i>{count}</i>
            <lord-icon
            src="https://cdn.lordicon.com/slkvcfos.json"
            trigger="hover"
            colors={`primary:${primary || "#121331"},secondary:${secondary || "#08a88a"}`}
            style={{
                width: (width || 250),
                height: (height || 250)
            }}
            >
           </lord-icon>
        </div>
    )
}