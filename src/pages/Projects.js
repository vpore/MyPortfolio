import React from 'react';
import '../assets/Projects.css'
import { NavLink } from 'react-router-dom';

function Projects(){
    return (
        <>
            <h1 className='display-6 text-center' style={{fontFamily: "Poppins"}}>PROJECTS</h1>
            <div>
                <NavLink to={`/projects/crossword`}>CrossWord</NavLink>
            </div>
            <div>
                <NavLink to={`/projects/reefood`}>ReeFood</NavLink>
            </div>
            <div>
                <NavLink to={`/projects/studentwiki`}>StudentWiki</NavLink>
            </div>
            <div>
                <NavLink to={`/projects/travelpro`}>TravelPro</NavLink>
            </div>
            <h3>Figma Designs</h3>
            <div>
                <NavLink to={`/projects/ostello`}>Ostello</NavLink>
            </div>
            <div>
                <NavLink to={`/projects/rebooks`}>ReBooks</NavLink>
            </div>
            <div>
                <NavLink to={`/projects/studentwikiUI`}>StudentWiki</NavLink>
            </div>
            <div>
                <NavLink to={`/projects/restrorder`}>RestrOrder</NavLink>
            </div>
            <div>
                <NavLink to={`/projects/liveasy`}>LivEasy</NavLink>
            </div>
        </>
    );
}
export default Projects;