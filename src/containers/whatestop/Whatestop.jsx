import React from "react";
import { Feature } from "../../components";
import "./whatestop.css";

const Whatestop = () => {
  return (
    <div className="estop__whatestop section__margin" id="whbuck">
      <div className="estop__whatestop-feature">
        <Feature
          title="What is estop?"
          text="estop is a platform for you to elevate your academic reading ability. It defines, reorganizes, and analyzes papers that you need to read."
        />
      </div>
      <div className="estop__whatestop-heading">
        <h1 className="gradient__text">
          Elevate your academic reading ability.
        </h1>

        <p>
          <a href="#blog">Explore the Library</a>
        </p>
      </div>
      <div className="estop__whatestop-container">
        <Feature
          title="AI"
          text="estop uses AI to analyze research papers and output a more digestible piece of text so you can understand complex topics."
        />
        <Feature
          title="Database"
          text="estop has access to large databases of research that you have free access to."
        />
        <Feature
          title="Tools"
          text="estop offers a broad range of tools for you to use when reading academic papers."
        />
      </div>
    </div>
  );
};
/*styles not working for bar above titles*/
export default Whatestop;
