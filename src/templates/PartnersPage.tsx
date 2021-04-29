import React from "react";
import { Page } from "./Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "../components/shared/Newsletter";
import {
  Recommendations,
  RecommendationsProps,
} from "../components/shared/Recommendations";
import { Partners, PartnersProps } from "../components/shared/Partners";
import { PartnersContact } from "../components/PartnersContact";
import { PartnersContactProps } from "../components/PartnersContact/PartnersContact";

interface Props
  extends NewsletterProps,
    RecommendationsProps,
    PartnersProps,
    PartnersContactProps {
  heroTitle: string;
  heroBackgroundImage: FluidObject;
  heroBackgroundImageDesktop: FluidObject;
  heroBackgroundImageAlt: string;
}

export const PartnersPageTemplate = (props: Props) => (
  <Page>
    <HeroSection
      heroTitle={props.heroTitle}
      heroBackgroundImage={props.heroBackgroundImage}
      heroBackgroundImageDesktop={props.heroBackgroundImageDesktop}
      heroBackgroundImageAlt={props.heroBackgroundImageAlt}
      centerContentVertically={true}
    />
    <PartnersContact
      partnersContactContent={props.partnersContactContent}
      partnersContacts={props.partnersContacts}
    />
    <Partners
      partnerSectionTitle={props.partnerSectionTitle}
      partnerLogos={props.partnerLogos}
      partnerLogosDesktop={props.partnerLogosDesktop}
    />
    <Recommendations
      recommendationsTitle={props.recommendationsTitle}
      recommendations={props.recommendations}
      className={"mb-20"}
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

const PartnersPage = ({ pageContext }) => {
  return <PartnersPageTemplate {...pageContext.props} />;
};

export default PartnersPage;
