import React from "react";
import { useSelector } from "react-redux";
import darkLine from "../../../assets/herodarkline.webp";
import line from "../../../assets/hero-line.webp";

const Hero = () => {
  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2;

  return (
    <div id="service-page">
      <div id="career-dashboard">
        <div
          id="career-scroll-down"
          className={darkCheck && "career-scroll-down-dark"}
        >
          Scroll <br />
          Down
        </div>
        <div id="hero-sec">
          <div id="hero-line">
            <img src={darkCheck ? darkLine : line} alt=""/>
          </div>

          <div style={{ position: "relative" }}>
            {/* <div id='hero-animation'></div> */}

            <div id="heading" className={darkCheck && "heading-dark"}>
              <p>
                <div id="heading1-animation"></div>
                MOBILE APPS DESIGN AND DEVELOPMENT
              </p>{" "}
            </div>

            <p id="hero-text" className={darkCheck && "hero-text-dark"}>
              With our expert team of designers and developers, we specialize in
              crafting user-centric mobile applications tailored to your unique
              requirements. Whether you're an entrepreneur, a startup, or an
              established business, we have the expertise to bring your vision
              to life.
              <br />
              <br />
              <br />
              <div id="btn-container"
               onClick={()=>{
                window.open("https://calendly.com/tezeract-io/meet","_blank")
               }}
              >
                <span id="qoute-btn">Get A Quote</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
