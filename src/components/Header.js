import React from "react"
import pizzaPisco from '../images/logopisco.png'

export default function Header() {
    return(
        <header>
            <nav className="nav">
                <div className="logo-container">                    
                    <img src={pizzaPisco} alt="logo do pisco pizza" className="nav-logo" />
                    <h1>Pizzaria do Pisco</h1>
                </div>
                <ul className="nav-items">
                    <li>Cardapio</li>
                    <li>Quem somos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )        
}
