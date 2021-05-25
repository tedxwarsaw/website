import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "./JoinUs.styled.css";
import { Button, ButtonVariant } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
export interface JoinUsProps {
  joinUsTitle: string;
  joinUsSubtitle: string;
  joinUsImage: FluidObject;
  joinUsImageDesktop: FluidObject;
  joinUsVolunteerText?: string;
  joinUsVolunteerLink?: string;
  joinUsGetToKnowOurTeamText?: string;
  joinUsGetToKnowOurTeamLink?: string;
  joinUsBecomeSpeakerText?: string;
  joinUsBecomeSpeakerLink?: string;
  backgroundColor?:string;
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
  backgroundColor
}: JoinUsProps) => (
  <div className={`${backgroundColor ? backgroundColor : 'bg-customLightGrey'} main-grid-full-span`}>
    <div className="seamless-grid join-us-section-content">
      <div className="flex items-center join-us-section-left">
        <div className="pr-20 py-10">
          <h2 className="font-medium"><ReactMarkdown rehypePlugins={[rehypeRaw]}>{joinUsTitle}</ReactMarkdown></h2>
          <p className="my-5">{joinUsSubtitle}</p>
          {joinUsVolunteerText && <a
            href={joinUsVolunteerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="my-7" variant={ButtonVariant.filledRedWithBG}>
              {joinUsVolunteerText}
            </Button>
          </a>}
          <a
            href={joinUsGetToKnowOurTeamLink}
            className="text-customRed flex hover:opacity-50 items-center mb-5"
            style={{ width: "fit-content" }}
          >
            <span className="my-auto flex items-center">
              {joinUsGetToKnowOurTeamText}
            </span>
          </a>
          {joinUsBecomeSpeakerLink && <a
            href={joinUsBecomeSpeakerLink}
            className="text-customRed flex hover:opacity-50 items-center"
            style={{ width: "fit-content" }}
          >
            <span className="my-auto flex items-center">
              {joinUsBecomeSpeakerText}
            </span>
          </a>}
        </div>
      </div>
      <div className="join-us-section-right">
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
