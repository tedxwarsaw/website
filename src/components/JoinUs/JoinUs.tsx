import { FluidObject } from "gatsby-image";
import React from "react";

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

export const JoinUs = (props: JoinUsProps) => {
  console.log(props);
  return <p>join us</p>;
};
