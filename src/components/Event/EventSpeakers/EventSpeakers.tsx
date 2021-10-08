import React from "react";
import Img, { FixedObject } from "gatsby-image";
import { Lines } from "../../Lines/Lines";

export interface EventSpeakersProps {
  eventSpeakers: { speakerName: string; speakerPhoto: FixedObject }[];
}

export const EventSpeakers = ({ eventSpeakers }: EventSpeakersProps) => (
  <div className="main-grid-full-span relative">
    <Lines wider={true} />
    <div className="main-grid">
      <div className="inner-grid py-20 grid-flow-row relative">
        <h2 className="font-medium row-start-1 col-span-full mb-10">
          Speakers
        </h2>
        {eventSpeakers.map((speaker, index) => (
          <div
            className="col-span-1 flex items-center my-3 z-10"
            key={speaker.speakerName + index}
          >
            <Img
              className="rounded-full max-h-0.5 partners-profile-images"
              fixed={speaker.speakerPhoto}
              alt="Speaker profile images"
              key={speaker.speakerPhoto.base64 + `${index}`}
            />
            <p className="ml-5">{speaker.speakerName}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
