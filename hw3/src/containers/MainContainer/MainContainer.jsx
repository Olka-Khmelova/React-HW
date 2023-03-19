import React from "react";
import "./MainContainer.css"

const MainContainer = ({ children }) => {
    return (
        <div className="input_container">
            <h1>Title</h1>
            <form className="form">
                {children}
            </form>
        </div>
    )
}

export default MainContainer