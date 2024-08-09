import React from 'react'
import logo from "../assets/dark-logo.webp"
import vector from "../assets/vector.webp"
import google from "../assets/google.webp"
import meta from "../assets/meta.webp"
import { TbPhone, TbSend } from "react-icons/tb"
import { AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai"
import { SiFacebook, SiLinkedin } from "react-icons/si"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
       <div id='footer-bg'>
         <div id='footer'>

<div id="footer-sec1">

    <div id='footer-comp'>
        <div id='footer-text'>
            <img src={logo} alt=''/>
            <p> We are a leading digital agency specializing in web design, development, and digital marketing services. With a passion for innovation and a commitment to excellence, we help businesses of all sizes and industries thrive in the digital landscape. </p>
        </div>

        <div id='footer-links'>
            <span>360° CREATIVE AGENCY</span>
            <span><a href="/#more-div">About US</a></span>
            <span><a href="/#service">Service</a></span>
            <span><Link to="/career">Career</Link></span>
            <span>TERMS & CONDITION</span>
            <span>PRIVACY POLICY</span>
        </div>

        <div id='link-sec'>
   
    {/* <p>Follow us on social media!</p> */}

    <div>
        <AiFillInstagram size={25} />
        
        <p>Instagram</p>
        <a target='blank' href='https://www.instagram.com/tezeract_io/'>

        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
        </a>
    </div>

    <div>
     <SiFacebook size={25} />
        <p>Facebook</p>
        <a target='blank' href='https://www.facebook.com/profile.php?id=100092412650537&mibextid=ZbWKwL'>

        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
        </a>
    </div>

    <div>
    <SiLinkedin size={25} />
        <p>Linkedin</p>
        <a target='blank' href='https://www.linkedin.com/company/tezeract-io/'>
        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
        </a>
    </div>

    <div>
        <AiFillTwitterCircle size={25} />
        <p>Twitter</p>
        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
    </div>


    {/* <div id='partners'>

        <img src={google}/>
        <img src={meta}/>
    Copyright © All Rights Reserved 
    </div> */}


</div>

    </div>

    <div id='footer-comp2'>
        <div id='footer-extra'>
            <img src={vector} alt=''/>
            <p>We design brand odysseys</p>
        </div>

        <div id='footer-contact'>
            <p><TbSend /> hello@tezeract.io</p>
            <p><TbPhone /> +92 3228314404</p>
            <p><TbPhone /> +92 3302857018</p>
        </div>
    </div>

</div>

<div id='footer-sec2'>
    <img src={logo} alt=''/>
    <p>Follow us on social media!</p>

    <div>
        <AiFillInstagram size={25} />
        <p>Instagram</p>
        <a target='blank' href='https://www.instagram.com/tezeract_io/'>
        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
        </a>
    </div>

    <div>
     <SiFacebook size={25} />
        <p>Facebook</p>
        <a target='blank' href='https://www.facebook.com/profile.php?id=100092412650537&mibextid=ZbWKwL'>

        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
        </a>
    </div>

    <div>
    <SiLinkedin size={25} />
        <p>Linkedin</p>
        <a target='blank' href='https://www.linkedin.com/company/tezeract-io/'>
        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
        </a>
    </div>

    <div>
        <AiFillTwitterCircle size={25} />
        <p>Twitter</p>
        <HiOutlineArrowNarrowRight  size={20} 
        style={{cursor:"pointer"}}
        />
    </div>


    <div id='partners'>

        <img src={google} alt=''/>
        <img src={meta} alt=''/>
    Copyright © All Rights Reserved 
    </div>


</div>

</div>
       </div>
    )
}

export default Footer
