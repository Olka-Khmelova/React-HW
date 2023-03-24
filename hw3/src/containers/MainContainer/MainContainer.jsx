import React, { useContext } from "react";
import { Context } from '../../components/Main';
import "./MainContainer.css"

const MainContainer = ({validate, onSubmit, children }) => {
    const {state} = useContext(Context);
    return (
            <form className="input_container" validate={validate} onSubmit={onSubmit}>
                {children}
            </form>
    )
}

export default MainContainer