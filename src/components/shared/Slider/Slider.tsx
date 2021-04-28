import React, { RefObject } from "react";
import "./Slider.styled.css";
import "keen-slider/keen-slider.min.css";

interface SliderProps {
  sliderRef: RefObject<HTMLElement>;
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
}

const slideBlank = (readySlides) => {
  const slides = [];
  const blankSlide = <div className="keen-slider__slide"></div>;

  for (let i = 0; i < 3; i++) {
    if (readySlides[i]) {
      const slidePrepared = (
        <div className="keen-slider__slide">{readySlides[i]}</div>
      );
      slides.push(slidePrepared);
    } else {
      slides.push(blankSlide);
    }
  }
  return slides;
};

export const Slider = ({ sliderRef, children, style }: SliderProps) => {
  return (
    <div ref={sliderRef} className="keen-slider" style={style && { ...style }}>
      {React.Children.count(children) >= 3
        ? React.Children.map(children || null, (child) => (
            <div className="keen-slider__slide" key={child.props.order}>
              <child.type {...child.props} />
            </div>
          ))
        : slideBlank(children)}
    </div>
  );
};
