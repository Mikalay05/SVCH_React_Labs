import React from "react";

export default function ListUL({children}) {
    return (
        <ul>
            {React.Children.map(children, (child) => {
                return (
                    <li>{child}</li>
                )
            })}
        </ul>
    )
}