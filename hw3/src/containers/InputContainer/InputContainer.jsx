import React from "react";
import "./InputContainer.css"

const InputContainer = ({ children }) => {
    return (
            <div className="inputs">
                {children}
            </div>
    )
}

export default InputContainer