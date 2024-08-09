import React from 'react'
import { RxArrowRight } from "react-icons/rx"
import spinner from "../../assets/spinner.webp"
import darkSpinner from "../../assets/dark-spinner.webp"
import { useSelector } from 'react-redux';
import video1 from "../../assets/video1.mp4"
import { useNavigate } from 'react-router-dom';

const Services = () => {

   const navigate = useNavigate()

    const state = useSelector((state) => state);
    const darkCheck = state.dark % 2


    const video1 = require("../../assets/video1.mp4")
    const video2 = require("../../assets/video2.mp4")
    const video3 = require("../../assets/video3.mp4")

    const data = [
        { title: "Website Design & Development",link:"/service/website-design-and-development"  },
        { title: "Mobile App Design & Development",link:"/service/mobile-design-and-development"  },
        { title: "Digital Marketing",link:"/service/digital-marketing"  },
        { title: "Branding & Identity",link:"/service/branding-and-identity"  },
        { title: "Data Analytics & Visualization",link:"/service/data-analytics-and-visiualization"  },
        { title: "Game Development",link:"/service/game-development"  },
        { title: "Lead Generation",link:"/service/lead-generation"  },
    ]

    return (
        <div style={{ position: 'relative' }}>
            <div id='service-line'></div>
            <div id='service'>

                {
                    data.map((res) => {
                        return (
                            <div id='service-container' className={darkCheck && "service-container-dark"} 
                             onClick={()=> {
                                navigate(`${res.link}`)
                                window.scrollTo(0,0)
                             }}
                            >
                                <div id='service-container-2' className={darkCheck && "service-container-2-dark"}>
                                    <p id='service-title' className={darkCheck && "service-title-dark"}>{res.title}</p>

                                    <p id='service-icon'><RxArrowRight id='services-text' size={40} color={darkCheck ? "black" : "white"} /></p>
                                </div>
                                <p id='service-title' className={darkCheck && "service-title-dark"}>{res.title}</p>

                                <p><RxArrowRight id='services-text' size={40} color={darkCheck && "white"} /></p>
                            </div>
                        )
                    })
                }
                <div id='service-container'>
                    {darkCheck ? <img src={darkSpinner} />
                        : <img src={spinner} />}

                    <video id='video1' width="320" height="220" loop autoPlay muted>
                        <source src={video2} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video>
                    <video id='video2' width="320" height="220" loop autoPlay muted>
                        <source src={video1} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video>
                    <video id='video2' width="320" height="220" loop autoPlay muted>
                        <source src={video1} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video><video id='video3' width="320" height="220" loop autoPlay muted>
                        <source src={video3} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video>
                    {/* <iframe id="video2" src={video1} frameborder="0" autoplay=""></iframe>  */}


                </div>

            </div>
        </div>
    )
}

export default Services
