import React from "react";
import Img, { FixedObject } from "gatsby-image";

interface TalkDetailsProps {
  talkDescription: string;
  speakerDescription: string;
  speakerProfileImage: FixedObject;
}

export const TalkDetails = ({
  talkDescription,
  speakerDescription,
  speakerProfileImage,
}: TalkDetailsProps) => (
  <>
    <div className="row-start-3 col-start-2 col-end-3 md:row-start-2 md:col-start-2 md:col-end-3 xl:col-start-2 xl:col-end-3">
      <Img
        className="rounded-full partners-profile-images"
        fixed={speakerProfileImage}
        alt="Speaker profile image"
      />
      <p>{speakerDescription}</p>
    </div>
    <div className="row-start-4 col-start-2 col-end-3 md:row-start-2  md:col-start-4 md:col-end-5 xl:col-start-4 xl:col-end-5">
      <p>{talkDescription}</p>
    </div>
  </>
);
