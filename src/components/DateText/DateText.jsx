import React from "react";
import './DateText.css'

const DateText = ({ children , className}) => {

    return(
        <p className={`DateText ${className}`}>
            {children}
        </p>
    )
}

export default DateText