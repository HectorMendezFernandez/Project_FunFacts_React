import React from "react"
import reactLogo from '../assets/react-logo.png'

export default function Navbar() {
    return (
           <nav className="nav-elements">
            <div className="div-img">
                <img src={reactLogo} className="img-header"></img>
                <h3>ReactFacts</h3>
            </div>
            
           <h4>React Course - Project 1</h4>
        </nav>
    )
}
