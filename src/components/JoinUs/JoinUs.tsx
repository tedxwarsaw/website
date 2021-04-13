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
  joinUsVolonteerText: string;
  joinUsVolonteerLink: string;
  joinUsGetToKnowOurTeemText: string;
  joinUsGetToKnowOurTeemLink: string;
  joinUsBecomeSpeakerText: string;
  joinUsBecomeSpeakerLink: string;
}

export const JoinUs = ({
  joinUsTitle,
  joinUsSubtitle,
  joinUsImage,
  joinUsImageDesktop,
  joinUsVolonteerText,
  joinUsVolonteerLink,
  joinUsGetToKnowOurTeemText,
  joinUsGetToKnowOurTeemLink,
  joinUsBecomeSpeakerText,
  joinUsBecomeSpeakerLink,
}: JoinUsProps) => (
  <div className=" bg-customLightGrey main-grid-full-span">
    <div className="flex join-us-section-content">
      <div className="flex items-center join-us-section-left">
        <div className="pr-20">
          <h2 className="text-2xl md:text-3xl">{joinUsTitle}</h2>
          <p className="my-5">{joinUsSubtitle}</p>
          <a
            href={joinUsVolonteerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="my-5">{joinUsVolonteerText}</Button>
          </a>
          <a
            href={joinUsGetToKnowOurTeemLink}
            className="text-customRed flex hover:opacity-50 items-center mb-5"
            style={{ width: "fit-content" }}
          >
            <span className="my-auto flex items-center">
              {joinUsGetToKnowOurTeemText} <FaArrowRight className="ml-3 " />
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
