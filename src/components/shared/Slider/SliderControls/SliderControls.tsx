import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface SliderControlsProps {
  inputSliderPosition: number;
  prevSlide: () => void;
  nextSlide: () => void;
  inputSliderOnChange: (e: any) => void;
  className?: string;
}

export const SliderControls = ({
  prevSlide,
  inputSliderPosition,
  inputSliderOnChange,
  nextSlide,
  className,
}: SliderControlsProps) => {
  return (
    <div
      className={`slider-controls text-customRed text-2xl flex justify-between mt-5 items-center ${className}`}
    >
      <BsChevronLeft
        className="active:opacity-40 cursor-pointer stroke-1 hover:opacity-40"
        onClick={prevSlide}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={inputSliderPosition}
        onChange={inputSliderOnChange}
        className="input-slider bg-customRed "
        id="myRange"
      />
      <BsChevronRight
        className="active:opacity-40 cursor-pointer hover:opacity-40 stroke-1"
        onClick={nextSlide}
      />
    </div>
  );
};
