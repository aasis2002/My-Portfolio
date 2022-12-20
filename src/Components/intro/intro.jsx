
import * as React from 'react'
import './intro.css';
import Github from '../../img/github.png';
import Facebook from "../../img/Facebook.png";
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

import {Link} from 'react-scroll'




const Intro = () => {
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className='Intro' id='Intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
                    <span>Aashish Mehta</span>
                    <span> Frontend Developer with high
                            level experience in web designing
                             and development , producting the 
                             Quality work</span> 
                    </div>
                    <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button> 
                    </Link>
                    <div className='i-icons'>
                        <a href='https://github.com/aasis2002'><img src={Github} alt="" />
                        </a>
                        <a href='https://www.facebook.com/aashish.mehta.5249'>
                         <img src={Facebook} alt="" />
                        </a>
                       <a href='https://www.instagram.com/invites/contact/?i=1x2l7lmcud178&utm_content=3f7qfsj'>
                        <img src={Instagram} alt=''/>
                        </a>

                    </div>
                    </div>
            <div className="i-right">
                <img src={Vector1} alt= "" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                 initial={{ left: "-36%" }}
                 whileInView={{ left: "-24%" }}
                 transition={transition}  
                src={glassesimoji}
                alt= ""
                /> 
                <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
                
                  style={{top:'-4%', left:'65%'}}>
                  <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
                style={{top:'18rem', left: '1rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                <div className='blur' style={{background: "rgb(238 210 255)"}}>

                </div>
                <div className="blur"
                style={{
                    background: '#c1f5ff',
                    top:'17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}>
                </div>
            </div>


        </div>

    );
};

export default Intro;