import React from "react";
import Img, { FixedObject } from "gatsby-image";

export interface PartnersProps {
  partnerSectionTitle: string;
  getToKnowOurPartnersText: string;
  getToKnowOurPartnersLink: string;
  joinOurPartnersText: string;
  joinOurPartnersLink: string;
  partnerLogos: FixedObject[];
}

export const Partners = ({
  partnerSectionTitle,
  getToKnowOurPartnersText,
  getToKnowOurPartnersLink,
  joinOurPartnersText,
  joinOurPartnersLink,
  partnerLogos,
}: PartnersProps) => (
  <div className="py-20 space-y-6">
    <div className="font-medium text-3xl pb-6">Event partners</div>
    <div className="flex flex-wrap justify-between space-y-2">
      {partnerLogos.map((fixed, idx) => (
        <Img key={idx} fixed={fixed} alt="Partner logo" />
      ))}
    </div>
  </div>
);
