import React from "react";
import { Page } from "./Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/shared/HeroSection";
import { AboutTed, AboutTedProps } from "@/components/About/AboutTed";
import { MeetUs, MeetUsProps } from "@/components/About/MeetUs";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";
import {
  AboutTedEvents,
  MediaInitiatives,
  TedEventsProps,
} from "@/components/About/AboutTedEvents";
import { AboutUs, AboutUsProps } from "@/components/About/AboutUs";

interface Props
  extends AboutTedProps,
    TedEventsProps,
    MediaInitiatives,
    AboutUsProps,
    MeetUsProps,
    NewsletterProps {
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
    <MeetUs
      teamMembersSlider={props.teamMembersSlider}
      associates={props.associates}
    />
    <Newsletter
      variant={NewsletterVariant.black}
      newsletterTitle={props.newsletterTitle}
      newsletterMessage1={props.newsletterMessage1}
      newsletterMessage2={props.newsletterMessage2}
      newsletterBackgroundImage={props.newsletterBackgroundImage}
      newsletterBackgroundImageDesktop={props.newsletterBackgroundImageDesktop}
    />
  </Page>
);

const AboutPage = ({ pageContext }) => {
  return <AboutPageTemplate {...pageContext.props} />;
};

export default AboutPage;
