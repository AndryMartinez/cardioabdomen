import React from "react";
import { Form } from "react-bootstrap";

const InputText = ({ onChange , value, className , placeholder }) => {

    return(
        <Form.Control 
            className={className}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type='email'
        />
    )
}

export default InputText