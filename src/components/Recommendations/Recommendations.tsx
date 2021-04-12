import React, { useState } from "react";
import {
  RecommendationCard,
  RecommendationCardTypes,
} from "./RecommendationCard";
import eventCover from "./event-cover.png";
import talkCover from "./talk-cover.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Recommendations.styled.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const recommendations = [
  {
    category: "event",
    thumbnailImage: eventCover,
    title: "TedxWarsaw Live",
    eventDate: "22.12.2020",
    attendLink: "/",
    learnMoreLink: "/",
  },
  {
    category: "talk",
    thumbnailImage: talkCover,
    speaker: "Agnieszka Trzeszczak",
    title: "Baby do garów - czy do muzyki trzeba się nadawać",
    talkEventName: "TEDxWarsaw 2019",
    duration: "13.45",
  },
  {
    category: "talk",
    thumbnailImage: talkCover,
    speaker: "Magdalena Król",
    title: "baby do garów - czy do muzyki trzeba się nadawać",
    talkEventName: "TEDxWarsaw 2018",
    duration: "13.45",
  },
];

export const Recommendations = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [inputSliderPosition, setInputSliderPosition] = useState(1);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1.1,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 3,
        spacing: 20,
      },
    },
    slideChanged: (slider) => console.log(slider?.details()),
  });

  return (
    <div className="my-10 main-grid-full-span recommendations-container">
      <h2 className="text-2xl md:text-3xl font-bold w-32">
        TEDxWarsaw Recommends
      </h2>
      <div ref={sliderRef} className="keen-slider max-w-full mt-10">
        <div className="keen-slider__slide">
          <RecommendationCard
            type={RecommendationCardTypes.EVENT}
            thumbnailImage={recommendations[0].thumbnailImage}
            title={recommendations[0].title}
            eventDate={recommendations[0].eventDate}
            attendLink={recommendations[0].attendLink}
            learnMoreLink={recommendations[0].learnMoreLink}
            talkEventName={recommendations[1].talkEventName}
          />
        </div>
        <div className="keen-slider__slide ">
          <RecommendationCard
            type={RecommendationCardTypes.TALK}
            thumbnailImage={recommendations[1].thumbnailImage}
            speaker={recommendations[1].speaker}
            title={recommendations[1].title}
            talkEventName={recommendations[1].talkEventName}
            duration={recommendations[1].duration}
          />
        </div>
        <div className="keen-slider__slide ">
          <RecommendationCard
            type={RecommendationCardTypes.TALK}
            thumbnailImage={recommendations[1].thumbnailImage}
            speaker={recommendations[1].speaker}
            title={recommendations[1].title}
            talkEventName={recommendations[1].talkEventName}
            duration={recommendations[1].duration}
          />
        </div>
        <div className="keen-slider__slide">
          <RecommendationCard
            type={RecommendationCardTypes.TALK}
            thumbnailImage={recommendations[1].thumbnailImage}
            speaker={recommendations[1].speaker}
            title={recommendations[1].title}
            talkEventName={recommendations[1].talkEventName}
            duration={recommendations[1].duration}
          />
        </div>
      </div>
      <div className="slider-controls text-customRed text-2xl flex justify-between mt-5 items-center">
        <BsChevronLeft onClick={() => slider.prev()} />
        <input
          type="range"
          min="1"
          max="100"
          value={inputSliderPosition}
          onChange={(e) => {
            // slider.moveToSlide(parseInt(e.target.value) % (100 / 3));
            setInputSliderPosition(parseInt(e.target.value));
            const slideToChange = Math.floor(inputSliderPosition / (100 / 4));

            if (inputSliderPosition !== slideToChange) {
              slider.moveToSlide(slideToChange);
            }
          }}
          className="input-slider bg-customRed"
          id="myRange"
        />

        <BsChevronRight onClick={() => slider.next()} />
      </div>
    </div>
  );
};
