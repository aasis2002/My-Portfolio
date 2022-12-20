import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import Glasses from '../../img/glasses.png';

import { themeContext } from '../../Context';
import { useContext } from 'react'
import { motion } from "framer-motion";
import cv from './cv.pdf';



const Services = () => {
    const transition = {
        duration: 1,
        type: "spring",
      };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="Services" id="Services">
            {/*left side*/}
            <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <spane>
         Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
            </spane>
            <a href= {cv} download>
            <button className="button s-button">Download CV</button>
            </a>
             <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
             </div>
            {/* right side*/}
            <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe Pagemaker, Coredrawl"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
                
                    <Card
                    emoji={Glasses}
                    heading={'Design'}
                    detail={'Html, Css, Javascript, Nodejs, React'}
                    />
                </motion.div>
                <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
                   
                >
                    <Card
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={
                        "Lorem ispum dummy text are usually use in section where we need random text "
                    } />
                </motion.div>
                <div className="blur s-blur2 " style={{ background:"var(--purple)"}}></div>
                
 
            </div>

        </div>
    )
}
export default Services;