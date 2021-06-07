import React from "react";
import Img, { FixedObject } from "gatsby-image";
import { Button, ButtonVariant } from "@/components/shared/Button";
import { Link } from "gatsby";
import "./Partners.styled.css";
import {Lines} from "../../Lines/Lines";

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
    <div className={"relative"}>
      <Lines onlyHorizontal={true} wider={true}/>
      <div className="py-20 space-y-6">
        <div className="flex justify-between pb-6">
          <h2 className="font-medium">
            {partnerSectionTitle}
          </h2>
          {showLinks && (
            <div className="flex items-center hidden xl:flex">
              <Link
                to={getToKnowOurPartnersLink}
                className="text-customRed flex hover:opacity-50 items-center"
                style={{ width: "fit-content" }}
              >
                <span className="my-auto flex items-center">
                  {getToKnowOurPartnersText}
                </span>
              </Link>
              <Link
                to={joinOurPartnersLink}
              >
                <Button className="ml-5 hover:bg-white hover:text-customRed" variant={ButtonVariant.filledRedWithBG}>
                  {joinOurPartnersText}
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-between xl:hidden partners-img-mobile-container">
          {partnerLogos.map((fixed, idx) => (
              <Img key={idx} fixed={fixed} alt="Partner logo" className={"partners-img-mobile"} />
          ))}
        </div>
        <div className="flex flex-wrap justify-between hidden xl:flex partners-img-desktop-container">
          {partnerLogosDesktop.map((fixed, idx) => (
            <Img key={idx} fixed={fixed} alt="Partner logo"  className={"partners-img-desktop"} />
          ))}
        </div>
        {showLinks && (
          <div className="flex flex-col md:flex-row  md:items-center  items-start xl:hidden">
            <Link to={joinOurPartnersLink}>
              <Button className="my-5 hover:bg-white hover:text-customRed">{joinOurPartnersText}</Button>
            </Link>
            <Link
              to={getToKnowOurPartnersLink}
              className="text-customRed flex hover:opacity-50 items-center"
              style={{ width: "fit-content" }}
            >
              <span className="my-2 md:my-0 md:ml-5 flex items-center">
                {getToKnowOurPartnersText}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
);
