import React, {forwardRef} from "react";

export const UserIcon = forwardRef(({
    width, 
    height, 
    click,
    primary,
    secondary,
},ref)=>{
return(
    <div onClick={click} className="icon-comp-div">
        <lord-icon
            ref={ref}
            src="https://cdn.lordicon.com/dxjqoygy.json"
            trigger="hover"
            colors={`primary:${primary || "#121331"},secondary:${secondary || "#08a88a"}`}
            style={{ 
                width: (width || 50),
                height : (height || 50)
            }}>
         </lord-icon>
    </div>
    )
})


export default UserIcon