import React from "react";

import './NavSection.css'

import Data from '../../Json/linksInHeaders.json'

export default function NavSection({flexDirection = 'c'}) {
    let layout;
    if(flexDirection=='r') {
        layout = {
            display: 'flex',
            flexDirection: 'row'
        }
    }
    else if(flexDirection=='c') {
        layout = {
            display: 'flex',
            flexDirection: 'column'
        }
    } 
    else {
        layout = {
            display: 'flex',
            flexDirection: 'row'
        }
    }

    const resultLinks = Data.map((element, index) => {
        return (
            <a key={index} className="stylesLink" href={element.pathLink}>{element.nameLinks}</a>
        )
    })

    return (
        <nav className="content-links" style={layout}> 
            {resultLinks}
        </nav>
    )
}