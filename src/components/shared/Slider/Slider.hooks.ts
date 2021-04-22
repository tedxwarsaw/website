import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

export const useSlider = (
  numberOfSlides: number,
  slidesPerView: { mobile: number; tablet: number; desktop: number },
  spacing: { mobile: number; tablet: number; desktop: number }
) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inputSliderPosition, setInputSliderPosition] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: slidesPerView.mobile,
    spacing: spacing.mobile,
    breakpoints: {
      "(min-width: 768px) and (max-width: 1280px)": {
        slidesPerView: slidesPerView.tablet,
        spacing: spacing.tablet,
      },
      "(min-width: 1280px)": {
        slidesPerView: slidesPerView.desktop,
        spacing: spacing.desktop,
      },
    },
    afterChange: (slider) => {
      if (slider.details().absoluteSlide === numberOfSlides - 1) {
        setInputSliderPosition(100);
        return;
      }
      setInputSliderPosition(
        slider.details().absoluteSlide *
          (100 / numberOfSlides + 100 / numberOfSlides / numberOfSlides)
      );
    },
    slideChanged: (slider) => {
      setCurrentSlide(slider.details().absoluteSlide);
    },
  });

  const inputSliderOnChange = (e) => {
    setInputSliderPosition(parseInt(e.target.value));
    const slideToChange = Math.floor(
      inputSliderPosition / (100 / numberOfSlides)
    );

    if (currentSlide !== slideToChange) {
      slider.moveToSlide(slideToChange);
    }
  };

  const nextSlide = () => {
    slider.next();
    setInputSliderPosition((prev) => {
      const difference =
        prev + 100 / numberOfSlides + 100 / numberOfSlides / numberOfSlides;
      if (difference <= 100 - 100 / numberOfSlides) {
        return difference;
      } else {
        return 100;
      }
    });
  };
  const prevSlide = () => {
    slider.prev();
    setInputSliderPosition((prev) => {
      const difference =
        prev - 100 / numberOfSlides - 100 / numberOfSlides / numberOfSlides;
      if (difference >= 0 + 100 / numberOfSlides) {
        return difference;
      } else {
        return 0;
      }
    });
  };

  return {
    sliderRef,
    slider,
    numberOfSlides,
    currentSlide,
    setCurrentSlide,
    inputSliderPosition,
    inputSliderOnChange,
    nextSlide,
    prevSlide,
  };
};
