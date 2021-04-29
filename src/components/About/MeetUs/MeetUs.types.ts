import { FixedObject, FluidObject } from "gatsby-image";

export interface Associate {
  name: string;
  title: string;
  profileImage: FixedObject;
  profileImageDesktop: FixedObject;
}

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  profileImage: FluidObject;
  profileImageDesktop: FluidObject;
}

export interface MeetUsProps {
  meetUsBackgroundImage: FluidObject;
  meetUsBackgroundImageDesktop: FluidObject;
  teamMembersSlider: TeamMember[];
  associates: Associate[];
}
