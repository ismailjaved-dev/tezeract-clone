import React from 'react'
import { useSelector } from 'react-redux'

const ServiceDetail = () => {

  const data =  [
    {title:"We conduct a general analysis", text: "First, we conduct a general analysis of your competitors and other market players. It doesn’t if it’s a logo or a brand name, one can’t work on the corporate identity without looking at what's already going on in the country and in the world. This will allow us to understand in which direction we have to move to create a logo design. "},
    {title:"We create a logo and corporate identity", text: "Based on the collected information and a careful strategy, we create a logo and other corporate identity elements. All design components are developed on an individual basis — a range of colors, fonts as well as a visual idea that will become the basis of your style.    "},
  ]
  
  const data2 = [
    {title:"We determine the    distinctive advantages  ", text: "Next, we determine the distinctive advantages of your company. On their basis, we create a sense bearing image, from which the brand’s corporate identity will grow in future. The image will consist not only of graphic elements but also of up-to-date sociological images, peculiar features of the company's geographical location, psychological aspects of marketing, etc.  "},
    {title:"We draft accurate and    detailed guidelines   ", text: "The final result of our work is drafting of accurate and detailed guidelines for the created corporate identity’s use."}
  ]


  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  return (
    <div id='service-detail'>
      <p id='benefit-title' className={darkCheck === 1 && "benefit-title-dark"}>The scheme of working at
BRANDING design is as
follows:</p>


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
