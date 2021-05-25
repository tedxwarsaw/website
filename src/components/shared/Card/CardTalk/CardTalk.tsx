import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "../Card.styled.css";
import { Link } from "gatsby";
import {Button, ButtonVariant} from "../../Button";

interface CardTalkProps {
  slug: string;
  cover: FluidObject;
  coverDesktop: FluidObject;
  displayName: string;
  speaker?: string;
  eventName?: string;
  duration?: string;
  noBadge?: boolean;
}

export const CardTalk = ({
  slug,
  cover,
  coverDesktop,
  speaker,
  displayName,
  eventName,
  duration,
  noBadge,
}: CardTalkProps) => (
  <Link to={`/talk/${slug}`}>
    <div className="border-b-4 pb-5 pt-2 md:pt-3 border-customTransparent h-full flex flex-col">
      <div className="relative card-image-container">
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
        <Button variant={ButtonVariant.filledRedWithBG} className={"hoverButton hover:bg-white hover:text-customRed"}>View Talk</Button>
        <span className="absolute right-2 bottom-2 bg-customDarkGrey text-white font-light text-xs px-2">
          {duration}
        </span>
      </div>
      <span
        className={`absolute left-0 top-0 bg-customDarkGrey text-white md:py-1 text-sm px-3 ${
          noBadge ? "hidden" : ""
        }`}
      >
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
  </Link>
);
