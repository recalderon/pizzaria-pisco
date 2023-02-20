import React from "react"
import pizzaPisco from '../images/logopisco.png'

export default function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="logo">
                    <img src={pizzaPisco} alt="logo do pisco pizza" className="nav-logo" />                
                </div>
                <div className="copyright">
                    © 2023 Pizzaria do Pisco.
                </div>
            </div>
        </footer>
    )        
}