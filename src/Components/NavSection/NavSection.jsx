import React from "react";

import './NavSection.css'

// import Data from '../../Json/linksInHeaders.json'

export default function NavSection() {

    const data  = [
        {
            nameLinks: 'Sign In',
            pathLink: '/authorization'
        },
        {
            nameLinks: 'Product Support',
            pathLink: '/product-support'
        },
        {
            nameLinks: 'Company',
            pathLink: '/company'
        },        {
            nameLinks: 'Contact us',
            pathLink: '/contact-us'
        },
    ]

    const resultLinks = data.map((element, index) => {
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