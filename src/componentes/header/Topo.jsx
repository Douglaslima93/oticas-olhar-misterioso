import React from "react";
import './topo.css'

function Topo () {
    return (
        <header id="topo" className="menu">
            <div className="logo"> 
            <img src="./img/icon-oculos.png" alt="olhar-misterioso"/>
            <p>Óticas Olhar Misterioso</p>
            </div>
            <div className="icones-menu">
            <a href="#produtos">PRODUTOS</a>
            <a href="#sobre">SOBRE</a>
            <a href="#contato">CONTATO</a>
            </div>
        </header>
    )
}

export default Topo