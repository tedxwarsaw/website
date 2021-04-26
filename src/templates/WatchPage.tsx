import React from "react";
import { Page } from "@/components/shared/Page";
import { Watch, WatchProps } from "@/components/Watch";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";

export interface Props extends WatchProps, NewsletterProps {}
export const WatchPageTemplate = (props: Props) => (
  <Page>
    <Watch
      headerTitle={props.headerTitle}
      headerSubtitle={props.headerSubtitle}
      talks={props.talks}
      eventNames={props.eventNames}
    />
    <Newsletter
      variant={NewsletterVariant.black}
      newsletterTitle={props.newsletterTitle}
      newsletterMessage1={props.newsletterMessage1}
      newsletterMessage2={props.newsletterMessage2}
      newsletterBackgroundImage={props.newsletterBackgroundImage}
      newsletterBackgroundImageDesktop={props.newsletterBackgroundImageDesktop}
    />
  </Page>
);

const WatchPage = ({ pageContext }) => {
  console.log(pageContext);
  return <WatchPageTemplate {...pageContext.props} />;
};

export default WatchPage;
