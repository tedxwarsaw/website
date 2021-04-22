import React from "react";
import { Slider, useSlider } from "@/components/shared/Slider";
import ReactMarkdown from "react-markdown";
import Img, { FluidObject } from "gatsby-image";
import { TeamMember } from "@/components/MeetUs/MeetUs.types";
import { MembersDisplay } from "./MembersDisplay";
import "./TeamMembersSlider.styled.css";
import { BackgroundImage } from "@/components/shared/BackgroundImage";

interface TeamMembersSliderProps {
  meetUsBackgroundImage: FluidObject;
  meetUsBackgroundImageDesktop: FluidObject;
  teamMembers: TeamMember[];
}

export const TeamMembersSlider = ({
  teamMembers,
  meetUsBackgroundImage,
  meetUsBackgroundImageDesktop,
}: TeamMembersSliderProps) => {
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
    <>
      <div className="main-grid-full-span">
        <div className="main-grid">
          <h2>team members slide</h2>
          <MembersDisplay teamMembers={teamMembers} activeMemberIndex={0} />
        </div>
      </div>
      <div className="main-grid-full-span relative">
        <div className="relative main-grid z-10">
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
                  <span className="block text-2xl font-light mb-10">
                    {member.title}
                  </span>
                  <ReactMarkdown children={member.description} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full z-0 absolute top-0 left-0 bottom-0 right-0">
          <Img
            className="w-full h-full  z-0 md:hidden absolute top-0 left-0 bottom-0 right-0 z-0"
            fluid={meetUsBackgroundImage}
            alt="Team members slider background "
          />
          <Img
            className="w-full h-full  mt-auto z-0 hidden md:block absolute top-0 left-0 bottom-0 right-0 z-0"
            fluid={meetUsBackgroundImageDesktop}
            alt="Team members slider background"
          />
        </div>
      </div>
    </>
  );
};
