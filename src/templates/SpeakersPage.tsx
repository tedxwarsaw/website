import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import {CenterTextSection, CenterTextSectionProps} from "../components/CenterTextSection";
import {ContentPanel} from "../components/shared/ContentPanel";
import {HowDoesItWork, HowDoesItWorkProps} from "../components/HowDoesItWork/HowDoesItWork";
import {Newsletter, NewsletterProps, NewsletterVariant} from "../components/shared/Newsletter";
import {Recommendations, RecommendationsProps} from "../components/shared/Recommendations";

interface Props extends CenterTextSectionProps, HowDoesItWorkProps, NewsletterProps, RecommendationsProps{
    heroTitle: string;
    heroBackgroundImage: FluidObject;
    heroBackgroundImageDesktop: FluidObject;
    heroBackgroundImageAlt: string;
    contentPanelTitle: string;
    contentPanelText: string;
    progressSvgUrl: string;
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
        <ContentPanel title={props.contentPanelTitle} content={props.contentPanelText}/>
        <CenterTextSection
            centerTextSectionTitle={props.centerTextSectionTitle}
            centerTextSectionContent={props.centerTextSectionContent}
            centerTextSectionButtonLink={props.centerTextSectionButtonLink}
        />
        <HowDoesItWork howDoesItWorkTitle={props.howDoesItWorkTitle} howDoesItWorkSteps={props.howDoesItWorkSteps}/>
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
