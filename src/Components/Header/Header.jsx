import React from 'react'

import './Header.css'

import NavSection from '../NavSection/NavSection'
import InformationLinksSection from '../InformationLinksSection/InformationLinksSection'

export default function Header() {
    return (
        <header className='test'>
            <NavSection/>
            <InformationLinksSection/>
        </header>
    )
}