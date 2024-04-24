import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="estop__footer section__padding">
      <div className="estop__footer-heading">
        <h1 className="gradient__text">Want an E-Stop at your bus stop?</h1>
      </div>
      <a href="#blog">
        <div className="estop__footer-btn">
          <p>Sign Petition</p>
        </div>
      </a>

      <div className="estop__footer-links">
        <div className="estop__footer-links-logo">
          <img src={gpt3Logo} alt="logo" />
          <p></p>
        </div>
        <div className="estop__footer-links-div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="estop__footer-links-div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="estop__footer-copyright">
          <p>2022 estop. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
