import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Slider, SliderControls, useSlider } from "@/components/shared/Slider";

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
  } = useSlider(
    numberOfSlides,
    {
      mobile: 1.1,
      tablet: 2.2,
      desktop: 3,
    },
    { mobile: 10, tablet: 20, desktop: 20 }
  );

  return (
    <>
      <div className="slider-wrapper-recommendations max-w-full mt-10 relative">
        {slider && (
          <div className="hidden md:block">
            <BsChevronLeft
              className={`text-customRed hover:opacity-40 cursor-pointer stroke-1 text-3xl absolute left-0 top-1/3 z-10 xl:-left-10 ${
                currentSlide === 0 ? "hidden" : ""
              }`}
              onClick={prevSlide}
            />
            <BsChevronRight
              className={`text-customRed hover:opacity-40 cursor-pointer stroke-1 text-3xl absolute right-0 top-1/3 z-10 xl:-right-10 ${
                currentSlide === numberOfSlides - 3 ? "hidden" : ""
              }`}
              onClick={nextSlide}
            />
          </div>
        )}

        <Slider sliderRef={sliderRef} children={children} />
      </div>
      <SliderControls
        inputSliderPosition={inputSliderPosition}
        inputSliderOnChange={inputSliderOnChange}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        className="md:hidden"
      />
    </>
  );
};
