import React from "react";
import Input from "../Input/Input";

const inputs = [
    {id: 1,
    name: "Password",
    type: "text",
},
{id: 2,
    name: "Comfirm password",
    type: "text",
}
]
const ForthStep = () => {
    return (
        inputs.map(input => <Input key={input.id} {...input}/>) 
    )
}

export default ForthStep