import React from "react";
import Img, { FixedObject } from "gatsby-image";
import { Button, ButtonVariant } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";

export interface PartnersProps {
  partnerSectionTitle: string;
  partnerLogos: FixedObject[];
  partnerLogosDesktop: FixedObject[];
  showLinks?: boolean;
  getToKnowOurPartnersText?: string;
  getToKnowOurPartnersLink?: string;
  joinOurPartnersText?: string;
  joinOurPartnersLink?: string;
}

export const Partners = ({
  partnerSectionTitle,
  showLinks,
  getToKnowOurPartnersText,
  getToKnowOurPartnersLink,
  joinOurPartnersText,
  joinOurPartnersLink,
  partnerLogos,
  partnerLogosDesktop,
}: PartnersProps) => (
  <div className="py-20 space-y-6">
    <div className="flex justify-between pb-6">
      <h2 className="font-medium text-2xl md:text-3xl">
        {partnerSectionTitle}
      </h2>
      {showLinks && (
        <div className="flex items-center hidden xl:flex">
          <a
            href={getToKnowOurPartnersLink}
            className="text-customRed flex hover:opacity-50 items-center"
            style={{ width: "fit-content" }}
          >
            <span className="my-auto flex items-center">
              {getToKnowOurPartnersText} <FaArrowRight className="ml-2" />
            </span>
          </a>
          <a
            href={joinOurPartnersLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="ml-5" variant={ButtonVariant.filledRedWithBG}>
              {joinOurPartnersText}
            </Button>
          </a>
        </div>
      )}
    </div>

    <div className="flex flex-wrap justify-between space-y-4 xl:hidden">
      {partnerLogos.map((fixed, idx) => (
        <Img key={idx} fixed={fixed} alt="Partner logo" />
      ))}
    </div>
    <div className="flex flex-wrap justify-between space-y-4  hidden xl:flex">
      {partnerLogosDesktop.map((fixed, idx) => (
        <Img key={idx} fixed={fixed} alt="Partner logo" />
      ))}
    </div>
    {showLinks && (
      <div className="flex flex-col md:flex-row  md:items-center  items-start xl:hidden">
        <a href={joinOurPartnersLink} target="_blank" rel="noopener noreferrer">
          <Button className="my-5">{joinOurPartnersText}</Button>
        </a>
        <a
          href={getToKnowOurPartnersLink}
          className="text-customRed flex hover:opacity-50 items-center"
          style={{ width: "fit-content" }}
        >
          <span className="my-2 md:my-0 md:ml-5 flex items-center">
            {getToKnowOurPartnersText} <FaArrowRight className="ml-2" />
          </span>
        </a>
      </div>
    )}
  </div>
);