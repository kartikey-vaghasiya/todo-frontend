import "./css/navbar.css"
import React from "react"

export default function Navbar () {
    return (
        <nav>
            <div className="nav--logo"><img src="images/nav--logo.png" alt="Notes" /><span>Todo</span></div>
            <div className="nav--search"><input type="text" placeholder="Serach Notes"/></div>
            <div className="nav--auth">
                <button className="auth--signin">Sign-in</button>
                <button className="auth--signup">Sign-up</button>
            </div>
        </nav>
    )
}