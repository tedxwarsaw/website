import React from "react";
import { graphql, Link } from "gatsby";
import { FluidObject } from "gatsby-image";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { Button } from "@/components/shared/Button";
import { HiMenuAlt2 } from "react-icons/hi";
import { Page } from "@/components/shared/Page";
import { HeroSection } from "@/components/HeroSection";

export interface Props {
  isHeroNewsletter: boolean;
  isCurrentEvent: boolean;
  featuredEvent?: {
    slug: string;
    hook: string;
    displayName: string;
    description: string;
    location: string;
    date: string;
    time: string;
    coverHero: {
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
  };
}

export const AttendPageTemplate = (props: Props) => (
  <Page>
    <HeroSection
      heroTitle={props.featuredEvent.hook}
      heroButtonText={props.featuredEvent.coverHero.button.text}
      heroButtonLink={props.featuredEvent.coverHero.button.link}
      heroBackgroundImage={props.featuredEvent.coverHero.image.mobile}
      heroBackgroundImageDesktop={props.featuredEvent.coverHero.image.desktop}
      heroBackgroundImageAlt="Feture event hero"
      featuredButtonLink={`/events/${props.featuredEvent.slug}`}
    />
  </Page>
);

const AttendPage = ({ pageContext }) => {
  console.log(pageContext);
  return <AttendPageTemplate {...pageContext.props} />;
};

export default AttendPage;
