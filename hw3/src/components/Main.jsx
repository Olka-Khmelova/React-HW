import React, { useReducer } from "react";
import MainContainer from "../containers/MainContainer/MainContainer";
import Button from "./Button/Button";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import ForthStep from "./ForthStep/ForthStep";
import FifthStep from "./FifthStep/FifthStep"
import InputContainer from "../containers/InputContainer/InputContainer";
import Wrapper from "./Wrapper/Wrapper";

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
    avatar: '',
    formPages: 0,
    theme: 'ligth',

};

const reducer = (state, action) => {
    switch (action.type) {
        case 'DATA-INPUT':
            return {
                ...state,
                ...action.payload
            }
            case 'AVATAR-INPUT':
            return {
                ...state,
                ...action.payload
            }

        case 'STEP-BTN':
            return {
                ...state,
                ...action.payload
            }
            case 'THEME-INPUT':
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
            <Wrapper className={state.theme}>
                <Button className="mode-btn" text={state.theme === "ligth" ? "Switch to dark mode" : "Switch to ligth mode"} 
                        type="button" onClick={(e) => {
                            e.preventDefault();
                            dispatch({
                                type: 'THEME-INPUT',
                                payload: {theme: state.theme === 'ligth' ? 'dark' : 'ligth'}
                                    
                            })
                            }}/>
                <MainContainer 
                validate="true" 
                onSubmit={(e) => {
                    e.preventDefault();  
                    dispatch({
                    type: 'STEP-BTN',
                    payload: {formPages: state.formPages + 1}
                            
                })}}>
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
                        type="submit"
                        disabled={ state.formPages === 3 && state.password !== state.confirm  ? true : false} />
                    }
                </MainContainer>
            </Wrapper>
        </Context.Provider>
    )
}

export default Main
