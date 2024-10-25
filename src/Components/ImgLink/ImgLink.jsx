import React from "react";

export default function ImgLink( {idImg, pathImg, w='100px',h='100px', altName="notFoundImg", pathValue='/'}) {
    return (
        <>
            <a href={pathValue}>
                <img id={idImg} src={pathImg} alt={altName} width={w} height={h}/>
            </a>     
        </>
    )
}