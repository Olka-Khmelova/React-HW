import React, { useReducer } from "react";
import MainContainer from "../containers/MainContainer/MainContainer";
import Button from "./Button/Button";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import ForthStep from "./ForthStep/ForthStep";
import FifthStep from "./FifthStep/FifthStep"
import InputContainer from "../containers/InputContainer/InputContainer";

export const Context = React.createContext(null);
const steps = [<FirstStep />, <SecondStep />, <ThirdStep />, <ForthStep />, <FifthStep />]
const initialState = {
    name: '',
    surname: '',
    email: '',
    city: '',
    street: '',
    building: '',
    password: '',
    confirm: '',
    formPages: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'DATA-INPUT':
            return {
                ...state,
                ...action.payload
            }

        case 'STEP-BTN':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <MainContainer>
                <InputContainer>
                    {state.formPages !== steps.length-1 ? <h1>Step {state.formPages + 1}/{steps.length - 1}</h1> : <h1>Thank you for registration!</h1>}
                    {steps[state.formPages]}
                </InputContainer>
                {state.formPages !== 0 && state.formPages !== steps.length-1 && 
                <Button 
                    text="Previous" 
                    type="button" 
                    onClick={ (e) => {
                        // e.preventDefault();
                        dispatch({
                            type: 'STEP-BTN',
                            payload: {formPages: state.formPages - 1}
                            
                        })
                        }
                    }
                    />}
                {state.formPages !== steps.length-1 && <Button 
                    text={state.formPages !== steps.length - 2 ? "Next" : "Submit"} 
                    type="button"
                    onClick={ (e) => {
                        e.preventDefault();
                        dispatch({
                            type: 'STEP-BTN',
                            payload: {formPages: state.formPages + 1}
                            
                        })
                        }
                }/>
            }
            </MainContainer>
        </Context.Provider>
    )
}

export default Main
