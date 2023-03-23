import React from "react";
import "./MainContainer.css"

const MainContainer = ({ children }) => {
    return (
        <div className="input_container">
            <form className="form" validate="true">
                {children}
            </form>
        </div>
    )
}

export default MainContainer