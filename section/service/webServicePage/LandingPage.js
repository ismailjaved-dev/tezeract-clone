import React from "react";
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
import stone from "../../../assets/stone.gif"
import darkPattern from "../../../assets/darkpattern.webp"
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {

  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2

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
    }


  ]



  return (
    <div>
      <div id='work'>





        <p id="work-title" className={darkCheck && "work-title-dark"}>Some of the websites we have built.</p>
       <br/>
       <br/>


        <div id='work-comp'>
          {
            media.map((res) => {
              return (
                <img id='work-comp-img' src={res.img} alt=""/>
              )
            })
          }




          <img id='top-pattern' src={darkCheck ? darkPattern : pattern} alt=""/>
          <img id='bottom-pattern' src={darkCheck ? darkPattern : pattern} alt=""/>
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
                  <SwiperSlide> <img id='work-carousel-img' alt="" src={res.img} /></SwiperSlide>
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
           <img id='stone' src={stone} alt=""/>
           </div>
 </div>


    </div>
  )
}

export default LandingPage
