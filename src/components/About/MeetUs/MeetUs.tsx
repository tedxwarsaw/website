import React from "react";
import { MeetUsProps } from "./MeetUs.types";
import { Associates } from "./Associates";
import { TeamMembersSlider } from "@/components/About/MeetUs/TeamMembersSlider";
import {Lines} from "@/components/Lines/Lines";

export const MeetUs = ({ teamMembersSlider, associates }: MeetUsProps) => (
  <div className="main-grid-full-span bg-black py-10 relative" id={"meet-us-section"}>
      <Lines onlyHorizontal={true}/>
      <div className="main-grid">
          <h2 className="font-bold text-white mt-10 text-8xl">Meet us</h2>
          <TeamMembersSlider teamMembers={teamMembersSlider} />
          <Associates associates={associates} />
    </div>
  </div>
);
