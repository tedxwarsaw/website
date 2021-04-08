import React from "react";
import { HeroSection, HeroSectionProps } from "@/components/HeroSection";
import { YoutubeBanner, YoutubeBannerProps } from "@/components/YoutubeBanner";
import { Page } from "@/components/shared/Page";

export interface Props extends HeroSectionProps, YoutubeBannerProps {}

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
    <YoutubeBanner
      youtubeBannerHeading={props.youtubeBannerHeading}
      youtubeBannerLinkText={props.youtubeBannerLinkText}
      youtubeBannerLinkUrl={props.youtubeBannerLinkUrl}
    />
  </Page>
);

const IndexPage = ({ pageContext }) => {
  return <IndexPageTemplate {...pageContext.props} />;
};

export default IndexPage;
