import React from "react";
import YouTube from "react-youtube";
import { AiOutlineLeft } from "react-icons/ai";
import "./Talk.styled.css";
import { Link } from "gatsby";
import { TalkDetails } from "./TalkDetails";
import { FixedObject } from "gatsby-image";
import { Lines } from "../Lines/Lines";

export interface TalkProps {
  youtubeVideoId: string;
  speaker: string;
  displayName: string;
  eventDisplayName: string;
  duration: string;
  talkDescription: string;
  speakerProfileImage: FixedObject;
  speakerDescription: string;
}

export const Talk = ({
  youtubeVideoId,
  speaker,
  displayName,
  eventDisplayName,
  duration,
  talkDescription,
  speakerDescription,
  speakerProfileImage,
}: TalkProps) => (
  <div className="main-grid-full-span seamless-grid gap-y-10 mb-10 relative">
    <Lines onlyHorizontal={true} />
    <div className="z-10 col-start-1 col-end-4 md:col-end-3 xl:col-start-1 xl:col-end-5">
      <YouTube videoId={youtubeVideoId} className="talk-video-iframe" />
    </div>
    <div className="col-start-2 col-end-3 row-start-2 md:row-start-1 md:col-start-4 md:col-end-5 xl:col-start-6 xl:col-end-7 talk-details-sticky md:h-full flex flex-col justify-center">
      <Link to="/watch/">
        <span className="flex items-center text-customRed font-bold hover:opacity-40 cursor-pointer">
          <AiOutlineLeft className="stroke-2" /> BACK TO SEARCH
        </span>
      </Link>
      <div className="ml-1 mt-10">
        <h2 className="font-bold">{speaker}</h2>
        <p className="mt-5 text-2xl md:text-3xl font-light">{displayName}</p>
        <p className="text-2xl md:text-3xl font-light">{eventDisplayName}</p>
        <p className="mt-10">{duration.split(":")[0]} min watch</p>
      </div>
    </div>
    <TalkDetails
      talkDescription={talkDescription}
      speakerDescription={speakerDescription}
      speakerProfileImage={speakerProfileImage}
    />
  </div>
);
