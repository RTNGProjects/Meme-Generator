import React from "react"
import trollface from "../images/troll-face.png"

export default function headerbar() {
    return (
        <header className="header">
            <img src={trollface} className="header-img" alt="troll face meme"/>
            <p className="header-title">Meme Generator</p>
            <p className="header-project">React Project 3</p>    
        </header>
    )
}