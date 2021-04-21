import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import { AboutTed, AboutTedProps } from "@/components/AboutTed";
import { MeetUs, MeetUsProps } from "@/components/MeetUs/";

interface Props extends AboutTedProps, MeetUsProps {
  heroTitle: string;
  heroBackgroundImage: FluidObject;
  heroBackgroundImageDesktop: FluidObject;
  heroBackgroundImageAlt: string;
}

export const AboutPageTemplate = (props: Props) => (
  <Page>
    <HeroSection
      heroTitle={props.heroTitle}
      heroBackgroundImage={props.heroBackgroundImage}
      heroBackgroundImageDesktop={props.heroBackgroundImageDesktop}
      heroBackgroundImageAlt={props.heroBackgroundImageAlt}
      centerContentVertically={true}
    />
    <AboutTed
      aboutTedContent={props.aboutTedContent}
      aboutTedSpeakers={props.aboutTedSpeakers}
    />
    <MeetUs
      meetUsBackgroundImage={props.meetUsBackgroundImage}
      meetUsBackgroundImageDesktop={props.meetUsBackgroundImageDesktop}
      teamMembersSlider={props.teamMembersSlider}
      associates={props.associates}
    />
  </Page>
);

const AboutPage = ({ pageContext }) => {
  console.log(pageContext);
  return <AboutPageTemplate {...pageContext.props} />;
};

export default AboutPage;
