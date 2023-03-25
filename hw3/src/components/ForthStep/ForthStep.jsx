import React, { useState, useContext } from "react";
import { Context } from '../Main';
import Input from "../Input/Input";
import "./ForthStep.css"

const ForthStep = () => {
    const {state} = useContext(Context);
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");
    const inputs = [
        {id: 1,
        name: "Password",
        type:  `${inputType}`,
        errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
    },
    {id: 2,
        name: "Confirm",
        type: `${inputType}`,
        errorMessage:"Passwords don't match!",
        pattern: state.password,
        required: true,
    }
    ]

    const hidePassword = (e) => {
        e.stopPropagation(); 
        setShowPassword(false); 
        setInputType ("password");
    }

    const showPass = (e) => {
        e.stopPropagation(); 
        setShowPassword(true); 
        setInputType("text")
    }

    return (
        <>
            {inputs.map(input => <Input className="password_input" key={input.id} {...input} value={state[input.name.toLowerCase()]} >
            {showPassword ? <img className="password-icon" src="/eye.png" alt="show password" title="Hide password" onClick={hidePassword}/> :
            <img className="password-icon" src="/eye_slash.png" alt="hide password" title="Show password" onClick={showPass}/>}
            </Input>)}

        </>
    )
}

export default ForthStep