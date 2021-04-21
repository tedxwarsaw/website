import React from "react";
import { FluidObject, FixedObject } from "gatsby-image";
import { Page } from "@/components/shared/Page";
import { splitTextInTwo } from "../utils";
import { EventHero } from "@/components/EventHero";
import { SuggestedEvent } from "@/components/SuggestedEvent";
import {
  BecomePartner,
  PartnershipTeamMember,
} from "@/components/BecomePartner/BecomePartner";
import { Partners } from "@/components/shared/Partners";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";
import { Banner, BannerVariant } from "@/components/shared/Banner";
import { EventPlace, EventPlaceProps } from "@/components/EventPlace";

enum CoverVariant {
  Dark = "dark",
}

export interface Props extends NewsletterProps, EventPlaceProps {
  partnerLogos: FixedObject[];
  partnerLogosDesktop: FixedObject[];
  partnershipTeam: PartnershipTeamMember[];
  suggestedEvent: SuggestedEvent;
  city: string;
  displayName: string;
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
}

export interface SuggestedEvent {
  slug: string;
  displayName: string;
  photos: FluidObject[];
}

export const EventPageTemplate = (props: Props) => {
  const descriptionParts = splitTextInTwo(props.description);

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
      <div className="inner-grid py-20 space-y-10 xl:space-y-0">
        <div className="font-bold text-3xl md:col-span-2 xl:col-span-1">
          {props.hook}
        </div>
        <div className="text-lg hidden md:block">{descriptionParts[0]}</div>
        <div className="text-lg hidden md:block">{descriptionParts[1]}</div>
        <div className="text-lg block md:hidden">{props.description}</div>
      </div>

      <EventPlace location={props.location} />

      <Banner
        title={props.callToAction.title}
        subtitle={props.callToAction.subtitle}
        buttonText={props.callToAction.buttonText}
        buttonUrl={props.callToAction.buttonUrl}
      />

      <Partners
        partnerSectionTitle="Event partners"
        partnerLogos={props.partnerLogos}
        partnerLogosDesktop={props.partnerLogosDesktop}
      />

      <BecomePartner partnershipTeam={props.partnershipTeam} />

      <Banner
        title="Join TEDx Warsaw."
        variant={BannerVariant.white}
        subtitle="Become our volunteer and enter the amazing world of TEDx"
        buttonText="Get involved as a volonteer"
        buttonUrl="/"
      />

      <SuggestedEvent
        displayName={props.suggestedEvent.displayName}
        slug={props.suggestedEvent.slug}
        photos={props.suggestedEvent.photos}
      />
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
