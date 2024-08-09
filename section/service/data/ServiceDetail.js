import React from 'react'
import { useSelector } from 'react-redux'

const ServiceDetail = () => {

  const data =  [
    {title:"Interactive Visualizations", text: "Dive deep into your data with interactive charts, graphs, and maps. Our intuitive interface allows you to explore patterns, trends, and correlations, providing a comprehensive understanding of your information."},
    {title:"Customizable Dashboards", text: "Tailor your data visualizations to suit your unique needs. With our flexible dashboard builder, you can choose from a wide range of widgets, drag-and-drop elements, and customize visual styles. Create personalized dashboards that deliver the exact information you require."},
  ]
  
  const data2 = [
    {title:"Real-time Analytics", text: "Stay ahead of the curve with real-time data analytics. Our platform enables you to monitor live data streams, identify emerging trends, and make informed decisions on the fly. Get instant insights and take immediate action for maximum impact."},
    {title:"data integration", text: "Seamlessly connect and integrate data from multiple sources, including databases, spreadsheets, APIs, and cloud storage. Our platform supports a variety of data formats, ensuring that you can work with all your relevant data in one central location."}
  ]


  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  return (
    <div id='service-detail'>
      <p id='benefit-title' className={darkCheck === 1 && "benefit-title-dark"}>Experience data visualization & analytics like never before.</p>


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
