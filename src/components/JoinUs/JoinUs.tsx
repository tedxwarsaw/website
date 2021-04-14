import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "./JoinUs.styled.css";
import { Button } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";
export interface JoinUsProps {
  joinUsTitle: string;
  joinUsSubtitle: string;
  joinUsImage: FluidObject;
  joinUsImageDesktop: FluidObject;
  joinUsVolunteerText: string;
  joinUsVolunteerLink: string;
  joinUsGetToKnowOurTeamText: string;
  joinUsGetToKnowOurTeamLink: string;
  joinUsBecomeSpeakerText: string;
  joinUsBecomeSpeakerLink: string;
}

export const JoinUs = ({
  joinUsTitle,
  joinUsSubtitle,
  joinUsImage,
  joinUsImageDesktop,
  joinUsVolunteerText,
  joinUsVolunteerLink,
  joinUsGetToKnowOurTeamText,
  joinUsGetToKnowOurTeamLink,
  joinUsBecomeSpeakerText,
  joinUsBecomeSpeakerLink,
}: JoinUsProps) => (
  <div className=" bg-customLightGrey main-grid-full-span">
    <div className="flex flex-col-reverse md:flex-row join-us-section-content">
      <div className="flex items-center join-us-section-left">
        <div className="pr-20 py-10">
          <h2 className="font-medium text-2xl md:text-3xl">{joinUsTitle}</h2>
          <p className="my-5">{joinUsSubtitle}</p>
          <a
            href={joinUsVolunteerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="my-5">{joinUsVolunteerText}</Button>
          </a>
          <a
            href={joinUsGetToKnowOurTeamLink}
            className="text-customRed flex hover:opacity-50 items-center mb-5"
            style={{ width: "fit-content" }}
          >
            <span className="my-auto flex items-center">
              {joinUsGetToKnowOurTeamText} <FaArrowRight className="ml-3 " />
            </span>
          </a>
          <a
            href={joinUsBecomeSpeakerLink}
            className="text-customRed flex hover:opacity-50 items-center"
            style={{ width: "fit-content" }}
          >
            <span className="my-auto flex items-center">
              {joinUsBecomeSpeakerText} <FaArrowRight className="ml-3 " />
            </span>
          </a>
        </div>
      </div>
      <div className="md:flex-grow">
        <Img
          className="w-full h-full md:hidden"
          fluid={joinUsImage}
          alt="Join us image"
        />
        <Img
          className="w-full h-full hidden md:block"
          fluid={joinUsImageDesktop}
          alt="Join us image"
        />
      </div>
    </div>
  </div>
);
