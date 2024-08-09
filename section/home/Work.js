import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import pattern from "../../assets/pattern.webp";
import img1 from "../../assets/work1.webp";
import img2 from "../../assets/work2.webp";
import img3 from "../../assets/work3.webp";
import img4 from "../../assets/work4.webp";
import img5 from "../../assets/work5.webp";
import img6 from "../../assets/work6.webp";
import darkPattern from "../../assets/darkpattern.webp";
// import { AiOutlineClose } from "react-icons/ai";
// import { FiShare2, FiHeart, FiMessageSquare } from "react-icons/fi";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../../assets/logo1.webp";
import logo2 from "../../assets/logo2.webp";
import logo3 from "../../assets/logo3.webp";
import logo4 from "../../assets/logo4.webp";

import web1 from "../../assets/website-1.webp";
import web2 from "../../assets/website-2.webp";
import web3 from "../../assets/website-3.webp";
import web4 from "../../assets/website-4.webp";

import social1 from "../../assets/socialMedia1.png";
import social2 from "../../assets/socialMedia2.png";
import social3 from "../../assets/socialMedia3.png";
import social4 from "../../assets/socialMedia4.png";

const Work = () => {
  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2;

  const [active, setActive] = useState("All");
  // const [popUP, setPopUp] = useState(false);
  // const [imgSrc, setImgSrc] = useState("");
  // eslint-disable-next-line
  // const [popUpText, setPopUpText] = useState("");
  // eslint-disable-next-line
  // const [popUpTitle, setPopUpTitle] = useState("");

  const media2 = [
    {
      img: img1,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: img2,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: img3,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: img4,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: img5,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: img6,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
  ];

  const media = [
    {
      img: logo1,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: logo2,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: logo3,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: logo4,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: web1,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: web2,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: web3,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: web4,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: social1,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: social2,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: social3,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
    {
      img: social4,
      text: " Visit our website  to learn more about our services, and let us help you take your business to the next level.",
      title: "Cinepacks Studio",
    },
  ];

  const logoData = [
    { img: logo1 },
    { img: logo2 },
    { img: logo3 },
    { img: logo4 },
  ];

  const webData = [{ img: web1 }, { img: web4 }, { img: web2 }, { img: web3 }];

  const socialData = [
    { img: social1 },
    { img: social4 },
    { img: social2 },
    { img: social3 },
  ];

  const handleClick = (data) => {
   
  };

  return (
    <div>
      <div id="work">
        {/* <div id={popUP === true ? "work-popup" : "work-popup-disable"}>
          <div id="work-popup-div">
            <span
              id="work-close-model"
              onClick={() => {
                setPopUp(false);
              }}
            >
              <AiOutlineClose size={20} color="#A4A4A4" />
            </span>

            <img src={imgSrc} alt="" />
            <div id="popup-sec2">
              <div>
                <div id="popup-desc-1">
                  <p id="project">Project:</p>
                  <p id="title">Cinepacks Studio</p>
                </div>

                <div id="popup-desc-2">
                  <p id="description">Description:</p>
                  <p id="popup-text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus..
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <p id="popup-icons">
                  <p>
                    <FiHeart size={25} color="#5B5AFB" />
                  </p>
                  <p>
                    <FiMessageSquare size={25} color="#5B5AFB" />
                  </p>
                  <p>
                    <FiShare2 size={25} color="#5B5AFB" />
                  </p>
                </p>

                <span id="visit-button">Visit Website</span>
              </div>
            </div>
          </div>
        </div> */}

        <p id="work-title" className={darkCheck && "work-title-dark"}>
          Some of Our Work
        </p>
        <p id="work-text" className={darkCheck && "hero-text-dark"}>
          {" "}
          Discover our comprehensive suite of services, including web design,
          development, branding. social media marketing, and content creation.
          All aimed at propelling your online success.
        </p>

        <div id="work-nav">
          <div>
            <span
              id={active === "All" ? "work-nav-active" : "work-nav-text"}
              className={darkCheck && "hero-text-dark"}
              onClick={() => setActive("All")}
            >
              All
              {active === "All" && (
                <p className={darkCheck && "work-active-dark"}></p>
              )}
            </span>

            <span
              id={active === "Website" ? "work-nav-active" : "work-nav-text"}
              onClick={() => setActive("Website")}
              className={darkCheck && "hero-text-dark"}
            >
              Website
              {active === "Website" && (
                <p className={darkCheck && "work-active-dark"}></p>
              )}
            </span>

            <span
              id={active === "Logo" ? "work-nav-active" : "work-nav-text"}
              className={darkCheck && "hero-text-dark"}
              onClick={() => setActive("Logo")}
            >
              Logo
              {active === "Logo" && (
                <p className={darkCheck && "work-active-dark"}></p>
              )}
            </span>

            <span
              id={
                active === "Social Media" ? "work-nav-active" : "work-nav-text"
              }
              className={darkCheck && "hero-text-dark"}
              onClick={() => setActive("Social Media")}
            >
              Social Media
              {active === "Social Media" && (
                <p className={darkCheck && "work-active-dark"}></p>
              )}
            </span>
          </div>
        </div>

        <div id="work-comp">
          {active === "All" &&
            media.map((res,index) => {
              return (
                <img
                key={index}
                  id="work-comp-img"
                  alt=""
                  onClick={() => handleClick(res)}
                  src={res.img}
                />
              );
            })}

          {active === "Logo" &&
            logoData.map((res,index) => {
              return (
                <img
                key={index}
                  id="work-comp-img"
                  alt=""
                  onClick={() => handleClick(res)}
                  src={res.img}
                />
              );
            })}

          {active === "Website" &&
            webData.map((res,index) => {
              return (
                <img
                key={index}
                  id="work-comp-img"
                  alt=""
                  onClick={() => handleClick(res)}
                  src={res.img}
                />
              );
            })}

          
{active === "Social Media" &&
            socialData.map((res,index) => {
              return (
                <img
                key={index}
                  id="work-comp-img"
                  alt=""
                  onClick={() => handleClick(res)}
                  src={res.img}
                />
              );
            })}

          <img
            id="top-pattern"
            src={darkCheck ? darkPattern : pattern}
            alt=""
          />
          <img
            id="bottom-pattern"
            src={darkCheck ? darkPattern : pattern}
            alt=""
          />
        </div>

        <div id="work-carousel">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {media2.map((res,index) => {
              return (
                <SwiperSlide>
                  {" "}
                  <img
                    id="work-carousel-img"
                    alt=""
                    onClick={() => handleClick(res)}
                    src={res.img}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div id="talk-sec">
        <p>
          need help with your project?{" "}
          <span
            onClick={() => {
              window.open(
                "https://calendly.com/tezeract-io/meet"
              );
            }}
          >
            LET’S TALK
          </span>
        </p>
      </div>
    </div>
  );
};

export default Work;
