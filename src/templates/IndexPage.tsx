import React from "react";
import { Page } from "@/components/shared/Page";
import { HeroSection, HeroSectionProps } from "@/components/HeroSection";
import { OurStory, OurStoryProps } from "@/components/OurStory";
import {
  Recommendations,
  RecommendationsProps,
} from "@/components/Recommendations";
import { YoutubeBanner, YoutubeBannerProps } from "@/components/YoutubeBanner";
import {
  EventHighlight,
  EventHighlightProps,
} from "@/components/EventHighlight";
import { JoinUs, JoinUsProps } from "@/components/JoinUs";
import { Partners, PartnersProps } from "@/components/shared/Partners";
import { Newsletter, NewsletterProps } from "@/components/shared/Newsletter";

export interface Props
  extends HeroSectionProps,
    OurStoryProps,
    RecommendationsProps,
    YoutubeBannerProps,
    EventHighlightProps,
    JoinUsProps,
    PartnersProps,
    NewsletterProps {}

export const IndexPageTemplate = (props: Props) => (
  <Page>
    <HeroSection
      heroTitle={props.heroTitle}
      heroSubtitle={props.heroSubtitle}
      heroButtonText={props.heroButtonText}
      heroButtonLink={props.heroButtonLink}
      heroLinks={props.heroLinks}
      heroBackgroundImage={props.heroBackgroundImage}
      heroBackgroundImageDesktop={props.heroBackgroundImageDesktop}
      heroBackgroundImageAlt={props.heroBackgroundImageAlt}
    />
    <OurStory
      ourStoryTitle={props.ourStoryTitle}
      ourStoryItems={props.ourStoryItems}
    />
    <Recommendations recommendations={props.recommendations} />
    <YoutubeBanner
      youtubeBannerHeading={props.youtubeBannerHeading}
      youtubeBannerLinkText={props.youtubeBannerLinkText}
      youtubeBannerLinkUrl={props.youtubeBannerLinkUrl}
    />
    <EventHighlight
      eventHiglightImage={props.eventHiglightImage}
      eventHiglightImageDesktop={props.eventHiglightImageDesktop}
      eventHeader={props.eventHeader}
      eventSpeakerPhotos={props.eventSpeakerPhotos}
      eventDescription={props.eventDescription}
      eventSlug={props.eventSlug}
    />
    <JoinUs
      joinUsTitle={props.joinUsTitle}
      joinUsSubtitle={props.joinUsSubtitle}
      joinUsImage={props.joinUsImage}
      joinUsImageDesktop={props.joinUsImageDesktop}
      joinUsVolunteerText={props.joinUsVolunteerText}
      joinUsVolunteerLink={props.joinUsVolunteerLink}
      joinUsGetToKnowOurTeamText={props.joinUsGetToKnowOurTeamText}
      joinUsGetToKnowOurTeamLink={props.joinUsGetToKnowOurTeamLink}
      joinUsBecomeSpeakerText={props.joinUsBecomeSpeakerText}
      joinUsBecomeSpeakerLink={props.joinUsBecomeSpeakerLink}
    />
    <Partners
      partnerSectionTitle={props.partnerSectionTitle}
      getToKnowOurPartnersText={props.getToKnowOurPartnersText}
      getToKnowOurPartnersLink={props.getToKnowOurPartnersLink}
      joinOurPartnersText={props.joinOurPartnersText}
      joinOurPartnersLink={props.joinOurPartnersLink}
      partnerLogos={props.partnerLogos}
      partnerLogosDesktop={props.partnerLogosDesktop}
    />
    <Newsletter
      newsletterTitle={props.newsletterTitle}
      newsletterMessage1={props.newsletterMessage1}
      newsletterMessage2={props.newsletterMessage2}
      newsletterBackgroundImage={props.newsletterBackgroundImage}
      newsletterBackgroundImageDesktop={props.newsletterBackgroundImageDesktop}
    />
  </Page>
);

const IndexPage = ({ pageContext }) => {
  return <IndexPageTemplate {...pageContext.props} />;
};

export default IndexPage;
