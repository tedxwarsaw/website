import React from "react";
import { Page } from "@/components/shared/Page";
import { Talk, TalkProps } from "@/components/Talk";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";

export interface Props extends NewsletterProps, TalkProps {}

export const TalkPageTemplate = (props: Props) => {
  return (
    <Page>
      <Talk
        youtubeVideoId={props.youtubeVideoId}
        speaker={props.speaker}
        displayName={props.displayName}
        eventDisplayName={props.eventDisplayName}
        duration={props.duration}
        talkDescription={props.talkDescription}
        speakerProfileImage={props.speakerProfileImage}
        speakerDescription={props.speakerDescription}
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
