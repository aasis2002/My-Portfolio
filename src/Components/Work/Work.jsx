import React from "react";
import './Work.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { motion } from "framer-motion";
import { themeContext } from '../../Context';
import { useContext } from 'react'
import { Link } from "react-scroll"


const Work = ()=> {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="work" id='work'>
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }} >
            Works for All these</span>
            <span>Brands & Clients</span>
            <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
          <br/>
          Lorem ispum is simpley dummy text of printing 
          <br/>
          Lorem ispum is simpley dummy text

            </spane>
            <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire me</button>
            </Link>
             <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
             </div> 
             {/*right side*/}
             <div className="w-right" >
             <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
                
                
                className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt=""/>
                </div>
                <div className="w-secCircle">
                <img src={Fiverr} alt=""/>
                </div>
                <div className="w-secCircle">
                <img src={Amazon} alt=""/>
                </div>
                <div className="w-secCircle">
                <img src={Shopify} alt=""/>
                </div>
                <div className="w-secCircle">
                <img src={Facebook} alt=""/>
                </div>
                </motion.div>
                {/*background circles*/}
                <div className=" w-backCircle blueCircle"></div>
                <div className=" w-backCircle yellowCircle"></div>
             </div>
        </div>

    );
};

export default Work;