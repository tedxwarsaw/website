import React from "react";
import { FluidObject } from "gatsby-image";
import { Page } from "@/components/shared/Page";
import { HeroSection } from "@/components/HeroSection";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";
import { JoinSpeakersSectionProps } from "@/queries/globalQueries/JoinSpeakersQuery";
import { Banner, BannerVariant } from "@/components/shared/Banner";
import { EventDetails } from "@/components/EventDetails";

export interface Props extends NewsletterProps {
  isHeroNewsletter: boolean;
  isCurrentEvent: boolean;
  featuredEvent?: {
    slug: string;
    hook: string;
    displayName: string;
    description: string;
    location: {
      displayName: string;
      city: string;
    };
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
      <>
        <HeroSection
          heroTitle={props.featuredEvent.hook}
          heroButtonText={props.featuredEvent.coverHero.button.text}
          heroButtonLink={props.featuredEvent.coverHero.button.link}
          heroBackgroundImage={props.featuredEvent.coverHero.image.mobile}
          heroBackgroundImageDesktop={
            props.featuredEvent.coverHero.image.desktop
          }
          heroBackgroundImageAlt="Feture event hero"
          featuredButtonLink={`/events/${props.featuredEvent.slug}`}
          fontMedium
        />
        <EventDetails
          location={props.featuredEvent.location}
          description={props.featuredEvent.description}
          date={props.featuredEvent.date}
          time={props.featuredEvent.time}
          slug={props.featuredEvent.slug}
        />
        <Banner
          title="Become our partner and enter the amazing world of TEDx"
          variant={BannerVariant.white}
          buttonText="Get involved as a partner"
          buttonUrl="/"
        />
      </>
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
