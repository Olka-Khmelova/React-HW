import React from "react";
import Input from "../Input/Input";

const inputs = [
    {id: 1,
    name: "City",
    type: "text",
},
{id: 2,
    name: "Street",
    type: "text",
},
{id: 3,
    name: "Building number",
    type: "text",
}
]
const SecondStep = () => {
    return (
        inputs.map(input => <Input key={input.id} {...input}/>) 
    )
}

export default SecondStep