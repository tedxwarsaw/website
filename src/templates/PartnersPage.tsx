import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import {Newsletter, NewsletterProps, NewsletterVariant} from "../components/shared/Newsletter";
import {Recommendations, RecommendationsProps} from "../components/shared/Recommendations";

interface Props extends NewsletterProps, RecommendationsProps{
    heroTitle: string;
    heroBackgroundImage: FluidObject;
    heroBackgroundImageDesktop: FluidObject;
    heroBackgroundImageAlt: string;
}

export const SpeakersPageTemplate = (props: Props) => (
    <Page>
        <HeroSection
            heroTitle={props.heroTitle}
            heroBackgroundImage={props.heroBackgroundImage}
            heroBackgroundImageDesktop={props.heroBackgroundImageDesktop}
            heroBackgroundImageAlt={props.heroBackgroundImageAlt}
            centerContentVertically={true}
        />
        <Recommendations
            recommendationsTitle={props.recommendationsTitle}
            recommendations={props.recommendations}
            className={"mb-20"}
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

const SpeakersPage = ({ pageContext }) => {
    return <SpeakersPageTemplate {...pageContext.props} />;
};

export default SpeakersPage;
