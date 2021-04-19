import React from "react";
import { graphql, Link } from "gatsby";
import { FluidObject } from "gatsby-image";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { Button } from "@/components/shared/Button";
import { HiMenuAlt2 } from "react-icons/hi";
import { Page } from "@/components/shared/Page";
import { HeroSection } from "@/components/HeroSection";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";
import { JoinSpeakersSectionProps } from "@/queries/globalQueries/JoinSpeakersQuery";

export interface Props extends NewsletterProps {
  isHeroNewsletter: boolean;
  isCurrentEvent: boolean;
  featuredEvent?: {
    slug: string;
    hook: string;
    displayName: string;
    description: string;
    location: string;
    date: string;
    time: string;
    coverHero: {
      button: {
        text: string;
        show: boolean;
        link: string;
      };
      image: {
        desktop: FluidObject;
        mobile: FluidObject;
      };
    };
  };
  joinSpeakers: JoinSpeakersSectionProps;
}

export const AttendPageTemplate = (props: Props) => (
  <Page>
    {props.isCurrentEvent && (
      <HeroSection
        heroTitle={props.featuredEvent.hook}
        heroButtonText={props.featuredEvent.coverHero.button.text}
        heroButtonLink={props.featuredEvent.coverHero.button.link}
        heroBackgroundImage={props.featuredEvent.coverHero.image.mobile}
        heroBackgroundImageDesktop={props.featuredEvent.coverHero.image.desktop}
        heroBackgroundImageAlt="Feture event hero"
        featuredButtonLink={`/events/${props.featuredEvent.slug}`}
        fontMedium
      />
    )}

    {props.isHeroNewsletter && !props.isCurrentEvent && (
      <Newsletter
        variant={NewsletterVariant.black}
        newsletterTitle={props.newsletterTitle}
        newsletterMessage1={props.newsletterMessage1}
        newsletterMessage2={props.newsletterMessage2}
        newsletterBackgroundImage={props.newsletterBackgroundImage}
        newsletterBackgroundImageDesktop={
          props.newsletterBackgroundImageDesktop
        }
      />
    )}

    {!props.isHeroNewsletter && !props.isCurrentEvent && (
      <>
        <HeroSection
          heroTitle={props.joinSpeakers.sectionTitle}
          heroSubtitle={props.joinSpeakers.sectionSubtitle}
          heroBackgroundImage={props.joinSpeakers.sectionBackgroundImage}
          heroBackgroundImageDesktop={
            props.joinSpeakers.sectionBackgroundImageDesktop
          }
          heroBackgroundImageAlt={props.joinSpeakers.sectionBackgroundImageAlt}
          heroButtonText={props.joinSpeakers.sectionButtonText}
          heroButtonLink={props.joinSpeakers.sectionButtonLink}
          heroLinks={props.joinSpeakers.sectionLinks}
          fontMedium
        />
        <Newsletter
          variant={NewsletterVariant.white}
          newsletterTitle={props.newsletterTitle}
          newsletterMessage1={props.newsletterMessage1}
          newsletterMessage2={props.newsletterMessage2}
        />
      </>
    )}
  </Page>
);

const AttendPage = ({ pageContext }) => {
  console.log(pageContext);
  return <AttendPageTemplate {...pageContext.props} />;
};

export default AttendPage;
