import React from "react";
import { Page } from "@/components/shared/Page";
import {FluidObject} from "gatsby-image";
import {HeroSection} from "../components/HeroSection";
import {AboutTed, AboutTedProps} from "../components/AboutTed/AboutTed";

interface Props extends AboutTedProps{
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
        <AboutTed aboutTedContent={props.aboutTedContent} aboutTedSpeakers={props.aboutTedSpeakers}/>
        <div style={{height: "50vh"}}/>
    </Page>
);

const MeetUsPage = ({ pageContext }) => {
    console.log(pageContext.props);
    return <MeetUsPageTemplate {...pageContext.props} />;
};

export default MeetUsPage;
