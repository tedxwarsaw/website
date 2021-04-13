import React from "react";
import {
  RecommendationCard,
  RecommendationCardTypes,
} from "./RecommendationCard";
import "keen-slider/keen-slider.min.css";
import "./Recommendations.styled.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useRecommendations } from "./Recommendations.hooks";
import { RecommendationsProps } from "./Recommendations.types";

export const Recommendations = ({ recommendations }: RecommendationsProps) => {
  const numberOfSlides = 4;
  const {
    sliderRef,
    inputSliderPosition,
    inputSliderOnChange,
    nextSlide,
    prevSlide,
    slider,
    currentSlide,
  } = useRecommendations(numberOfSlides);
  console.log(recommendations);
  return (
    <div className="my-10 main-grid-full-span recommendations-container">
      <h2 className="text-2xl md:text-3xl font-bold w-32">
        TEDxWarsaw Recommends
      </h2>
      <div className="slider-wrapper max-w-full mt-10 relative">
        {slider && (
          <div className="hidden md:block">
            <BsChevronLeft
              className={`text-customRed text-3xl absolute -left-10 top-1/2 ${
                currentSlide === 0 ? "hidden" : ""
              }`}
              onClick={prevSlide}
            />
            <BsChevronRight
              className={`text-customRed text-3xl absolute -right-10 top-1/2 ${
                currentSlide === numberOfSlides - 3 ? "hidden" : ""
              }`}
              onClick={nextSlide}
            />
          </div>
        )}
        <div ref={sliderRef} className="keen-slider ">
          {recommendations.map(({ item }) => (
            <div className="keen-slider__slide">
              <RecommendationCard
                type={
                  item?.speaker
                    ? RecommendationCardTypes.TALK
                    : RecommendationCardTypes.EVENT
                }
                slug={item.slug}
                cover={item.cover}
                coverDesktop={item.coverDesktop}
                displayName={item.displayName}
                speaker={item.speaker}
                eventName={item.eventName}
                duration={item.duration}
                eventSlug={item.eventSlug}
                date={item.date}
              />
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
    </div>
  );
};
