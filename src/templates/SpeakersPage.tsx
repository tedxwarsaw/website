import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";
import {CenterTextSection, CenterTextSectionProps} from "../components/CenterTextSection";

interface Props extends CenterTextSectionProps{
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
        <div style={{"height": "20px"}}>Po mergu branchow uzyj shared componentu z AboutTed</div>
        <CenterTextSection
            centerTextSectionTitle={props.centerTextSectionTitle}
            centerTextSectionContent={props.centerTextSectionContent}
            centerTextSectionButtonLink={props.centerTextSectionButtonLink}
        />
    </Page>
);

const SpeakersPage = ({ pageContext }) => {
    return <SpeakersPageTemplate {...pageContext.props} />;
};

export default SpeakersPage;
