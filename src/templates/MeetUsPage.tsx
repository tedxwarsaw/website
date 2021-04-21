import React from "react";
import { Page } from "@/components/shared/Page";
import {FluidObject} from "gatsby-image";
import {HeroSection} from "../components/HeroSection";
import {AboutTed} from "../components/AboutTed/AboutTed";

interface Props {
    heroTitle: string,
    heroBackgroundImage: FluidObject,
    heroBackgroundImageDesktop: FluidObject,
    heroBackgroundImageAlt: string
}

export const MeetUsPageTemplate = (props : Props) => (
    <Page>
        <HeroSection
            heroTitle={props.heroTitle}
            heroBackgroundImage={props.heroBackgroundImage}
            heroBackgroundImageDesktop={props.heroBackgroundImageDesktop}
            heroBackgroundImageAlt={props.heroBackgroundImageAlt}
            centerContentVertically={true}/>
            <AboutTed/>
    </Page>
);

const MeetUsPage = ({ pageContext }) => {
    return <MeetUsPageTemplate {...pageContext.props} />;
};

export default MeetUsPage;
