import React from 'react'
import { useSelector } from 'react-redux';
import darkLine from '../../../assets/herodarkline.webp'
import line from '../../../assets/hero-line.webp'

const Hero = () => {

    const state = useSelector((state) => state);
    const darkCheck = state.dark%2

  return (
    <div id='service-page'>
         <div id='career-dashboard'>
      <div id='career-scroll-down' className={darkCheck && "career-scroll-down-dark"}>Scroll <br/>Down</div>
      <div id='hero-sec'>


      <div id='hero-line'>
          <img src={darkCheck ? darkLine : line} alt=''/>
      </div>
         
        <div style={{position:'relative'}}>
        {/* <div id='hero-animation'></div> */}


          <div id="heading" className={darkCheck && "heading-dark"}>

            <p >
          <div id='heading1-animation'></div>
          Game Development

              </p> </div>

         
          <p id="hero-text" className={darkCheck && "hero-text-dark"}>Creativity knows no bounds and gaming experiences are taken to new heights. We are a passionate team of game developers dedicated to crafting immersive, captivating, and unforgettable gaming adventures.
          <br /><br /><br />
           <div id='btn-container'>
           <span id='qoute-btn'
            onClick={()=>{
              window.open("https://calendly.com/tezeract-io/meet","_blank")
             }}
           >Get A Quote</span>
            </div>
          </p>
          
        
        </div>

        
      </div>


         
    </div>
    </div>
  )
}

export default Hero
