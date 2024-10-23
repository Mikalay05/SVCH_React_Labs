import React from 'react'

import NavSection from '../NavSection/NavSection'
import InformationLinksSection from '../InformationLinksSection/InformationLinksSection'

export default function Header() {
    return (
        <header>
            <NavSection/>
            <InformationLinksSection/>
        </header>
    )
}