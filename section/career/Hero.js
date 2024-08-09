import React from 'react'
import line from "../../assets/hero-line.webp"
import darkLine from "../../assets/herodarkline.webp"
import pattern from  "../../assets/pattern.webp"
import darkPattern from  "../../assets/darkpattern.webp"
import gif from "../../assets/hero-gif.gif"
import "./Career.css"
import { useSelector } from 'react-redux';

const Hero = () => {

    const state = useSelector((state) => state);
    const darkCheck = state.dark%2

  return (
    <div>
    
    <div id='career-dashboard'>
      <div id='career-scroll-down' className={darkCheck && "career-scroll-down-dark"}>Scroll <br/>Down</div>
      <div id='hero-sec'>


      <div id='hero-line'>
          <img src={darkCheck ? darkLine : line}/>
      </div>
         
        <div style={{position:'relative'}}>
        {/* <div id='hero-animation'></div> */}


          <div id="heading" className={darkCheck && "heading-dark"}>

            <p >
          <div id='heading1-animation'></div>
              Careers
              </p> </div>

         
          <p id="hero-text" className={darkCheck && "hero-text-dark"}>We help startups, mid-level and enterprise businesses grow, launch products and gain a competitive advantage in today’s digital-led world.</p>
           
         
        </div>

      </div>


         
    </div>
  </div>
  )
}

export default Hero
