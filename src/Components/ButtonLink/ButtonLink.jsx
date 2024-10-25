import React from "react";

import './ButtonLink.css'

export default function ButtonLink({text, link, bc}) {
    
    return (
        <button className="buttonLinkClass" style={{ backgroundColor: bc}}>
            <a href={link}>{text}</a>
        </button>
    )
}