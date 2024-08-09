import React, { useState } from "react";
import lightLogo from "../assets/light-logo.webp";
import vector from "../assets/mobile-vector.png";
import darklogo from "../assets/dark-logo.webp";
import Switch from "@mui/material/Switch";
import { MdOutlineNavigateNext, MdMenu, MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { activeDark } from "../reducer/Actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const navigate =  useNavigate()

  const [sideMenu, setSideMenu] = useState(false);

  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2;

  const dispatch = useDispatch();

  return (
<React.Fragment>
<div id="navbar">
      <nav>
        <div id="nav1">
          <Link to="/">
            <img src={darkCheck === 1 ? darklogo : lightLogo} alt="" />
          </Link>
          <div>
            <Link to="/">
              <img id="nav-vector" src={vector} alt="" />
            </Link>
          </div>
        </div>
        <div id="nav2" className={darkCheck === 1 && "nav2-dark"}>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <a href="/#more-div">About US</a>
          </span>
          <span>
            <a href="/#service">Service</a>
          </span>
          <span>
            <Link to="/career">Career</Link>
          </span>
        </div>

        <div id="nav3">
          <span>
            <Switch
              onClick={() => {
                dispatch(activeDark());
              }}
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </span>

          <span
            onClick={() => {
              window.open("https://calendly.com/tezeract-io/meet", "_blank");
            }}
            id="qoute-btn"
          >
            GET A QUOTE{" "}
            <MdOutlineNavigateNext
              style={{ marginBottom: "-0.1rem" }}
              size={20}
            />
          </span>
        </div>

        {sideMenu ? (
          <p id="sidebarCloseBtn" onClick={()=> setSideMenu(false)}>
            <MdClose color={darkCheck === 1 ? "white" : "black"} size={25} />
          </p>
        ) : (
          <p id="sidebarOpenBtn" onClick={()=> setSideMenu(true)}>
            <MdMenu color={darkCheck === 1 ? "white" : "black"} size={25} />
          </p>
        )}

      </nav>

     

    </div>

{
  sideMenu &&
  <div id="sidebar">
    <div id="navbar">
      <nav>
        <div id="nav1">
          <Link to="/">
            <img src={darkCheck === 1 ? darklogo : lightLogo} alt="" />
          </Link>
          <div>
            <Link to="/">
              <img id="nav-vector" src={vector} alt="" />
            </Link>
          </div>
        </div>
        <div id="nav2" className={darkCheck === 1 && "nav2-dark"}>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <a href="/#more-div">About US</a>
          </span>
          <span>
            <a href="/#service">Service</a>
          </span>
          <span>
            <Link to="/career">Career</Link>
          </span>
        </div>

        <div id="nav3">
          <span>
            <Switch
              onClick={() => {
                dispatch(activeDark());
              }}
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </span>

          <span
            onClick={() => {
              window.open("https://calendly.com/tezeract-io/meet", "_blank");
            }}
            id="qoute-btn"
          >
            GET A QUOTE{" "}
            <MdOutlineNavigateNext
              style={{ marginBottom: "-0.1rem" }}
              size={20}
            />
          </span>
        </div>

        {sideMenu ? (
          <p id="sidebarCloseBtn" onClick={()=> setSideMenu(false)}>
            <MdClose color={darkCheck === 1 ? "white" : "black"} size={25} />
          </p>
        ) : (
          <p id="sidebarOpenBtn" onClick={()=> setSideMenu(true)}>
            <MdMenu color={darkCheck === 1 ? "white" : "black"} size={25} />
          </p>
        )}

      </nav>

     

    </div>
    <div id="sidebar-bg1"></div>
    <div id="sidebar-bg2"></div>
  <div id="sidebar-content">
   <p onClick={()=> {
     setSideMenu(false)
    navigate("/")
   }}>Home</p>
   
   <a  onClick={()=> {
    setSideMenu(false)
  }}  href="/#more-div"
   ><p>About Us</p></a>

   <a
     onClick={()=> {
      setSideMenu(false)
    }}  href="/#service"
     
   >

   <p>Service</p>
   </a>


   <p onClick={()=> {
     setSideMenu(false)
    navigate("/career")
   }}>Career</p>
   
   <span
     onClick={() => {
       window.open("https://calendly.com/tezeract-io/meet", "_blank");
     }}
     id="qoute-btn"
   >
     GET A QUOTE{" "}
     <MdOutlineNavigateNext
       style={{ marginBottom: "-0.1rem" }}
       size={20}
     />

   </span>
  </div>
</div>
 }
</React.Fragment>
  );
};

export default Navbar;
