import React from "react";
import Img, { FluidObject, FixedObject } from "gatsby-image";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { Button, ButtonVariant } from "@/components/shared/Button";
import { Page } from "@/components/shared/Page";
import { splitTextInTwo } from "../utils";
import { EventHero } from "@/components/EventHero";
import { SuggestedEvent } from "@/components/shared/SuggestedEvent";
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
import { Banner } from "@/components/shared/Banner";

enum CoverVariant {
  Dark = "dark",
}

export interface Props extends NewsletterProps {
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
  location: {
    displayName: string;
    city: string;
    image: FluidObject;
    mapSrc: string;
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

      <div className="main-grid-full-span seamless-grid">
        <div className="col-span-3">
          <BackgroundImage
            image={props.location.image}
            alt="Cover photo"
            style={{ height: "30rem" }}
          >
            <div className="absolute w-screen main-grid h-60 overflow-hidden text-white space-y-0 py-10">
              <div className="font-medium text-4xl text-shadow">
                {props.location.displayName},
                <br />
                <span className="font-light">{props.location.city}</span>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <iframe
          src={props.location.mapSrc}
          height="100%"
          width="100%"
          className="col-span-3 md:col-span-2 xl:col-span-4"
          style={{ height: "30rem" }}
        ></iframe>
      </div>

      <div className="inner-grid py-20 space-y-8 md:space-y-0">
        <div className="space-y-2">
          <div className="font-bold text-4xl">Schedule</div>
          <div className="text-4xl">June 13th</div>
        </div>
        <div
          className="xl:col-span-2 grid grid-cols-2 gap-x-4 gap-y-8 text-lg"
          style={{ gridTemplateColumns: "4rem 1fr" }}
        >
          <div className="w-16">11:00</div>
          <div>
            <div className="font-bold">Session 1</div>
          </div>
          <div className="w-16">12:00</div>
          <div>
            <div className="font-bold">Conversations with speakers</div>
          </div>
          <div className="w-16">12:30</div>
          <div>
            <div className="font-bold">Discovery sessions</div>
            <div>
              Deep dive workshops and activities - sign up available ahead of
              time
            </div>
          </div>
          <div className="w-16">13:30</div>
          <div>
            <div className="font-bold">Session 2</div>
          </div>
        </div>
      </div>

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
