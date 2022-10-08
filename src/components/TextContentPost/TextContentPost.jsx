import React from "react";
import './TextContentPost.css'

const TextContentPost = ({ children , className }) => {
return(
    <p className={`content ${className} `}>
        {children}
    </p>
)
}

export default TextContentPost