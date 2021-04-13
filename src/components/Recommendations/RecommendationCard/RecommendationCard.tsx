import React from "react";
import { Button } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";
import Img, { FluidObject } from "gatsby-image";

export enum RecommendationCardTypes {
  EVENT = "EVENT",
  TALK = "TALK",
}

interface RecommendationCardProps {
  type: RecommendationCardTypes;
  slug: string;
  cover: FluidObject;
  coverDesktop: FluidObject;
  displayName: string;
  speaker?: string;
  eventName?: string;
  eventSlug?: string;
  duration?: string;
  date?: string;
  attendLink?: string;
  learnMoreLink?: string;
}

export const RecommendationCard = ({
  type,
  slug,
  cover,
  coverDesktop,
  speaker,
  displayName,
  eventName,
  duration,
  date,
  attendLink,
  learnMoreLink,
}: RecommendationCardProps) => (
  <div className="p-2 relative border-b-4 border-customTransparent  hover:border-customRed">
    <div className="relative">
      <a
        href={
          type === RecommendationCardTypes.EVENT
            ? `/event/${slug}`
            : `/talk/${slug}`
        }
      >
        <Img
          className="w-full h-full md:hidden"
          fluid={cover}
          alt="Slider item image"
        />
        <Img
          className="w-full h-full hidden md:block"
          fluid={coverDesktop}
          alt="Slider item image"
        />
      </a>
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
        <span
          className={
            type === RecommendationCardTypes.EVENT ? "font-bold my-10" : "my-10"
          }
        >
          {type === RecommendationCardTypes.TALK ? speaker : "Title"}
        </span>
        <h3
          className={type === RecommendationCardTypes.TALK ? "font-bold" : ""}
        >
          {displayName}
        </h3>
      </div>
      {type === RecommendationCardTypes.EVENT && <p>{date}</p>}
    </div>
    {type === RecommendationCardTypes.TALK && (
      <p className="pb-3">{eventName}</p>
    )}

    {type === RecommendationCardTypes.EVENT && (
      <div className="flex items-center ">
        <a
          href={`/attend/${slug}`}
          className="text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Attend</Button>
        </a>
        <a
          href={`/event/${slug}`}
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
