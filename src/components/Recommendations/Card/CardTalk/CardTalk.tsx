import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "../Card.styled.css";

export enum RecommendationCardTypes {
  EVENT = "EVENT",
  TALK = "TALK",
}

interface CardTalkProps {
  slug: string;
  cover: FluidObject;
  coverDesktop: FluidObject;
  displayName: string;
  speaker?: string;
  eventName?: string;
  duration?: string;
}

export const CardTalk = ({
  slug,
  cover,
  coverDesktop,
  speaker,
  displayName,
  eventName,
  duration,
}: CardTalkProps) => (
  <div className="p-2 relative border-b-4 border-customTransparent  hover:border-customRed h-full flex flex-col">
    <div className="relative card-image-container">
      <a href={`/talk/${slug}`}>
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

      <span className="absolute right-2 bottom-2 bg-customDarkGrey text-white font-light text-xs px-2">
        {duration}
      </span>
    </div>
    <span className="absolute left-0 top-0 bg-customDarkGrey text-white font-light text-sm px-3">
      TALK
    </span>

    <div className="md:flex justify-between items-end mb-2 mt-5 md:my-5">
      <div>
        <span className="my-10">{speaker}</span>
        <h3 className="font-bold">{displayName}</h3>
      </div>
    </div>
    <p className="pb-1 mt-auto">{eventName}</p>
  </div>
);
