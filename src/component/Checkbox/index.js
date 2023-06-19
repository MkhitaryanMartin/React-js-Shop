import React from "react";

export default function Checkbox({
    item={},
    onChange
}){
    return (
        <>
           <input type="checkbox" id={item.name} onChange={(e)=> {onChange(e,item.id)}} checked={item.complited}/>
                                <label htmlFor={item.name}>{item.name}</label>
        </>
    )
}