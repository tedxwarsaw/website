import React from "react";
import { Page } from "@/components/shared/Page";
import { TalkMainSection, TalkMainSectionProps } from "@/components/Talk";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";

export interface Props extends NewsletterProps, TalkMainSectionProps {}

export const TalkPageTemplate = (props: Props) => {
  return (
    <Page>
      <TalkMainSection
        youtubeVideoId={props.youtubeVideoId}
        speaker={props.speaker}
        displayName={props.displayName}
        eventDisplayName={props.eventDisplayName}
        duration={props.duration}
      />
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
    </Page>
  );
};

const EventPage = ({ pageContext }) => {
  return <TalkPageTemplate {...pageContext.props} />;
};

export default EventPage;
