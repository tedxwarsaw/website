import React from "react";
import { Button } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";

export enum RecommendationCardTypes {
  EVENT = "EVENT",
  TALK = "TALK",
}

interface RecommendationCardProps {
  type: RecommendationCardTypes;
  thumbnailImage: string;
  title: string;
  speaker?: string;
  talkEventName?: string;
  duration?: string;
  eventDate?: string;
  attendLink?: string;
  learnMoreLink?: string;
}

export const RecommendationCard = ({
  type,
  thumbnailImage,
  speaker,
  title,
  talkEventName,
  duration,
  eventDate,
  attendLink,
  learnMoreLink,
}: RecommendationCardProps) => (
  <div className="p-2 relative">
    <div className="relative">
      <img src={thumbnailImage} alt="Talk thumnail image" className="w-full" />
      {type === RecommendationCardTypes.TALK && (
        <span className="absolute right-2 bottom-2 bg-customDarkGrey text-white font-light text-xs px-2">
          {duration}
        </span>
      )}
    </div>
    <span
      className={`absolute left-0 top-0 ${
        type === RecommendationCardTypes.TALK
          ? "bg-customDarkGrey"
          : "bg-customRed"
      } text-white font-light text-sm px-3`}
    >
      {type === RecommendationCardTypes.TALK ? "TALK" : "UPCOMMING"}
    </span>

    <div className="md:flex justify-between items-end mb-2 mt-5 md:my-5">
      <div>
        <span className="my-10">
          {type === RecommendationCardTypes.TALK ? speaker : "Title"}
        </span>
        <h3>{title}</h3>
      </div>
    </div>
    <p className="pb-3">
      {type === RecommendationCardTypes.TALK ? talkEventName : eventDate}
    </p>

    {type === RecommendationCardTypes.EVENT && (
      <div className="flex items-center ">
        <a
          href={attendLink}
          className="mb-5 md:mb-0 text-sm "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Attend</Button>
        </a>
        <a
          href={learnMoreLink}
          className="text-customRed text-sm flex hover:opacity-50 items-center ml-5"
          style={{ width: "fit-content" }}
        >
          <span className="my-auto flex items-center">
            Learn more <FaArrowRight className="ml-3 " />
          </span>
        </a>
      </div>
    )}
  </div>
);
