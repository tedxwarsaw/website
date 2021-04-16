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

export interface Props
  extends HeroSectionProps,
    OurStoryProps,
    RecommendationsProps,
    YoutubeBannerProps,
    EventHighlightProps {}

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
  </Page>
);

const IndexPage = ({ pageContext }) => {
  return <IndexPageTemplate {...pageContext.props} />;
};

export default IndexPage;
