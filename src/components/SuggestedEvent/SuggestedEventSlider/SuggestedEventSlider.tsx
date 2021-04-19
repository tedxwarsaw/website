import React from "react";
import { Slider, SliderControls, useSlider } from "@/components/shared/Slider";

export const SuggestedEventSlider = ({ children }) => {
  const numberOfSlides = children.length;
  const {
    sliderRef,
    inputSliderPosition,
    inputSliderOnChange,
    nextSlide,
    prevSlide,
  } = useSlider(
    numberOfSlides,
    {
      mobile: 1.1,
      tablet: 1.2,
      desktop: 1.5,
    },
    { mobile: 10, tablet: 20, desktop: 20 }
  );

  return (
    <>
      <div className="slider-wrapper w-full max-w-full mt-10 relative">
        <Slider sliderRef={sliderRef} children={children} />
      </div>
      <div className="hidden xl:block">
        <div className="inner-grid" style={{ margin: "0 -32px 0 -6px" }}>
          <SliderControls
            inputSliderPosition={inputSliderPosition}
            inputSliderOnChange={inputSliderOnChange}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            className="col-start-1 col-end-3"
          />
        </div>
      </div>
      <SliderControls
        inputSliderPosition={inputSliderPosition}
        inputSliderOnChange={inputSliderOnChange}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        className="xl:hidden"
      />
    </>
  );
};
