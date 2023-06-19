import React,{forwardRef} from "react";
import "./style.css";

export const Menu = forwardRef(({
    pushed="", 
    click
},ref)=>{
    return (
            <div id="nav-container" className={pushed} onClick={click}>
                <div className="toggle-icon" ref={ref}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
    )
})




export default Menu