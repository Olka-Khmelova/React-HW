import React, { useContext } from "react";
import { Context } from '../Main';
import "./Input.css"

const Input = ({...input}) => {
    const {state, dispatch} = useContext(Context);
   
    return (
        <>
        <label className="input_label"> 
            <h2 className="input_title">{input.name}</h2>
            <input 
            type={input.type} 
            value={input.value}
            className="input_form"
            onChange={ (e) => {
                dispatch({
                    type: 'DATA-INPUT',
                    payload: {[input.name.toLowerCase()]: e.currentTarget.value,}
                })
                }
            } pattern={input.pattern}/>
            <span className="input-error">{input.errorMessage}</span>
        </label>

        </>
    )
}

export default Input