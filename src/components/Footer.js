import React from 'react';

import Buttons from './Buttons';
import '../assets/Footer.css'

function Footer(){

  return (
    <footer className="footer">
      <div>
        <hr/>
        <section className="mt-3">
          
          <div className="socialBtns">
            <p className="ms-5 fw-bold">Get Connected with Me ^^</p>
            <Buttons/>
          </div>

          <div className="mail">
            <p className="fw-bold">Drop me a Mail at:</p>
            <a href='mailto:porevaibhavi5@gmail.com'>porevaibhavi5@gmail.com</a>
          </div>

          <div className='quote text-center'>
            <p>"Connect the dots <em>Backward . . .</em>"</p>
          </div>
        </section>
      </div>
    </footer>
  );
  
}
export default Footer;