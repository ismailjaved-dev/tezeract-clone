import React from 'react'
import { MdOutlineArrowRight } from "react-icons/md"
import pattern from "../../assets/pattern.webp"
import darkPattern from "../../assets/darkpattern.webp"
import { useSelector } from 'react-redux';

const More = () => {

  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  return (
    <div>
      <div id='more-line'></div>

          <div id='more-div'>
          <div id='more-title' className={darkCheck && "heading-dark"} >Go <br/> Beyond the <span>Horizon</span> with Us!
           <div id='more-pattern'>
            {
              darkCheck ? <img src={darkPattern} alt=''/>:<img src={pattern} alt=''/>
            }
           </div>
          </div>
      
          <div id='astronut-gif' className={darkCheck && "astronut-gif-dark"}>
            <div id="astronut-shadow-1" className={darkCheck && "astronut-gif-shadow-dark"}></div>
            <div id="astronut-shadow-2" className={darkCheck && "astronut-gif-shadow-dark"}></div>
            <div id="astronut-shadow-3" className={darkCheck && "astronut-gif-shadow-dark"}></div>
            <div id="astronut-shadow-4" className={darkCheck && "astronut-gif-shadow-dark-4"}></div>
            <p id="gif-bg" className={darkCheck && "gif-bg-dark"}></p>

          </div>
          <div id='more-text' className={darkCheck && "hero-text-dark"}>
          We’re Tezeract, and we believe that originality is worth celebrating in practice. We love working with those who share our passion for uniqueness, and we want to help you express your own unique perspective.
            <p id='more-btn' className={darkCheck && "more-btn-dark"}
            onClick={()=>{
              window.open("https://calendly.com/tezeract-io/meet","_blank")
            }}
            >  
          Get A Quote<MdOutlineArrowRight />
        </p>
          </div>
          </div>

    </div>
  )
}

export default More
