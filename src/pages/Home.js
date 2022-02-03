import React from 'react';
import '../assets/Home.css'
import pic from '../assets/homePic.svg'

function Home(){
    return (
        <>
        <div>
            <img src={pic} className='homePic' alt='homeImg'/>
        </div>
        <div className="content jumbotron intro">
            <h1 className="display-3 fw-bolder">Vaibhavi Pore</h1>
            <p className="lead">A Front-End Web Developer &amp; UI/UX Designer<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
            Aliquam tincidunt est at orci imperdiet, a pretium mauris varius.<br/>
            Aenean euismod sagittis lorem.</p>            
        </div>
        </>
    )
}
export default Home;