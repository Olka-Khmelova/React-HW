import React from "react";

import "./MainContainer.css"

const MainContainer = ({validate, onSubmit, children }) => {
    return (
            <form className="input_container" validate={validate} onSubmit={onSubmit}>
                {children}
            </form>
    )
}

export default MainContainer