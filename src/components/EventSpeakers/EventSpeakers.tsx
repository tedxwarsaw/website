import React from "react";
import Img, { FixedObject } from "gatsby-image";

export interface EventSpeakersProps {
  eventSpeakers: { speakerName: string; speakerPhoto: FixedObject }[];
}

export const EventSpeakers = ({ eventSpeakers }: EventSpeakersProps) => (
  <div className="inner-grid py-20 grid-flow-row ">
    <h2 className="font-medium text-2xl md:text-3xl row-start-1 col-span-full mb-10">
      Speakers
    </h2>
    {eventSpeakers.map((speaker, index) => (
      <div
        className="col-span-1 flex items-center my-3"
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
);
