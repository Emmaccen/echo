import React from 'react';
import logo from './logo.png';
import { Link, animateScroll as scroll } from "react-scroll";




function Header() {
    return (

        /*Make nav responsive, maybe burger or minimized.......but hamburger would do better*/

        <div className="app">

                
                    <div className='logo'>
                        <img src={logo} style={{
                            height: '50px ',
                            width: '100px'
                        }} alt="logo" />
                    </div>
                

                    <nav  className='topNav'>

                            <Link className="link"
                            activeClass="active" to="about us" spy={true} smooth={true} offset={0} duration={500}>About Us</Link>
                            <Link className="link"
                            activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
                            <Link className="link"
                            activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
                            

                    </nav>
                    
                    <div className="mainButton">
                        <button className="button">Get Started</button>   
                    </div>
                    
        </div>
    );
}


export default Header;