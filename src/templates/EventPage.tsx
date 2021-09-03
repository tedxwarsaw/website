import React from "react";
import { FluidObject, FixedObject } from "gatsby-image";
import { Page } from "./Page";
import { splitTextInTwo } from "../utils";
import { EventHero } from "@/components/Event/EventHero";
import { SuggestedEvent } from "@/components/Event/SuggestedEvent";
import {
  BecomePartner,
  PartnershipTeamMember,
} from "@/components/Event/BecomePartner";
import { Partners } from "@/components/shared/Partners";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";
import { Banner, BannerVariant } from "@/components/shared/Banner";
import { EventPlace, EventPlaceProps } from "@/components/Event/EventPlace";
import {
  EventSpeakers,
  EventSpeakersProps,
} from "@/components/Event/EventSpeakers";
import { HeroSection } from "@/components/shared/HeroSection";
import moment from "moment";
import { JoinSpeakersSectionProps } from "@/queries/globalQueries/JoinSpeakersQuery";
import { CoverVariant } from "@/types";
import { Lines } from "../components/Lines/Lines";

export interface Props
  extends NewsletterProps,
    EventPlaceProps,
    EventSpeakersProps {
  partnerLogos: FixedObject[];
  partnerLogosDesktop: FixedObject[];
  partnershipTeam: PartnershipTeamMember[];
  suggestedEvent: SuggestedEvent;
  slug: string;
  city: string;
  displayName: string;
  edition: string;
  date: string;
  hook: string;
  description: string;
  cover: {
    variant: CoverVariant;
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
  callToAction: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonUrl: string;
  };
  isOnline: boolean;
  joinSpeakers: JoinSpeakersSectionProps;
  ticketProviderLogo: FixedObject;
  eventPhotosDesktop: FluidObject[];
}

export interface SuggestedEvent {
  slug: string;
  displayName: string;
  photos: FluidObject[];
}

export const EventPageTemplate = (props: Props) => {
  const descriptionParts = splitTextInTwo(props.description);
  const dateConverted = moment(props.date, "DD/MM/YYYY");
  const today = moment(new Date(), "DD/MM/YYYY");
  const isFutureEvent = today < dateConverted;
  return (
    <Page>
      <EventHero
        backgroundImage={props.cover.image.mobile}
        backgroundImageDesktop={props.cover.image.desktop}
        date={props.date}
        city={props.location.city}
        buttonShow={props.cover.button.show}
        buttonText={props.cover.button.text}
        buttonLink={props.cover.button.link}
      />
      <div className="inner-grid py-20 space-y-10 xl:space-y-0 relative">
        <Lines wider={true} />
        <div className="font-bold text-3xl md:col-span-2 xl:col-span-1">
          {props.hook}
        </div>
        <div className="text-lg hidden md:block">{descriptionParts[0]}</div>
        <div className="text-lg hidden md:block">{descriptionParts[1]}</div>
        <div className="text-lg block md:hidden">{props.description}</div>
      </div>
      {!props.isOnline && <EventPlace location={props.location} />}
      {props.eventSpeakers && props.eventSpeakers.length > 0 && (
        <EventSpeakers eventSpeakers={props.eventSpeakers} />
      )}
      <Banner
        title={props.callToAction.title}
        variant={BannerVariant.red}
        subtitle={props.callToAction.subtitle}
        buttonText={props.callToAction.buttonText}
        buttonUrl={props.callToAction.buttonUrl}
        logo={props.ticketProviderLogo}
      />
      {props.partnerLogos.length !== 0 && (
        <Partners
          partnerSectionTitle="Event partners"
          partnerLogos={props.partnerLogos}
          partnerLogosDesktop={props.partnerLogosDesktop}
        />
      )}
      {isFutureEvent && (
        <>
          <BecomePartner partnershipTeam={props.partnershipTeam} />
          <Banner
            title="Join TEDxWarsaw."
            variant={BannerVariant.white}
            subtitle="Become our volunteer and enter the amazing world of TEDx"
            buttonText="Get involved as a volunteer"
            buttonUrl="/volunteers"
            logo={props.ticketProviderLogo}
          />
        </>
      )}
      {props.eventPhotosDesktop.length > 0 ? (
        <SuggestedEvent
          displayName={props.displayName}
          slug={props.slug}
          photos={props.eventPhotosDesktop}
        />
      ) : (
        props.suggestedEvent.photos.length > 0 && (
          <SuggestedEvent
            displayName={props.suggestedEvent.displayName}
            slug={props.suggestedEvent.slug}
            photos={props.suggestedEvent.photos}
          />
        )
      )}
      {!isFutureEvent && (
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
      )}
      <Newsletter
        variant={NewsletterVariant.white}
        newsletterTitle={props.newsletterTitle}
        newsletterMessage1={props.newsletterMessage1}
        newsletterMessage2={props.newsletterMessage2}
      />
    </Page>
  );
};

const EventPage = ({ pageContext }) => {
  return <EventPageTemplate {...pageContext.props} />;
};

export default EventPage;
