import React from "react";
import { Page } from "@/components/shared/Page";
import {
  EventHighlight,
  EventHighlightProps,
} from "@/components/EventHighlight";
import { HeroSection, HeroSectionProps } from "@/components/HeroSection";
import { OurStory, OurStoryProps } from "@/components/OurStory";

export interface Props
  extends HeroSectionProps,
    OurStoryProps,
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
