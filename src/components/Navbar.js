import React from 'react'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav className="container-fluid p-0">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="navigation">
                <div className="topnav">
                    <ul>
                    <li className="top-links"><a href="">About</a></li>
                        
                        <li><a href="">How You Can Help</a></li>
                        <li><a href="">Park Authority</a></li>
                        <li><a href="">Planning</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="lowernav">
                <ul>
                        <li><a href="">Place to Go</a></li>
                        <li><a href="">Things to Do</a></li>
                        <li><a href="">Plan Your Visit</a></li>
                        <li><a href="">Be Inspired</a></li>
                        <li><a href="">Explored By Map</a></li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
