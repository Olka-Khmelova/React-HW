import React, { useContext } from "react";
import { Context } from '../Main';
import Input from "../Input/Input";

const inputs = [
    {id: 1,
    name: "Name",
    type: "text",
    errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[a-zA-Z]*$",
    required: true,

},
{id: 2,
    name: "Surname",
    type: "text",
    errorMessage: "Surname should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[a-zA-Z]*$",
    required: true,
},
{id: 3,
    name: "Email",
    type: "email",
    errorMessage: "It should be valid email address!",
    // pattern: "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$",
    required: true,
}
]

const FirstStep = () => {
    const {state} = useContext(Context);
    console.log(state)
    return (
        inputs.map(input => <Input key={input.id}
            {...input}
            value={state[input.name.toLowerCase()] } />)
    )
}

export default FirstStep