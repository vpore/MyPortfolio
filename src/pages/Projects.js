import React from 'react';
import '../assets/Projects.css'
import { NavLink } from 'react-router-dom';
import crossword from '../assets/crossword01.png'
import reefood from '../assets/ReeFood.png'
import studentwiki from '../assets/StudentWiki.png'

function Projects(){
    return (
        <>
            <h1 className='display-6 text-center mt-3' style={{fontFamily: "Poppins"}}>PROJECTS</h1>
            <div className='row mx-3 mt-5'>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <img src={crossword} className='mb-3 projectPic' alt='projectPic' style={{width: '250px'}}/> <br/>
                    <a href='https://vpore.github.io/CrossWord/' target='_blank' rel="noreferrer">CrossWord</a>
                </div>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <img src={reefood} className='projectPic mb-3' alt='projectPic'/> <br/>
                    <a href='https://vpore.github.io/ReeFood/' target='_blank' rel="noreferrer">ReeFood</a>
                </div>
                <div className='col shadow-sm p-3 mb-5 projects rounded text-center'>
                    <img src={studentwiki} className='mb-3 projectPic' alt='projectPic' style={{width: '450px'}}/> <br/>
                    <a href='https://studentwiki.netlify.app/' target='_blank' rel="noreferrer">StudentWiki</a>
                </div>
            </div>
            <div className='mx-3' style={{width: '500px'}}>
                <div className='shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    
                    <NavLink to={`/MyPortfolio/projects/travelpro`}>TravelPro</NavLink>
                </div>
            </div>
            <h3 className='ms-3'>Figma Designs</h3>
            <div className='row mx-3 mt-3'>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/MyPortfolio/projects/ostello`}>Ostello</NavLink>
                </div>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <a href='https://www.figma.com/file/nnP0dWrTcY5uH1Ei3eJ9Ac/RestrOrder?node-id=0%3A1' target='_blank' rel="noreferrer">RestrOrder</a>
                </div>
                <div className='col shadow-sm p-3 mb-5 me-3 projects rounded text-center'>
                    <NavLink to={`/MyPortfolio/projects/rebooks`}>ReBooks</NavLink>
                </div>
                {/* <div className='col shadow-sm p-3 mb-5 projects rounded text-center'>
                    <NavLink to={`/MyPortfolio/projects/studentwikiUI`}>StudentWiki</NavLink>
                </div> */}
            </div>
        </>
    );
}
export default Projects;