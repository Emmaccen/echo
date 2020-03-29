import React from 'react';
import wwd1 from './wwd1.png';
import wwd2 from './wwd2.png';


function Wwd() {
    return (

        <div className="services" id="services">
            <div className='wwd'>
                <h5>What we do</h5>
            

                <p>With our products ranging from user experience to product development, we build identities and enhance experiences. </p>


                <div className="sideList">
                    <div className="before"></div>
                    <p style={{
                        opacity: '0.8',
                    }}>Design Research</p>
                </div>

                <div className="sideList">
                    <div className="before"></div>
                    <p style={{
                        opacity: '0.8',
                    }}>UI/UX Design</p>
                </div>
                <div className="sideList">
                    <div className="before"></div>
                    <p style={{
                        opacity: '0.8',
                    }}>Brand Identity</p>
                </div>
                <div className="sideList">
                    <div className="before"></div>
                    <p style={{
                        opacity: '0.8',
                    }}>Frontend Development</p>
                </div>
                <div className="sideList">
                    <div className="before"></div>
                    <p style={{
                        opacity: '0.8',
                    }}>Web Development</p>
                </div>
                <div className="sideList">
                    <div className="before"></div>
                    <p style={{
                        opacity: '0.8',
                    }}>App Development</p>
                </div>
                <div className="sideList">
                    <div className="before"></div>
                    <p style={{
                        opacity: '0.8',
                    }}>Data and Analytics</p>
                </div>
            
            </div>

            

            <div className="card">
                <img src={wwd2} alt="design" />
                <div class="container">
                    <h3>User-centered design</h3>
                    <br />
                    <p id="showcase">We anticipate what users might need to do and ensure that the interface has element that are easy to access.</p>                
                </div>
            </div>

            <div className="card">
                <img src={wwd1}  alt="code" />
                <div class="container">
                    <h3>Product Development</h3> 
                    <br />
                    <p id="showcase">We are a fullstack engineering team using the best practices to deliver high quality codes for web and mobile applications.</p> 
                    
                </div>
            </div>

        </div>


        

    );
}


export default Wwd;
