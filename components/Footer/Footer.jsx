import React from 'react';
import "./footer.css";
import gpt3Logo from '../../assets/logo.svg';
import INFO from "./info";
const Footer = () => {
 return (
  <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>

        
      <button className="gpt3__footer-btn">Request Early Access</button>
    

    
       <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <INFO p1="Overons" p2="Social Media" p3="Counters" p4="Contact" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <INFO p1="Terms & Conditions" p2="Privacy Policy" p3="Contact" p4="" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <INFO p1="Crechterwoord K12 182 DK Alknjkcb" p2="0326-436106" p3="amazhmed123@gmail.com" p4="" />
      </div>
    </div>
   
<div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>
    </div>
    
 );
}

export default Footer