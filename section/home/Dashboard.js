import React from 'react'
import "./Home.css"
import line from "../../assets/hero-line.webp"
import darkLine from "../../assets/herodarkline.webp"
import pattern from  "../../assets/pattern.webp"
import darkPattern from  "../../assets/darkpattern.webp"
import gif from "../../assets/hero-gif.gif"
import { useSelector } from 'react-redux';

const Dashboard = () => {

   const state = useSelector((state) => state);
      const darkCheck = state.dark%2

  return (
    <div>
      <div id='hero-gif' className={darkCheck  && "hero-gif-dark"}>
        <img src={gif} />
         <div id='hero-gif-shadow' className={darkCheck  && "hero-gif-shadow-dark"}></div>
         <div id='hero-gif-shadow-2' className={darkCheck  && "hero-gif-shadow-dark-2"}></div>
        </div>
      <div id='dashboard'>
        <div id='scroll-down' className={darkCheck && "scroll-down-dark"}>Scroll <br/>Down</div>
        <div id='hero-sec'>


        <div id='hero-line'>
            <img src={darkCheck ? darkLine : line}/>
        </div>
           
          <div style={{position:'relative'}}>
          {/* <div id='hero-animation'></div> */}
           <p id="hero-tagline" className={darkCheck && "hero-tagline-dark"}>
            
            leading global creative agency
            </p>



            <div id="heading" className={darkCheck && "heading-dark"}>

              <p >
            <div id='heading1-animation'></div>
                WE <span> DESIGN </span>
                </p> </div>

              <div id="heading" className={darkCheck && "heading-dark"}>
            
            
               <p>
               <div id='heading2-animation'></div>
                <span>  BRAND</span></p> </div>

              <div id="heading" className={darkCheck && "heading-dark"}>
            
            
               <p>
               <div id='heading3-animation'></div>
                ODYSSEYS</p></div>
           
           
            <p id="hero-text" className={darkCheck && "hero-text-dark"}>We help startups, mid-level and enterprise businesses grow, launch products and gain a competitive advantage in today’s digital-led world.</p>
             
           
          </div>

        </div>


            <div id='patterns'>
                {
                  darkCheck ? <img src={darkPattern}/> :<img src={pattern}/>
                }
            </div>
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
