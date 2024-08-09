import React from 'react'
import gif from "../../assets/hero-gif.gif"
import pattern from "../../assets/pattern.webp"
import stone from "../../assets/stone.gif"
import { useSelector } from 'react-redux';
import darkPattern from "../../assets/darkpattern.webp"
import img1 from "../../assets/brand-logo1.svg"
import img2 from "../../assets/brand-logo2.svg"
import img3 from "../../assets/brand-logo3.svg"
import img4 from "../../assets/brand-logo4.svg"

const OurBrands = () => {

  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

    const media =  [
        {img : img1},{img : img3},{img : img2},{img : img4},
      
       
    ]

  return (
   <div style={{position:'relative'}}>
    <img src={gif} id='brand-background-gif' alt="" className={darkCheck  && "brand-dark-background-gif"}/>
     <div id='brands'>
       <div id='brand-title' className={darkCheck  && "brand-title-dark"}>
        <p>
            <span>Some</span>  Brands
        </p> 

        <p>
            <span>who </span> believe
        </p> 

        <p>
            <span>in </span> <span>our</span> <span>work</span>
        </p>

       </div>

     <div id='brand-gif' className={darkCheck  && "brand-gif-dark"}>
        <img src={gif} alt=''/>
        <div id='brand-gif-shadow' className={darkCheck  && "brand-gif-shadow-dark"}></div>
         <div id='brand-gif-shadow-2' className={darkCheck  && "brand-gif-shadow-dark-2"}></div>
         <div id='brand-gif-shadow-3' className={darkCheck  && "brand-gif-shadow-dark-3"}></div>
     </div>


    </div>

    <div id='brand-comp'>
              {
                media.map((res,index)=>{
                    return(
                        <img key={index} src={res.img} alt=''/>
                    )
                })
              }
           <img id="brand-pattern" src={darkCheck ? darkPattern :pattern} alt=''/>
           </div>
           <div id='stone-div'>
            <p id='stone-gif-shadow'className={darkCheck  && "stone-gif-dark-shadow"} ></p>
           <img id='stone' src={stone} alt=''/>
           </div>

   </div>
  )
}

export default OurBrands
