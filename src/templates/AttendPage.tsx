import React from "react";
import { FluidObject } from "gatsby-image";
import { Page } from "./Page";
import { HeroSection } from "@/components/shared/HeroSection";
import {
  Newsletter,
  NewsletterProps,
  NewsletterVariant,
} from "@/components/shared/Newsletter";
import { JoinSpeakersSectionProps } from "@/queries/globalQueries/JoinSpeakersQuery";
import { Banner, BannerVariant } from "@/components/shared/Banner";
import { EventDetails } from "@/components/Attend/EventDetails";
import { PastEvents, PastEventsProps } from "@/components/Attend/PastEvents";
import { EventsList, EventsListProps } from "@/components/Attend/EventsList";
import { Button } from "../components/shared/Button";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";
import {Lines} from "../components/Lines/Lines";

export interface Props
  extends NewsletterProps,
    PastEventsProps,
    EventsListProps {
  isHeroNewsletter: boolean;
  isCurrentEvent: boolean;
  featuredEvent?: {
    slug: string;
    hook: string;
    displayName: string;
    description: string;
    location: {
      displayName: string;
      city: string;
    };
    date: string;
    cover: {
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
  joinSpeakers: JoinSpeakersSectionProps;
  ctaBannerText: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  joinUsTitle: string;
  joinUsContent1: string;
  joinUsContent2: string;
  joinUsButton1: string;
  joinUsButton2: string;
  joinUsButtonUrl1: string;
  joinUsButtonUrl2: string;
}

export const AttendPageTemplate = (props: Props) => (
  <Page>
    {props.isCurrentEvent && (
      <>
        <HeroSection
          heroTitle={props.featuredEvent.hook}
          heroButtonText={props.featuredEvent.cover.button.text}
          heroButtonLink={props.featuredEvent.cover.button.link}
          heroButtonShow={props.featuredEvent.cover.button.show}
          heroBackgroundImage={props.featuredEvent.cover.image.mobile}
          heroBackgroundImageDesktop={props.featuredEvent.cover.image.desktop}
          heroBackgroundImageAlt="Feature event hero"
          featuredButtonLink={`/event/${props.featuredEvent.slug}`}
          fontMedium
        />
        <EventDetails
          location={props.featuredEvent.location}
          description={props.featuredEvent.description}
          date={props.featuredEvent.date}
          slug={props.featuredEvent.slug}
        />
        <Banner
          title={props.ctaBannerText}
          variant={BannerVariant.white}
          buttonText={props.ctaButtonText}
          buttonUrl={props.ctaButtonLink}
        />
      </>
    )}

    {props.isHeroNewsletter && !props.isCurrentEvent && (
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
    )}

    {!props.isHeroNewsletter && !props.isCurrentEvent && (
      <>
        <HeroSection
          heroTitle={props.joinSpeakers.sectionTitle}
          heroSubtitle={props.joinSpeakers.sectionSubtitle}
          heroBackgroundImage={props.joinSpeakers.sectionBackgroundImage}
          heroBackgroundImageDesktop={
            props.joinSpeakers.sectionBackgroundImageDesktop
          }
          heroBackgroundImageAlt={props.joinSpeakers.sectionBackgroundImageAlt}
          heroButtonText={props.joinSpeakers.sectionButtonText}
          heroButtonLink={props.joinSpeakers.sectionButtonLink}
          heroLinks={props.joinSpeakers.sectionLinks}
          fontMedium
        />
        <Newsletter
          variant={NewsletterVariant.white}
          newsletterTitle={props.newsletterTitle}
          newsletterMessage1={props.newsletterMessage1}
          newsletterMessage2={props.newsletterMessage2}
        />
      </>
    )}

    <PastEvents
      pastEventsSectionTitle={props.pastEventsSectionTitle}
      pastEventsItems={props.pastEventsItems}
    />

    <EventsList events={props.events} categories={props.categories} />

    <div className="main-grid-full-span bg-customLightGrey py-10 relative">
      <Lines wider={true} onlyHorizontal={true}/>
      <div className="flex main-grid">
        <div className="px-5 md:px-0 ">
          <div className="inner-grid md:text-left text-center">
            <div className="block">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {props.joinUsTitle}
              </ReactMarkdown>
            </div>
            <div className="block mt-12 md:mt-0">
              <div>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {props.joinUsContent1}
                </ReactMarkdown>
              </div>
              <Link to={props.joinUsButtonUrl1}>
                <Button
                  children={<span>{props.joinUsButton1}</span>}
                  className="mt-10 hover:bg-white hover:text-customRed"
                />
              </Link>
            </div>
            <div className="block mt-12 md:mt-0">
              <div>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {props.joinUsContent2}
                </ReactMarkdown>
              </div>
              <Link to={props.joinUsButtonUrl2}>
                <Button
                  children={<span>{props.joinUsButton2}</span>}
                  className="mt-10 hover:bg-white hover:text-customRed"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);

const AttendPage = ({ pageContext }) => {
  return <AttendPageTemplate {...pageContext.props} />;
};

export default AttendPage;
