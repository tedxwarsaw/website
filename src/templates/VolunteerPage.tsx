import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import {CenterTextSection, CenterTextSectionProps} from "../components/shared/CenterTextSection";
import {Newsletter, NewsletterProps, NewsletterVariant} from "../components/shared/Newsletter";

interface Props extends CenterTextSectionProps, NewsletterProps{
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
        <CenterTextSection
            centerTextSectionTitle={props.centerTextSectionTitle}
            centerTextSectionContent={props.centerTextSectionContent}
            centerTextSectionButtonLink={props.centerTextSectionButtonLink}
            centerTextSectionButtonText={props.centerTextSectionButtonText}
            background="grey"
        />
        <Newsletter
            variant={NewsletterVariant.white}
            newsletterTitle={props.newsletterTitle}
            newsletterMessage1={props.newsletterMessage1}
            newsletterMessage2={props.newsletterMessage2}
            newsletterBackgroundImage={props.newsletterBackgroundImage}
            newsletterBackgroundImageDesktop={props.newsletterBackgroundImageDesktop}
        />
    </Page>
);

const VolunteerPage = ({ pageContext }) => {
    console.log(pageContext.props);
    return <SpeakersPageTemplate {...pageContext.props} />;
};

export default VolunteerPage;
