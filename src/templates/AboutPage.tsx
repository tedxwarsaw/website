import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "../components/HeroSection";
import { AboutTed, AboutTedProps } from "../components/AboutTed/AboutTed";

interface Props extends AboutTedProps {
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
    <div style={{ height: "50vh" }} />
  </Page>
);

const AboutPage = ({ pageContext }) => {
  console.log(pageContext.props);
  return <AboutPageTemplate {...pageContext.props} />;
};

export default AboutPage;
