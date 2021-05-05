import React from "react";
import { Page } from "@/components/shared/Page";
import { Talk, TalkProps } from "@/components/Talk";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";
import {
  RelatedTalks,
  RelatedTalksProps,
} from "@/components/Talk/RelatedTalks";

export interface Props extends NewsletterProps, TalkProps, RelatedTalksProps {}

export const TalkPageTemplate = (props: Props) => {
  console.log(props);
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
      <RelatedTalks
        relatedTalks={props.relatedTalks}
        eventName={props.eventDisplayName}
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
