import React from "react";
import { useRecommendationsSlider } from "./RecommendationsSlider.hooks";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "keen-slider/keen-slider.min.css";
import "./RecommendationsSlider.styled.css";

export const RecommendationsSlider = ({ children }) => {
  const numberOfSlides = children.length;
  const {
    sliderRef,
    inputSliderPosition,
    inputSliderOnChange,
    nextSlide,
    prevSlide,
    slider,
    currentSlide,
  } = useRecommendationsSlider(numberOfSlides);

  return (
    <>
      <div className="slider-wrapper max-w-full mt-10 relative">
        {slider && (
          <div className="hidden md:block">
            <BsChevronLeft
              className={`text-customRed stroke-1 text-3xl absolute left-0 top-1/3 z-10 xl:-left-10 xl:top-1/2 ${
                currentSlide === 0 ? "hidden" : ""
              }`}
              onClick={prevSlide}
            />
            <BsChevronRight
              className={`text-customRed stroke-1 text-3xl absolute right-0 top-1/3 z-10 xl:-right-10 xl:top-1/2 ${
                currentSlide === numberOfSlides - 3 ? "hidden" : ""
              }`}
              onClick={nextSlide}
            />
          </div>
        )}
        <div ref={sliderRef} className="keen-slider ">
          {React.Children.map(children || null, (child) => (
            <div className="keen-slider__slide" key={child.props.order}>
              <child.type {...child.props} />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls text-customRed text-2xl flex justify-between mt-5 items-center md:hidden">
        <BsChevronLeft onClick={prevSlide} />
        <input
          type="range"
          min="0"
          max="100"
          value={inputSliderPosition}
          onChange={inputSliderOnChange}
          className="input-slider bg-customRed"
          id="myRange"
        />
        <BsChevronRight onClick={nextSlide} />
      </div>
    </>
  );
};
