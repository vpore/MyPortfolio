import React from 'react';
import '../assets/Projects.css'
import { NavLink } from 'react-router-dom';
import crossword from '../assets/crossword01.png'
import reefood from '../assets/ReeFood.png'
import studentwiki from '../assets/StudentWiki.png'
import travelpro from '../assets/TravelPro.png'

function Projects(){
    return (
        <>
            <h1 className='display-6 text-center mt-3' style={{fontFamily: "Poppins"}}>PROJECTS</h1>
            <div className='row mx-3 mt-5'>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <img src={crossword} className='mb-3 projectPic' alt='projectPic' style={{width: '250px'}}/> <br/>
                    <NavLink to={`/projects/crossword`}>CrossWord</NavLink> <br/>
                    <a href='www.google.com'>View Project<i className='fa fa-paw fa ps-1'/></a>
                </div>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <img src={reefood} className='projectPic mb-3' alt='projectPic'/> <br/>
                    <NavLink to={`/projects/reefood`}>ReeFood</NavLink> <br/>
                    <a href='www.google.com'>View Project<i className='fa fa-paw fa ps-1'/></a>
                </div>
                <div className='col shadow-sm p-3 mb-5 projects rounded text-center'>
                    <img src={studentwiki} className='mb-3 projectPic' alt='projectPic' style={{width: '450px'}}/> <br/>
                    <NavLink to={`/projects/studentwiki`}>StudentWiki</NavLink> <br/>
                    <a href='www.google.com'>View Project<i className='fa fa-paw fa ps-1'/></a>
                </div>
            </div>
            <div className='mx-3' style={{width: '1000px'}}>
                <div className='shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <img src={travelpro}  className='mb-3 projectPic' alt='projectPic' style={{width: '950px'}}/> <br/>
                    <NavLink to={`/projects/travelpro`}>TravelPro</NavLink>
                </div>
            </div>
            <h3 className='ms-3'>Figma Designs</h3>
            <div className='row mx-3 mt-3'>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/ostello`}>Ostello</NavLink>
                </div>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/restrorder`}>RestrOrder</NavLink>
                </div>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/projects/rebooks`}>ReBooks</NavLink>
                </div>
                {/* <div className='col shadow-sm p-3 mb-5 projects rounded text-center'>
                    <NavLink to={`/projects/studentwikiUI`}>StudentWiki</NavLink>
                </div> */}
            </div>
        </>
    );
}
export default Projects;