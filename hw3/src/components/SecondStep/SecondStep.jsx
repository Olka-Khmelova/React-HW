import React, { useContext } from "react";
import { Context } from '../Main';
import Input from "../Input/Input";

const inputs = [
    {id: 1,
    name: "City",
    type: "text",
    required: true,

},
{id: 2,
    name: "Street",
    type: "text",
    required: true,

},
{id: 3,
    name: "Building",
    type: "text",
    required: true,
}
]
const SecondStep = () => {
    const {state} = useContext(Context);
    console.log(state)
    return (
        inputs.map(input => <Input key={input.id} {...input} value={state[input.name.toLowerCase()]} />) 
    )
}

export default SecondStep