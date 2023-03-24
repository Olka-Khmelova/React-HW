import React, { useContext } from "react";
import { Context } from '../Main';
import Input from "../Input/Input";

const ForthStep = () => {
    const {state} = useContext(Context);

    const inputs = [
        {id: 1,
        name: "Password",
        type: "password",
        errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
    },
    {id: 2,
        name: "Confirm",
        type: "password",
        errorMessage:"Passwords don't match!",
        pattern: state.password,
        required: true,
    }
    ]

    return (
        inputs.map(input => <Input key={input.id} {...input} value={state[input.name.toLowerCase()]} />) 
    )
}

export default ForthStep