import React from "react";
import { TeamMember } from "@/components/About/MeetUs/MeetUs.types";

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
  <div className="hidden md:flex text-white mb-10 flex-wrap">
    {teamMembers.map((member, index) => {
      const name = member.name.split(" ");
      return (
        <div
          className="flex flex-col font-regular mr-5 cursor-pointer mt-5"
          key={member.name + index}
          onClick={() => setCurrentSlide(index)}
        >
          <span>{`${name[0]} `} <br className="xl:hidden lg:hidden"/>{name[1]}</span>
          <span
            className={`h-1 bg-customRed rounded-sm sm:w-full md:w-auto mt-3  ${
              activeMemberIndex === index ? "opacity-100" : "opacity-50"
            }`}
          />
        </div>
      );
    })}
  </div>
);
