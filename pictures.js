import React from 'react';
import team1 from './team1.jpg';
import team2 from './team2.jpg';
import team3 from './team3.jpg';
import team4 from './team4.jpg';
import team5 from './team5.jpg';



function Pictures() {
    return (

        
        <div className="aboutUs" id="about us">

            <div className="mainAbout">
                <h5>About Us</h5>

                <p>We are a diverse team of designers and developers dedicated to delivering world-class products with high performance analytics and functionality. We employ grit, problem-solving ability and high learning velocity to achieve set objectives with proprietary tools and processes.</p>
            </div>
            
                <div className="scroller">
                <img className="al" src={team5} alt="" />
            
{/* add two boxes with designed words and one of the images */}
            
            <img className="bv" src={team2} alt="" />
        

        
            <img className="cl" src={team4} alt="" />
        

        
            <img className="ec" src={team3} alt="" />
        

        
            <img className="ft" src={team1} alt="" />
                </div>
            
            
        </div>

    );
}



export default Pictures;