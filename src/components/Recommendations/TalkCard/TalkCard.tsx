import React from "react";

interface TalkCardProps {
  thumbnailImage: string;
  speaker: string;
  title: string;
  talkEventName: string;
  duration: string;
}

export const TalkCard = ({
  thumbnailImage,
  speaker,
  title,
  talkEventName,
  duration,
}: TalkCardProps) => (
  <div className="p-2 relative">
    <div className="relative">
      <img src={thumbnailImage} alt="Talk thumnail image" className="w-full" />
      <span className="absolute right-2 bottom-2 bg-customDarkGrey text-white font-light text-xs px-2">
        {duration}
      </span>
    </div>

    <span className="absolute left-0 top-0 bg-customDarkGrey text-white font-light text-sm px-3">
      TALKS
    </span>

    <div className="md:flex justify-between items-end my-5">
      <div>
        <span className="my-10">{speaker}</span>
        <h3>{title}</h3>
      </div>
    </div>
    <p>{talkEventName}</p>
  </div>
);
