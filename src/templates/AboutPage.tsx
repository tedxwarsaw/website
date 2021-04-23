import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "../components/HeroSection";
import { AboutTed, AboutTedProps } from "../components/AboutTed";
import {
  AboutTedEvents,
  MediaInitiatives,
  TedEventsProps,
} from "../components/AboutTedEvents";
import {
  AboutUs,
  AboutUsProps,
} from "../components/AboutUs";

interface Props
  extends AboutTedProps,
    TedEventsProps,
    MediaInitiatives,
    AboutUsProps {
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
    <AboutTedEvents
      aboutTedEventsTitle={props.aboutTedEventsTitle}
      aboutTedEvents={props.aboutTedEvents}
      titleFontClass={"text-2xl md:text-3xl about-ted-events-title-bold"}
      background={"white"}
    />
    <AboutTedEvents
      aboutTedEventsTitle={props.mediaInitiativesTitle}
      aboutTedEvents={props.mediaInitiatives}
    />
    <AboutUs
      AboutUsTitle={props.AboutUsTitle}
      AboutUsContent={props.AboutUsContent}
      AboutUsImage={props.AboutUsImage}
    />
  </Page>
);

const AboutPage = ({ pageContext }) => {
  return <AboutPageTemplate {...pageContext.props} />;
};

export default AboutPage;
