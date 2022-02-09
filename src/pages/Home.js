import React from 'react';
import '../assets/Home.css'
import pic from '../assets/homePic.svg'

function Home(){
    return (
        <>
            <div>
                <img src={pic} className='homePic' alt='homeImg'/>
            </div>
            <div className="jumbotron intro">
                <h1 className="display-3 fw-bolder">Vaibhavi Pore</h1>
                <p className="lead text-center">A Front-End Web Developer<br/></p>        
            </div>
        </>
    )
}
export default Home;