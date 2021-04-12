import React from "react";
import Img from "gatsby-image";
import { EventHighlightProps } from "./EventHighlight.types";
import { FaArrowRight } from "react-icons/fa";
import "./EventHighlight.styles.css";

export const EventHighlight = ({
  eventHiglightImage,
  eventHeader,
  eventSubheader,
  eventPartnersProfiles,
  eventDescriptonColOne,
  eventDescriptonColTwo,
  eventReadMoreLink,
}: EventHighlightProps) => {
  return (
    <div className="pb-10 main-grid-mobile-full-span">
      <div style={{ height: "fit-content" }}>
        <Img
          className="w-full z-0"
          fluid={eventHiglightImage}
          alt="Event highlight background"
        />
      </div>
      <div className="px-5 md:px-0 ">
        <div className="w-full py-10">
          <span className="text-2xl md:text-3xl">{eventHeader}</span>
          <h2 className="text-2xl md:text-3xl font-bold">{eventSubheader}</h2>
        </div>
        <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-1 md:gap-10">
          <div className="grid grid-flow-row grid-cols-5 gap-4 mb-10">
            {eventPartnersProfiles.map((profileImage, index) => {
              return (
                <Img
                  className="rounded-full max-h-0.5 partners-profile-images"
                  fixed={profileImage}
                  alt="Partners profile images"
                  key={profileImage.base64 + `${index}`}
                />
              );
            })}
          </div>
          <div>
            <p>{eventDescriptonColOne}</p>
          </div>
          <div>
            <p>{eventDescriptonColTwo}</p>
            <a
              href={eventReadMoreLink}
              className="text-red-500 flex font-bold hover:opacity-50 mt-5 items-center"
              style={{ width: "fit-content" }}
            >
              <span className="my-auto flex items-center">
                Learn more <FaArrowRight className="ml-3 " />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
