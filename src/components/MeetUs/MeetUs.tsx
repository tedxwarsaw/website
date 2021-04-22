import React from "react";
import { FixedObject, FluidObject } from "gatsby-image";
import { MeetUsProps } from "./MeetUs.types";
import { Associates } from "./Associates";
import { TeamMembersSlider } from "@/components/MeetUs/TeamMembersSlider";

export const MeetUs = ({
  meetUsBackgroundImage,
  meetUsBackgroundImageDesktop,
  teamMembersSlider,
  associates,
}: MeetUsProps) => {
  console.log(
    meetUsBackgroundImage,
    meetUsBackgroundImageDesktop,
    teamMembersSlider,
    associates
  );
  return (
    <div className="main-grid-full-span bg-black py-10">
      <div className="main-grid">
        <h2 className="font-bold text-5xl text-white mb-10">Meet us</h2>
        <TeamMembersSlider
          meetUsBackgroundImage={meetUsBackgroundImage}
          meetUsBackgroundImageDesktop={meetUsBackgroundImageDesktop}
          teamMembers={teamMembersSlider}
        />
        <Associates associates={associates} />
      </div>
    </div>
  );
};
