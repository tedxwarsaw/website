import React from "react";
import { MeetUsProps } from "./MeetUs.types";
import { Associates } from "./Associates";
import { TeamMembersSlider } from "@/components/About/MeetUs/TeamMembersSlider";

export const MeetUs = ({
  meetUsBackgroundImage,
  meetUsBackgroundImageDesktop,
  teamMembersSlider,
  associates,
}: MeetUsProps) => (
  <div className="main-grid-full-span bg-black py-10" id={"meet-us-section"}>
    <div className="main-grid">
      <h2 className="font-bold text-white mt-10 text-8xl">Meet us</h2>
      <TeamMembersSlider
        meetUsBackgroundImageDesktop={meetUsBackgroundImageDesktop}
        teamMembers={teamMembersSlider}
      />
      <Associates associates={associates} />
    </div>
  </div>
);
