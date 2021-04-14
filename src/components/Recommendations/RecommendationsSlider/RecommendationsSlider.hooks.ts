import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

export const useRecommendationsSlider = (numberOfSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inputSliderPosition, setInputSliderPosition] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1.1,
    spacing: 10,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 3,
        spacing: 20,
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
    inputSliderPosition,
    inputSliderOnChange,
    nextSlide,
    prevSlide,
  };
};
