import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whbuck">What is estop?</a>
    </p>
    <p>
      <a href="#possibility">Possibilities</a>
    </p>
    {/* <p>
			<a href='#features'>Case Studies</a>
		</p> */}
    <p>
      <a href="#blog">Petition</a>
    </p>
  </>
);

// BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="estop__navbar">
      <div className="estop__navbar-links">
        <div className="estop__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="estop__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="estop__navbar-sign">
        <a href="#blog">
          <button type="button">Sign Petition</button>
        </a>
      </div>
      <div className="estop__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="estop__navbar-menu_container scale-up-center">
            <div className="estop__navbar-menu_container-links"></div>
            <Menu />
            <div className="estop__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
