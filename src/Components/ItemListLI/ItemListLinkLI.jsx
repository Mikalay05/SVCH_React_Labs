import React from "react";

export default function ItemListLinkLI({ text, link, className}) {
    return (
        <li className={className}>
            <a href={link}> {text}</a>
        </li>
    )
}