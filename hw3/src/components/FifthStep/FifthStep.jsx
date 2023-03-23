import React, { useContext } from "react";
import { Context } from '../Main';
import './FifthStep.css'

const FifthStep = () => {
    const {state} = useContext(Context);
    console.log(state)
    return (
        <div>
            <h2>Contact information</h2>
            <img src="/" alt="" />
            <ul className="info_list">
                {Object.entries(state).map(([key, value], i) =>  i <= 5 ? <li className="info_item" key={i}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</li> : null
                )}
            </ul>
        </div>
    )
}

export default FifthStep