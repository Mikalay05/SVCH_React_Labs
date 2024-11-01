import React from "react";

export default function ListUL({ children, className }) {
    return (
        <ul className={className}>
            {React.Children.map(children, (child) => child)}
        </ul>
    );
}
