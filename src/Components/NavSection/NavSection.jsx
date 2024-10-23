import React from "react";

import './NavSection.css'

import Data from '../../Json/linksInHeaders.json'

export default function NavSection() {

    const resultLinks = Data.map((element, index) => {
        return (
            <a key={index} className="stylesLink" href={element.pathLink}>{element.nameLinks}</a>
        )
    })

    return (
        <nav className="content-links"> 
            {resultLinks}
        </nav>
    )
}