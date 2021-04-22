import React from "react";
import { TeamMember } from "@/components/MeetUs/MeetUs.types";

interface MembersDisplayProps {
  teamMembers: TeamMember[];
  activeMemberIndex: number;
  setCurrentSlide: (slide: number) => void;
}

export const MembersDisplay = ({
  teamMembers,
  activeMemberIndex,
  setCurrentSlide,
}: MembersDisplayProps) => (
  <div className="flex text-white mb-10">
    {teamMembers.map((member, index) => {
      const name = member.name.split(" ");
      return (
        <div
          className="flex flex-col font-semibold w-28 mr-5 cursor-pointer"
          key={member.name + index}
          onClick={() => setCurrentSlide(index)}
        >
          <span>{name[0]}</span>
          <span>{name[1]}</span>
          <span
            className={`h-1 bg-customRed rounded-sm w-full mt-3  ${
              activeMemberIndex === index ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
      );
    })}
  </div>
);
