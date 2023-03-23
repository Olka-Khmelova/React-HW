import React, { useContext } from "react";
import { Context } from '../Main';
import Button from "../Button/Button";


const ThirdStep = () => {
    const {state} = useContext(Context);
    console.log(state)
    return (
        <Button className= "upload_btn" text="Upload Photo"/>
    )
}

export default ThirdStep