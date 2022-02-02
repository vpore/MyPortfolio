import React from 'react';
import '../assets/Projects.css'
import { NavLink } from 'react-router-dom';
import crossword from '../assets/crossword.png'

function Projects(){
    return (
        <>
            <h1 className='display-6 text-center' style={{fontFamily: "Poppins"}}>PROJECTS</h1>
            <div className='row mx-3'>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <img src={crossword} className='projectPic'/>
                    <NavLink to={`/projects/crossword`}>CrossWord</NavLink>
                </div>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/reefood`}>ReeFood</NavLink>
                </div>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/studentwiki`}>StudentWiki</NavLink>
                </div>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/travelpro`}>TravelPro</NavLink>
                </div>
            </div>
            <h3>Figma Designs</h3>
            <div className='row mx-3'>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/ostello`}>Ostello</NavLink>
                </div>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/rebooks`}>ReBooks</NavLink>
                </div>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/studentwikiUI`}>StudentWiki</NavLink>
                </div>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/restrorder`}>RestrOrder</NavLink>
                </div>
                <div className='col shadow p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/liveasy`}>LivEasy</NavLink>
                </div>
            </div>
        </>
    );
}
export default Projects;