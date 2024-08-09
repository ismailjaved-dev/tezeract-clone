import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import pattern from "../../../assets/pattern.webp"
import img1 from "../../../assets/work1.webp"
import img2 from "../../../assets/work2.webp"
import img3 from "../../../assets/work3.webp"
import img4 from "../../../assets/work4.webp"
import img5 from "../../../assets/work5.webp"
import img6 from "../../../assets/work6.webp"
import img7 from "../../../assets/work7.webp"
import img8 from "../../../assets/work8.webp"
import img9 from "../../../assets/work9.webp"
import img10 from "../../../assets/work10.webp"
import img11 from "../../../assets/work11.webp"
import img12 from "../../../assets/work12.webp"
import stone from "../../../assets/stone.gif"
import darkPattern from "../../../assets/darkpattern.webp"
import { AiOutlineClose } from "react-icons/ai"
import { FiShare2, FiHeart , FiMessageSquare } from "react-icons/fi"
import { useSelector } from 'react-redux';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const LandingPage = () => {

  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2

  const [active, setActive] = useState("All")
  const [popUP, setPopUp] = useState(false)
  const [imgSrc, setImgSrc] = useState("")
  const [popUpText, setPopUpText] = useState("")
  const [popUpTitle, setPopUpTitle] = useState("")


  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  };


  const media2 = [
    {
      img: img1, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img2, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img3, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img4, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img5, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img6, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    }
  ]

  const media = [
    {
      img: img1, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img2, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img3, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img4, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img5, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img6, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img7, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img8, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img9, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img10, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img11, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    },
    {
      img: img12, text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.", title: "Cinepacks Studio"
    }


  ]


  const handleClick = (data) => {
    setImgSrc(data.img)
    setPopUpText(data.text)
    setPopUpTitle(data.title)
    setPopUp(true)
  }

  return (
    <div>
      <div id='work'>

        <div id={popUP == true ? 'work-popup' : 'work-popup-disable'}>
          <div id='work-popup-div'>
            <span id="work-close-model" onClick={() => { setPopUp(false) }}>
              <AiOutlineClose size={20} color='#A4A4A4'/>
            </span>


            <img src={imgSrc} />
            <div id='popup-sec2'>
              <div>
              <div id='popup-desc-1'>
               <p id='project'>Project:</p>
               <p id='title'>Cinepacks Studio</p>
               </div>
 
               <div id='popup-desc-2'>
                  <p id='description'>Description:</p>
                  <p id='popup-text'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                  </p>
               </div>
              </div>
              
              <div style={{display:"flex",flexDirection:"column",justifyContent:"end"}}>
                <p id='popup-icons'>
                  <p><FiHeart size={25}  color='#5B5AFB'/></p>
                  <p><FiMessageSquare size={25}  color='#5B5AFB'/></p>
                  <p><FiShare2 size={25}  color='#5B5AFB'/></p>
                </p>

                <span id='visit-button'>
                Visit Website
                </span>
              </div>

            </div>
          </div>
        </div>




        <p id="work-title" className={darkCheck && "work-title-dark"}>Some of Our Work</p>
        <p id='work-text' className={darkCheck && "hero-text-dark"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div id='work-nav'>
          <div>
            <span id={active === "All" ? "work-nav-active" : 'work-nav-text'}
              className={darkCheck && "hero-text-dark"}
              onClick={() => setActive("All")}
            >All
              {active === "All" && <p className={darkCheck && "work-active-dark"}></p>}
            </span>

            <span id={active === "Website" ? "work-nav-active" : 'work-nav-text'}
              onClick={() => setActive("Website")}
              className={darkCheck && "hero-text-dark"}
            >Website
              {active === "Website" && <p className={darkCheck && "work-active-dark"}></p>}
            </span>

            <span id={active === "Logo" ? "work-nav-active" : 'work-nav-text'}
              className={darkCheck && "hero-text-dark"}
              onClick={() => setActive("Logo")}
            >Logo
              {active === "Logo" && <p className={darkCheck && "work-active-dark"}></p>}
            </span>

            <span id={active === "Social Media" ? "work-nav-active" : 'work-nav-text'}
              className={darkCheck && "hero-text-dark"}
              onClick={() => setActive("Social Media")}
            >Social Media
              {active === "Social Media" && <p className={darkCheck && "work-active-dark"}></p>}
            </span>

          </div>
        </div>


        <div id='work-comp'>
          {
            media.map((res) => {
              return (
                <img id='work-comp-img' onClick={() => handleClick(res)} src={res.img} />
              )
            })
          }




          <img id='top-pattern' src={darkCheck ? darkPattern : pattern} />
          <img id='bottom-pattern' src={darkCheck ? darkPattern : pattern} />
        </div>


        <div id='work-carousel'>
          
          <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            {
              media2.map((res) => {
                return (
                  <SwiperSlide> <img id='work-carousel-img' onClick={() => handleClick(res)} src={res.img} /></SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

      </div>


      <div id='talk-sec'>
    <p>need help with your project? <span>LET’S TALK</span></p>
    </div>

 <div style={{position:"relative"}}>
 <div id='stone-div'>
            <p id='stone-gif-shadow'className={darkCheck  && "stone-gif-dark-shadow"} ></p>
           <img id='stone' src={stone}/>
           </div>
 </div>


    </div>
  )
}

export default LandingPage
