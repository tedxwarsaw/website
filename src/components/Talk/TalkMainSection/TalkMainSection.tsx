import React from "react";
import YouTube from "react-youtube";
import { AiOutlineLeft } from "react-icons/ai";
import "./TalkMainSection.styled.css";
import { Link } from "gatsby";

export interface TalkMainSectionProps {
  youtubeVideoId: string;
  speaker: string;
  displayName: string;
  eventDisplayName: string;
  duration: string;
}

export const TalkMainSection = ({
  youtubeVideoId,
  speaker,
  displayName,
  eventDisplayName,
  duration,
}: TalkMainSectionProps) => {
  return (
    <div className="main-grid-full-span seamless-grid relative">
      <div className="xl:col-start-1 xl:col-end-5">
        <YouTube videoId={youtubeVideoId} className="talk-video-iframe" />
      </div>
      <div className="xl:col-start-6 xl:col-end-7 talk-details-sticky h-full flex flex-col justify-center">
        <div className="talk-details-sticky">
          <Link to="/watch/">
            <span className="flex items-center text-customRed font-bold hover:opacity-40 cursor-pointer">
              <AiOutlineLeft className="stroke-2" /> BACK TO SEARCH
            </span>
          </Link>
          <div className="ml-1 mt-10">
            <h2 className="text-2xl md:text-3xl font-bold">{speaker}</h2>
            <p className="mt-5 text-2xl md:text-3xl font-light">
              {displayName}
            </p>
            <p className="text-2xl md:text-3xl font-light">
              {eventDisplayName}
            </p>
            <p className="mt-10">{duration.split(":")[0]} min watch</p>
          </div>
        </div>
      </div>
    </div>
  );
};
