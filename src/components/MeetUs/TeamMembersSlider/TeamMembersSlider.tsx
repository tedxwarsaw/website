import React from "react";
import { Slider, useSlider } from "@/components/shared/Slider";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import { TeamMember } from "@/components/MeetUs/MeetUs.types";
import { MembersDisplay } from "./MembersDisplay";
import "./TeamMembersSlider.styled.css";

interface TeamMembersSliderProps {
  teamMembers: TeamMember[];
}

export const TeamMembersSlider = ({ teamMembers }: TeamMembersSliderProps) => {
  const numberOfSlides = teamMembers.length;
  const {
    sliderRef,
    inputSliderPosition,
    inputSliderOnChange,
    nextSlide,
    prevSlide,
    slider,
    currentSlide,
  } = useSlider(
    numberOfSlides,
    {
      mobile: 1,
      tablet: 1,
      desktop: 1,
    },
    { mobile: 50, tablet: 50, desktop: 50 }
  );

  return (
    <div>
      <h2>team members slide</h2>
      <MembersDisplay teamMembers={teamMembers} activeMemberIndex={0} />
      <Slider sliderRef={sliderRef}>
        {teamMembers.map((member) => (
          <div className="grid grid-cols-2 w-4/5">
            <div>
              <Img
                className="h-full w-full z-0 background-image-only-desktop"
                fluid={member.profileImage}
                alt="Team member profile images"
              />
            </div>
            <div className="p-5 bg-white team-member-details-container">
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <span className="text-2xl font-light">{member.title}</span>
              <ReactMarkdown children={member.description} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
