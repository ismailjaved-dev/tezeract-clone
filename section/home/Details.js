import React,{useState} from 'react'
import { BsMouse } from "react-icons/bs"
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';

const Details = () => {


  const state = useSelector((state) => state);
  const darkCheck = state.dark%2

  const [active, setActive] = useState(false)

  const data = [
    {title:"CUPS OF COFFEE", numbers:"2563"},
    {title:"HAPPY CLIENTS", numbers:"200"},
    {title:"PROJECTS FINISHED", numbers:"335"},
    {title:"TICKETS CLOSED", numbers:"3375"},
  ]

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 2300 ) {
      setActive(true)
    } 
  });

  return (
    <div>
        <div id='scroll-more' className={darkCheck && "scroll-down-dark"}>
          Scroll <br/> More
          <div><BsMouse size={25}/></div>
        </div>


        <div id='detail-div' className={darkCheck && "detail-div-dark"}>
          {
            data.map((res)=>{
              return(
                <span id='detail-container'>
                  <p id='detail-number' className={darkCheck && "detail-number-dark"}>
                    {
                      active ? <><CountUp end={res.numbers} duration={2} />+</> :
                      <p>{res.numbers}+</p>
                    }
                  </p>
                  <p id='detail-title'>{res.title}</p>
                </span>
              )
            })
          }
        </div>
        <div id='detail-line'>
          <div></div>
        </div>

    </div>
  )
}

export default Details
