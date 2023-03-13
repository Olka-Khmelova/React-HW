import React from 'react';

const TimeList = ({ timersList }) => {
    return (
        timersList.map((el, idx) => <li key={idx}>{el.time}</li>
        )
    )
}

export default TimeList