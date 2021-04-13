import React from "react";
import Img from "gatsby-image";

export const OurPartners = () => (
  <div className="py-20 space-y-6">
    <div className="font-medium text-3xl pb-6">Event partners</div>
    <div className="flex flex-wrap justify-between space-y-2">
      {props.partnerLogos.map((fixed, idx) => (
        <Img key={idx} fixed={fixed} alt="Partner logo" />
      ))}
    </div>
  </div>
);
