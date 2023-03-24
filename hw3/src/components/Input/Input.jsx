import React, { useState, useContext } from "react";
import { Context } from '../Main';
import "./Input.css"

const Input = ({...input}) => {
    const {state, dispatch} = useContext(Context);
    const [focused, setFocused] = useState(false);
    
    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <>
        <label className="input_label"> 
            <h2 className="input_title">{input.name} {state.formPages === 2 && state.avatar && '✓'}</h2>
            <input 
            type={input.type} 
            value={input.value}
            className="input_form"
            accept={input.accept}
            onChange={ input.name.toLowerCase() === 'avatar' ? (e) => {
                dispatch({
                    type: 'AVATAR-INPUT',
                    payload: {[input.name.toLowerCase()]: URL.createObjectURL(e.target.files[0]),}
                })
                handleFocus()
                } 
                : 
                (e) => {
                dispatch({
                    type: 'DATA-INPUT',
                    payload: {[input.name.toLowerCase()]: e.currentTarget.value,}
                })
                handleFocus()
                }
            } 
            pattern={input.pattern}
            focused={focused.toString()}
            required={input.required}
            onBlur={handleFocus}
            />
            <span className="input-error">{input.errorMessage}
            </span>
        </label>

        </>
    )
}

export default Input