import React from "react";
import './Header.css'

const Header = () => {
return <header className="header">
        <nav className="nav bd-grid">
            <div>
                <a href="#Sofi" className="nav__logo">Sofi&nbsp;Abovyan</a>
            </div>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                    <li className="nav__item"><a href="#favourite" className="nav__link">Favourite</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>
        </nav>
    </header>
}

export default Header;