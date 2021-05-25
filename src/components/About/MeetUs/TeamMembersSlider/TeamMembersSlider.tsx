import React from "react";
import { Slider, useSlider } from "@/components/shared/Slider";
import ReactMarkdown from "react-markdown";
import Img, { FluidObject } from "gatsby-image";
import { TeamMember } from "@/components/About/MeetUs/MeetUs.types";
import { MembersDisplay } from "./MembersDisplay";
import "./TeamMembersSlider.styled.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
      desktop: 1.2,
    },
    { mobile: 50, tablet: 50, desktop: 50 }
  );

  return (
    <>
      <div className="main-grid-full-span">
        <div className="main-grid">
          <h2>team members slide</h2>
          {slider && (
            <MembersDisplay
              teamMembers={teamMembers}
              activeMemberIndex={currentSlide}
              setCurrentSlide={slider.moveToSlide}
            />
          )}
        </div>
      </div>
      <div className="main-grid-full-span relative mb-10">
        <div className="relative main-grid z-10 team-members-slider-container">
          <Slider sliderRef={sliderRef} style={{overflow: 'inherit'}}>
            {teamMembers.map((member, index) => (
              <div
                className="flex flex-col md:grid md:grid-cols-2 md:grid-cols-2 w-full"
                key={member.name + index}
              >
                <div className="h-64 md:h-auto">
                  <Img
                    className="h-full w-full z-0 md:hidden"
                    fluid={member.profileImage}
                    alt="Team member profile images"
                  />
                  <Img
                    className="h-full w-full z-0 hidden md:block"
                    fluid={member.profileImageDesktop}
                    alt="Team member profile images"
                  />
                </div>
                <div className="p-5 bg-white team-member-details-container">
                  <h2 className="font-semibold">{member.name}</h2>
                  <span className="block text-2xl font-light mb-10">
                    {member.title}
                  </span>
                  <ReactMarkdown children={member.description} />
                </div>
              </div>
            ))}
          </Slider>
          <div
            className={`team-members-slider-controls control-left cursor-pointer ${
              currentSlide === 0 ? "hidden" : "flex justify-center items-center"
            }`}
            onClick={prevSlide}
          >
            <BsChevronLeft className="text-customRed hover:opacity-40 cursor-pointer stroke-1 text-3xl " />
          </div>
          <div
            className={`team-members-slider-controls cursor-pointer control-right ${
              currentSlide === numberOfSlides - 1
                ? "hidden"
                : "flex justify-center items-center"
            }`}
            onClick={nextSlide}
          >
            <BsChevronRight className="text-customRed hover:opacity-40 cursor-pointer stroke-1 text-3xl" />
          </div>
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
