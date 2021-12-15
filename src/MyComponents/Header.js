import React from 'react';
import '../assets/Header.css'
function Header(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top header">
            <div className="container-fluid">

                <a className="navbar-brand ms-5 fs-4 fw-bolder" href="/home">Vaibhavi Pore</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/resume">Resume</a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/projects">Projects</a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/blog">Blog</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;