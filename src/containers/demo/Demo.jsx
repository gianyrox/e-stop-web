import React from "react";
import "./demo.css";
// import people from "../../assets/people.png";
//import tool from "../../assets/tool.png";

const Header = () => {
  return (
    <div className="estop__demo section__padding" id="home">
      <div className="estop__demo-content">
        <div className="estop__demo-content__input">
          <input type="links" placeholder="Paste your link"></input>
          <button type="button">Send To Friends</button>
        </div>
        {/*<div className='estop__header-content__people'>
					<img src={people} alt='people' />
					<p>1,600 people requested access in the last 24 hours.</p>
				</div> */}
      </div>
      {/* <div className='estop__header-image'>
				<img src={tool} alt='tool' />
			</div> */}
    </div>
  );
};

export default Header;
