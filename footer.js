import React from 'react';


import email from './email.png';
import github from './github.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';




function Footer(){
    return(
                              
            <div className="footerContainer">   
                                    
                    <div className="create">          
                        <h3>create something with us</h3>          
                        <p>Let's unlock the start of a beautiful relationship.</p>          
                                    
                        <div className="mainButton">
                                <button className="button">Get Started</button>   
                        </div>        
                    </div>


                      
                    <div className="social">
                        <p>&#169; 2020 Echo Design and Development Agency</p>
                        <div 
                        className="socialItem">
                            <img src={email} alt="" />
                            <img src={github} alt="" />
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />
                        </div>
                    </div>
                    
            </div>
        
    );
}



export default Footer;