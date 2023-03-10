import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll/modules";



const Navbar = () => {
    return (
        <div className="n-wrapper">
           <div className="n-left">
                <div className="n-name">Andrew</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} actveClass='activeClass'>
                        <li>Home</li> 
                        </Link>

                        <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='experience' smooth={true}> 
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li> 
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true} >
                        <li>Testimonials</li>
                        </Link>

                    </ul>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                <button className="button n-button">
                
                    Contact
                </button>
                </Link>
            </div> 
        </div>
    )
};

export default Navbar;