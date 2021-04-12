import React from "react";
import { EventCard } from "./EventCard";
import {
  RecommendationCard,
  RecommendationCardTypes,
} from "./RecommendationCard";
import eventCover from "./event-cover.png";
import talkCover from "./talk-cover.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Recommendations.styled.css";

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
  const [sliderRef] = useKeenSlider({
    slidesPerView: 1,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 3,
        spacing: 20,
      },
    },
  });

  return (
    <div className="my-10 main-grid-full-span recommendations-container">
      <h2 className="text-2xl md:text-3xl font-bold w-32">
        TEDxWarsaw Recommends
      </h2>
      <div
        ref={sliderRef}
        className="keen-slider max-w-full mt-10 recommendations-slider-container"
      >
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
    </div>
  );
};
