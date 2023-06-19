import { useState } from "react";


export default function useToggle(val){
    const [value, setValue] = useState(val)

    const toggle = ()=>{
        setValue(!value)
    }

    return [value, toggle]
}