import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { FluidObject } from "gatsby-image";
import React from "react";

export interface EventPlaceProps {
  location: {
    displayName: string;
    city: string;
    image: FluidObject;
    mapSrc: string;
  };
}

export const EventPlace = ({ location }: EventPlaceProps) => (
  <div className="main-grid-full-span seamless-grid">
    <div className="col-span-3">
      <BackgroundImage
        image={location.image}
        alt="Cover photo"
        style={{ height: "30rem" }}
      >
        <div className="absolute w-screen main-grid h-60 overflow-hidden text-white space-y-0 py-10">
          <div className="font-medium text-4xl text-shadow max-w-md">
            {location.displayName},
            <br />
            <span className="font-light">{location.city}</span>
          </div>
        </div>
      </BackgroundImage>
    </div>
    <iframe
      src={location.mapSrc}
      height="100%"
      width="100%"
      className="col-span-3 md:col-span-2 xl:col-span-4"
      style={{ height: "30rem" }}
    ></iframe>
  </div>
);
