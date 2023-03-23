import React from 'react';
import './Button.css';

export default function Button  ({
    text,
    className,
    onClick,
    type,
    ...props
}) {

    const style = className ? 'btn ' + className : 'btn';
    
    return <button {...props} className={style} onClick={onClick} type={type} >{text}</button>
}