import React from "react";
import MainContainer from "../containers/MainContainer/MainContainer";
import Button from "./Button/Button";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./Button/ThirdStep/ThirdStep";
import ForthStep from "./ForthStep/ForthStep";
import FormContainer from "../containers/MainContainer/FormContainer/FormContainer";

const Main = () => {
    return (
        <MainContainer>
            <FormContainer>
                <FirstStep />
            </FormContainer>
        <Button text="Previous" />
        <Button text="Next" />
        </MainContainer>
    )
}

export default Main