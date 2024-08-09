import React from 'react'
import gif from "../../assets/gif.gif"
import pattern from "../../assets/frame.webp"
import darkPattern from "../../assets/darkframe.webp"
import { useSelector } from 'react-redux';
import video from "../../assets/video8.mp4"


const GifContainer = () => {

  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  return (
    <div>
      <div id='gif-div'>
        
        {/* <iframe src='https://assets.website-files.com/6205ecdcec584c56193d6121/6306565a2fc10d28a0829211_RocketAir_Design_Reel_2022_Thumbnail_1920_2-transcode.mp4?autplay=1' >

        </iframe> */}

<video loop="true" autoplay="autoplay" id="vid" muted>
  <source src="https://assets.website-files.com/6205ecdcec584c56193d6121/6306565a2fc10d28a0829211_RocketAir_Design_Reel_2022_Thumbnail_1920_2-transcode.mp4" type="video/mp4"/>

</video>


        {/* <img id='gif' src={gif}/> */}
        {
          darkCheck ? <img id='big-pattern' src={darkPattern}/> :<img id='big-pattern' src={pattern}/>
        }
      </div>
    </div>
  )
}

export default GifContainer
