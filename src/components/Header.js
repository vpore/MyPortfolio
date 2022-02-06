import { NavLink } from 'react-router-dom';
import React from 'react';
import '../assets/Header.css'
function Header(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top header">
            <div className="container-fluid">

                <NavLink className="navbar-brand ms-5 fs-4 fw-bolder" to="/MyPortfolio/">Vaibhavi Pore</NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/MyPortfolio">Home</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://drive.google.com/file/d/1Z9U4hhwNPyWLRd-zzPwCSKxINY0ggKYY/view?usp=sharing" target='_blank' rel='noreferrer'>Resume</a>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/MyPortfolio/projects">Projects</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://vaibhavipore.hashnode.dev/" target='_blank' rel='noreferrer'>Blog</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header;