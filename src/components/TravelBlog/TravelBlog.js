import React from "react";
import "./Travelblog.css";

const travelDestinations = (props) => {
  return (
    <div className="destinationWrapper">
      <h1 className="destinationHeading">{props.placeHeading}</h1>
      <div className="imageWrapper">
        <img src={props.placeImg1} className="travelImage" />
        <img src={props.placeImg2} className="travelImage" />
        <img src={props.placeImg3} className="travelImage" />
      </div>
      <p className="travelDescription">{props.placeDescription}</p>
    </div>
  );
};

export default travelDestinations;
