import React from "react";
import { FixedObject, FluidObject } from "gatsby-image";

export interface MeetUsProps {
  meetUsBackgroundImage: FluidObject;
  meetUsBackgroundImageDesktop: FluidObject;
  teamMembersSlider: {
    name: string;
    title: string;
    description: string;
    profileImage: FluidObject;
    profileImageDesktop: FluidObject;
  }[];
  associates: {
    name: string;
    title: string;
    profileImage: FixedObject;
    profileImageDesktop: FixedObject;
  };
}

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
  return <h2>Meet us</h2>;
};
