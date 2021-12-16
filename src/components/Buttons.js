import React from'react'

import { AwesomeButton } from "react-awesome-button";
import {AwesomeButtonStyles} from "react-awesome-button/dist/styles.css";

const Buttons= () => {
    return(
        <>
            <AwesomeButton 
                cssModule={AwesomeButtonStyles}
                type="primary"
                href="https://twitter.com/vaibhavi_pore"
                target="_blank"
                className="ms-5"
                >Twitter<i className="fa fa-twitter fa-lg ps-3"></i>
            </AwesomeButton>

            <AwesomeButton 
                cssModule={AwesomeButtonStyles}
                type="primary"
                href="https://www.linkedin.com/in/vaibhavi-pore-242042211/"
                target="_blank"
                className="ms-4"
                >LinkedIn<i className="fa fa-linkedin fa-lg ps-3"></i>
            </AwesomeButton>

            <AwesomeButton 
                cssModule={AwesomeButtonStyles}
                type="primary"
                href="https://github.com/vpore"
                target="_blank"
                ripple="true"
                className="ms-4"
                >GitHub<i className="fa fa-github fa-lg ps-3"></i>
            </AwesomeButton>
        </>
    );
}

export default Buttons;