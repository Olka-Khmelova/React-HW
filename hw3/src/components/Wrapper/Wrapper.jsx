import React from "react";
import "./Wrapper.css"

const Wrapper = ({className, children}) => {
    return (
        <div className={`wrapper ${className}`}>
            {children}
        </div>
    )
}
export default Wrapper