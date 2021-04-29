import React from "react";
import { Page } from "./Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import {
  CenterTextSection,
  CenterTextSectionProps,
} from "../components/shared/CenterTextSection";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "../components/shared/Newsletter";
import { JoinUs } from "../components/shared/JoinUs";

interface Props extends CenterTextSectionProps, NewsletterProps {
  heroTitle: string;
  heroBackgroundImage: FluidObject;
  heroBackgroundImageDesktop: FluidObject;
  heroBackgroundImageAlt: string;
  volunteerNewsletterTitle: string;
  volunteerNewsletterContent: string;
  meetUsTitle: string;
  meetUsContent: string;
  meetUsImage: FluidObject;
  meetUsImageDesktop: FluidObject;
  meetUsImageAlt: string;
  meetUsButtonText: string;
  meetUsButtonLink: string;
}

export const SpeakersPageTemplate = (props: Props) => (
  <Page>
    <HeroSection
      heroTitle={props.heroTitle}
      heroBackgroundImage={props.heroBackgroundImage}
      heroBackgroundImageDesktop={props.heroBackgroundImageDesktop}
      heroBackgroundImageAlt={props.heroBackgroundImageAlt}
      centerContentVertically={true}
    />
    <CenterTextSection
      centerTextSectionTitle={props.centerTextSectionTitle}
      centerTextSectionContent={props.centerTextSectionContent}
      centerTextSectionButtonLink={props.centerTextSectionButtonLink}
      centerTextSectionButtonText={props.centerTextSectionButtonText}
      background="grey"
    />
    <JoinUs
      joinUsTitle={props.meetUsTitle}
      joinUsSubtitle={props.meetUsContent}
      joinUsImage={props.meetUsImage}
      joinUsImageDesktop={props.meetUsImageDesktop}
      joinUsGetToKnowOurTeamText={props.meetUsButtonText}
      joinUsGetToKnowOurTeamLink={props.meetUsButtonLink}
      backgroundColor={"bg-customWhite"}
    />
    <Newsletter
      variant={NewsletterVariant.white}
      newsletterTitle={props.volunteerNewsletterTitle}
      newsletterMessage2={props.volunteerNewsletterContent}
      newsletterBackgroundImage={props.newsletterBackgroundImage}
      newsletterBackgroundImageDesktop={props.newsletterBackgroundImageDesktop}
    />
  </Page>
);

const VolunteerPage = ({ pageContext }) => {
  return <SpeakersPageTemplate {...pageContext.props} />;
};

export default VolunteerPage;
