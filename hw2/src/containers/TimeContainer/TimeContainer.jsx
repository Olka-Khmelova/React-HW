import React from 'react';
import "./index.css"

const TimeContainer = ({ children }) => {
    return (
        <ul className="list">
        {children}
        </ul>
    )
}

export default TimeContainer