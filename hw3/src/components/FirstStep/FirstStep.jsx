import React from "react";
import Input from "../Input/Input";

const inputs = [
    {id: 1,
    name: "Name",
    type: "text",
},
{id: 2,
    name: "Surname",
    type: "text",
},
{id: 3,
    name: "Email",
    type: "text",
}
]
const FirstStep = () => {
    return (
        inputs.map(input => <Input key={input.id} {...input}/>) 
    )
}

export default FirstStep