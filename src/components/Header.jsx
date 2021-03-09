import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
const Header = () => {
    return(
        <header className="Header">
            <img className="Header__title"src={logo} / >
            <ul className="Header__list">
                <button className="Login">Log in</button>
                <button className="Registre">Registre</button>
            </ul>
        </header>
    )
}

export default Header