import React from 'react'
import { useSelector } from 'react-redux'

const ServiceDetail = () => {

  const data =  [
    {title:"targeted LEADS", text: "We understand the importance of quality over quantity. Our expert team employs advanced targeting techniques to ensure your leads are highly relevant and have a genuine interest in your products or services."},
    {title:"multi-channel approach", text: "We leverage the power of multiple channels to capture leads from various sources. Whether it's social media, search engine marketing, email marketing, or content marketing, we've got you covered."},
  ]
  
  const data2 = [
    {title:"customized approach", text: "We don't believe in one-size-fits-all solutions. Our lead generation strategies are designed to align with your unique business goals, ensuring maximum effectiveness and ROI."},
    {title:"data-driven insights", text: "We don't just generate leads; we provide you with actionable insights. Our robust analytics and reporting tools help you understand your lead generation performance, enabling you to make informed decisions for continuous improvement."}
  ]


  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  return (
    <div id='service-detail'>
      <p id='benefit-title' className={darkCheck === 1 && "benefit-title-dark"}>we are data-driven and we provide qualified leads to you.</p>


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
