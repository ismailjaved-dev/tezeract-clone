import React from 'react'
import { useSelector } from 'react-redux'

const ServiceDetail = () => {

  const data =  [
    {title:"LANDING PAGE", text: "It’s a selling website which, as a rule, consists of one page. The shortest time for turning a visitor into a client. This website type is the most fast-payback."},
    {title:"ONLINE STORE", text: "The best solution for selling a wide range of products. It is online stores that turn single- time buyers into permanent customers, and the intention to find some small thing — into a full shopping cart."},
  ]
  
  const data2 = [
    {title:"CORPORATE WEBSITE", text: "If a landing page is the product’s face, a corporate website is the face of your business. It works as a selling website when a customer needs to understand with what kind of company he/she has to deal with."},
    {title:"BUSINESS CARD WEBSITE", text: "A small website which, as a rule, consists of one (or several) web pages with basic information about a company or a private person."}
  ]


  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  return (
    <div id='service-detail'>
      <p id='benefit-title' className={darkCheck === 1 && "benefit-title-dark"}>WHAT KIND OF WEBSITES
DO WE CREATE?</p>


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

    <div id="btn-container">
        <span id="qoute-btn"
         onClick={()=>{
          window.open("https://calendly.com/tezeract-io/meet","_blank")
         }}
        >Get A Quote</span>
      </div>

    </div>
  )
}

export default ServiceDetail
