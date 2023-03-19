import React from "react";
import "./FormContainer.css"

const FormContainer = ({ children }) => {
    return (
            <form className="form">
                {children}
            </form>
    )
}

export default FormContainer