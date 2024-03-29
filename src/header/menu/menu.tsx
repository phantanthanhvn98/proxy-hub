import React from "react";

import "./menu.css"

const Menu = ({open, setOpen} : any) =>{
    return (    
        <>
            <input type="checkbox" id="checkbox"  checked={open}  onChange={() => setOpen(!open)}/>
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </>
    )
}

export default Menu;