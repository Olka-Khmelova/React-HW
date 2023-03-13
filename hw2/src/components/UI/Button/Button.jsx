import React from 'react';
import './Button.css';

export default function Button  ({
    children,
    className,
    ...props
}) {
    const style = className ? 'btn ' + className : 'btn';
    
    return <button {...props} className={style}>{children}</button>
}