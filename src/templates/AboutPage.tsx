import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import { AboutTed, AboutTedProps } from "@/components/AboutTed";
import { MeetUs, MeetUsProps } from "@/components/MeetUs/";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";

interface Props extends AboutTedProps, MeetUsProps, NewsletterProps {
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
  console.log(pageContext);
  return <AboutPageTemplate {...pageContext.props} />;
};

export default AboutPage;
