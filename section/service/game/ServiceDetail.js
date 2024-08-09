import React from 'react'
import { useSelector } from 'react-redux'

const ServiceDetail = () => {

  const data =  [
    {title:"Conceptualization", text: "First, we conduct a general analysis of your competitors and other market players. It doesn’t if it’s a logo or a brand name, one can’t work on the corporate identity without looking at what's already going on in the country and in the world. This will allow us to understand in which direction we have to move to create a logo design.    "},
    {title:"Polishing", text: "In the polishing stage, developers focus on refining the game's features and enhancing the overall experience. This involves fine-tuning gameplay mechanics, adjusting difficulty levels, optimizing performance, and fixing bugs or glitches. Graphic and sound elements are further enhanced to create a visually stunning and immersive environment."},
  ]
  
  const data2 = [
    {title:"Production ", text: "Game development moves into the production phase once the game design is finalized. This stage focuses on implementing the elements outlined in the design document. Developers work on coding, creating art assets, designing levels, and integrating audio. The production stage involves collaboration among programmers, artists, sound designers, and other specialists."},
    {title:"Release and Post-Release", text: "The final stage of game development involves preparing for release and managing the post-release phase. Developers ensure compatibility across platforms and handle distribution logistics. Marketing and promotional efforts are employed to generate awareness and attract players."}
  ]


  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  return (
    <div id='service-detail'>
      <p id='benefit-title' className={darkCheck === 1 && "benefit-title-dark"}>The STAGES OF DESIGNING & DEVELOPING TRENDING GAMES:</p>


  <div id='landing-comp'>
      <div >
        {
          data.map((res)=>{
            return(
              <div id='landing-div'>
                <p id='landing-title' className={darkCheck === 1 && "landing-title-dark"}>{res.title}</p>
                <p id='landing-text'className={darkCheck === 1 && "landing-text-dark"}>{res.text}</p>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          data2.map((res)=>{
            return(
              <div id='landing-div'>
                <p id='landing-title'className={darkCheck === 1 && "landing-title-dark"}>{res.title}</p>
                <p id='landing-text'className={darkCheck === 1 && "landing-text-dark"}>{res.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
<br/>
<br/>
    <div id='btn-container'>
           <span id='qoute-btn'
            onClick={()=>{
              window.open("https://calendly.com/tezeract-io/meet","_blank")
             }}
           >Get A Quote</span>
            </div>
    </div>
  )
}

export default ServiceDetail
