import { NavLink } from 'react-router-dom';
import React from 'react';
import '../assets/Header.css'
function Header(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top header">
            <div className="container-fluid">

                <NavLink className="navbar-brand ms-5 fs-4 fw-bolder" to="/home">Vaibhavi Pore</NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/resume">Resume</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/projects">Projects</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/blog">Blog</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;