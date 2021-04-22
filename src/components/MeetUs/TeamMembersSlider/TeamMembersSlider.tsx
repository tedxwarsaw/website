import React from "react";
import { TeamMember } from "@/components/MeetUs/MeetUs.types";

interface TeamMembersSliderProps {
  teamMembers: TeamMember[];
}

export const TeamMembersSlider = ({ teamMembers }: TeamMembersSliderProps) => {
  return (
    <div>
      <h2>team members slide</h2>
      <div className="flex text-white mb-10">
        {teamMembers.map((member) => {
          const name = member.name.split(" ");
          return (
            <div className="flex flex-col font-semibold w-28 mr-5">
              <span>{name[0]}</span>
              <span>{name[1]}</span>
              <span className="h-1 bg-customRed rounded-sm w-full mt-3 opacity-50"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
