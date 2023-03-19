import React from "react";
import "./Input.css"
const Input = ({...input}) => {
    return (
        <label className="input_label"> 
            <h2 className="input_title">{input.name}</h2>
            <input type={input.type} className="input_form"/>
        </label>
    )
}

export default Input