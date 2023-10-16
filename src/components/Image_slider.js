import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../style/Image_slider.css";
import slideimage from "../assets/keyimage_01.jpg";

const ImageSlider = () => {
  return (
    <Slide autoplay={false}>
      <div className="each-slide-effect">
        <div className="keyimage_wrap">
          <img src={slideimage} className="keyimage_style" alt="React" />
          <span className="keyspan_style">
            하나의 플랫폼에서 운송부터 예약까지1
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="keyimage_wrap">
          <img src={slideimage} className="keyimage_style" alt="React" />
          <span className="keyspan_style">
            하나의 플랫폼에서 운송부터 예약까지2
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="keyimage_wrap">
          <img src={slideimage} classNamee="keyimage_style" alt="React" />
          <span className="keyspan_style">
            하나의 플랫폼에서 운송부터 예약까지3
          </span>
        </div>
      </div>
    </Slide>
  );
};

export default ImageSlider;
