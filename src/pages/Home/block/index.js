import React from "react";
import module from "./style.module.css"


export default function Block({title="", text="", color=""}){

    return(
        <div className={module.container} style={{backgroundColor: color}}>
            <h2 className={module.title}>{title}</h2>
            <p className={module.text}>{text}</p>
        </div>
    )
}