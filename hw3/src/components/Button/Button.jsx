import React from 'react';
import './Button.css';

export default function Button  ({
    text,
    className,
    ...props
}) {
    const style = className ? 'btn ' + className : 'btn';
    
    return <button {...props} className={style}>{text}</button>
}