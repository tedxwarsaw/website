import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { SuggestedEventSlider } from "./SuggestedEventSlider";
import "./SuggestedEvent.styled.css";
import {Lines} from "../../Lines/Lines";

interface SuggestedEventProps {
  displayName: string;
  slug: string;
  photos: FluidObject[];
}

export const SuggestedEvent = ({
  displayName,
  slug,
  photos,
}: SuggestedEventProps) => {
  return (
    <div className="main-grid-full-span py-20 space-y-4 relative">
      <Lines onlyHorizontal={true}/>
      <div className="seamless-grid">
        <div className="col-start-2 col-span-full">
          <div className="space-y-4 col-start-2 col-end-3">
            <div className="text-4xl font-bold">{displayName}</div>
            <div className="text-red-500 flex space-x-6">
              <Link
                to={`/watch?event=${slug}`}
                className="font-semibold hover:opacity-50 flex items-center"
              >
                Watch the talks {"->"}
              </Link>
              <Link
                to={`/event/${slug}/`}
                className="font-semibold hover:opacity-50 flex items-center"
              >
                Read more <HiMenuAlt2 className="ml-2 text-xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col flew-nowrap  suggested-event-slider-container">
            <SuggestedEventSlider>
              {photos.map((fluid, idx) => (
                <div key={idx} className="h-full">
                  <Img
                    fluid={fluid}
                    className="h-full w-full"
                    alt={`Photo from ${displayName}`}
                  />
                </div>
              ))}
            </SuggestedEventSlider>
          </div>
        </div>
      </div>
    </div>
  );
};
