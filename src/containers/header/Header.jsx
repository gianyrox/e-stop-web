import React from "react";
import "./header.css";
// import people from "../../assets/people.png";
import stop from "../../assets/stop.jpeg";

const Header = () => {
  return (
    <div className="estop__header section__padding" id="home">
      <div className="estop__header-content">
        <h1 className="gradient__text">Low Energy Smart</h1>
        <h1 className="gradient__text">Bus Stops.</h1>
        <p>
          E-Stop provides secure live bus notifications at bus stops. Sign the
          blog if you want this at your bus stop.
        </p>

        <a href="#blog">
          <div className="estop__header-content__input">
            <button type="button">Sign Petition</button>
          </div>
        </a>
      </div>
      <div className="estop__header-image">
        <img src={stop} alt="tool" />
      </div>
    </div>
  );
};

export default Header;
