import React from "react";
import "./Slider.styled.css";
import "keen-slider/keen-slider.min.css";

export const Slider = ({ sliderRef, children, style }) => {
  return (
    <div ref={sliderRef} className="keen-slider" style={style && { ...style }}>
      {React.Children.map(children || null, (child) => (
        <div className="keen-slider__slide" key={child.props.order}>
          <child.type {...child.props} />
        </div>
      ))}
    </div>
  );
};