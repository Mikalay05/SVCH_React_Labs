import React from "react";

import './InformationLinksSection.css'

import ImgLink from "../ImgLink/ImgLink";
import ButtonLink from "../ButtonLink/ButtonLink";
import ItemListLI from "../ItemListLI/ItemListLI";
import ListUL from '../ListUL/ListUL'


// import LinksButton from '../../Json/linksButtonInHeader.json'

export default function InformationLinksSection() {

    const data = [
        {
            name: 'Pricing',
            link: ''
        },
        {
            name: 'Solutions',
            link: ''
        },        {
            name: 'Demo ',
            link: ''
        },        {
            name: 'Products',
            link: ''
        },        {
            name: 'Services',
            link: ''
        },        {
            name: 'Resources',
            link: ''
        }
    ]

    const resultLinksButton = data.map((element, index) => {
        return (
            <li key={index} className="link-button">
                <a className="content-link" href={element.link}>{element.name}</a>
            </li>
        )
    })

    return (
        <div className="content-nav-div">

            <ImgLink idImg="LogoId" pathImg='/Img/logo-zendesk.png' />
            <ul className="links-button">
                {resultLinksButton}

            <li><ButtonLink text="Get started" bc=' rgba(23, 73, 77, 1)' /></li>
            </ul>
        </div>
    )   
}