import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Slider, SliderControls, useSlider } from "@/components/shared/Slider";
import "./RecommendationsSlider.styled.css";

export const RecommendationsSlider = ({ children }) => {
  const numberOfSlides = children.length;
  const slidesToShowDeskotop = 3;
  const slidesToShowTablet = 2.2;
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
      tablet: slidesToShowTablet,
      desktop: slidesToShowDeskotop,
    },
    { mobile: 10, tablet: 20, desktop: 54 }
  );

  return (
    <>
      <div className="slider-wrapper-recommendations max-w-full mt-10 relative">
        {slider && numberOfSlides > 2 && (
          <div className="hidden md:block">
            <BsChevronLeft
              className={`text-customRed hover:opacity-40 cursor-pointer stroke-1 text-3xl absolute left-0 top-1/3 z-10 xl:-left-10 ${
                currentSlide <= 0 ? "hidden" : ""
              }`}
              onClick={prevSlide}
            />
            <BsChevronRight
              className={`text-customRed hover:opacity-40 cursor-pointer stroke-1 text-3xl absolute right-0 top-1/3 z-10 xl:-right-10 hidden  ${
                currentSlide >= numberOfSlides - slidesToShowDeskotop
                  ? "hidden"
                  : "xl:block"
              }`}
              onClick={nextSlide}
            />
            <BsChevronRight
              className={`xl:hidden text-customRed hover:opacity-40 cursor-pointer stroke-1 text-3xl absolute right-0 top-1/3 z-10 xl:-right-10 ${
                currentSlide >= numberOfSlides - slidesToShowTablet
                  ? "hidden"
                  : ""
              }`}
              onClick={nextSlide}
            />
          </div>
        )}

        {numberOfSlides < slidesToShowDeskotop ? (
          <>
            <div className="inner-grid slider-off-container">
              {React.Children.map(children || null, (child) => (
                <div className="keen-slider__slide" key={child.props.order}>
                  <child.type {...child.props} />
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <Slider sliderRef={sliderRef} children={children} />
            </div>
          </>
        ) : (
          <Slider sliderRef={sliderRef} children={children} />
        )}
      </div>
      {numberOfSlides > 1 && (
        <SliderControls
          inputSliderPosition={inputSliderPosition}
          inputSliderOnChange={inputSliderOnChange}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          className="md:hidden"
        />
      )}
    </>
  );
};
