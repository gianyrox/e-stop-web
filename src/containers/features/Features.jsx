import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improve academic reading ability",
    text: "Read better",
  },
  {
    title: "Improve elementary reading ability",
    text: "Read better",
  },
  {
    title: "Improve religious reading ability",
    text: "Read better",
  },
  {
    title: "Improve reading ability",
    text: "Read better",
  },
];

const Features = () => {
  return (
    <div className="estop__features section__padding" id="features">
      <div className="estop__features-heading">
        <h1 className="gradient__text">Read EVEN better with estop.</h1>
        <p>Join today.</p>
      </div>
      <div className="estop__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
