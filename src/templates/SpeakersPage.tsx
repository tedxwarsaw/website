import React from "react";
import { Page } from "@/components/shared/Page";
import { FluidObject } from "gatsby-image";
import { HeroSection } from "@/components/HeroSection";

interface Props {
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
    </Page>
);

const SpeakersPage = ({ pageContext }) => {
    return <SpeakersPageTemplate {...pageContext.props} />;
};

export default SpeakersPage;
