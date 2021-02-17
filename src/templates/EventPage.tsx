import React from "react";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { Page } from "../components/Page/Page";

interface Props {
  imgFluid: FluidObject;
}

export const EventPageTemplate = (props: Props) => (
  <Page>
    <div className="main-grid-full-span">
      <BackgroundImage
        fluid={props.imgFluid}
        alt="Cover photo"
        Tag="section"
        className="z-5"
      >
        <div style={{ height: "28rem" }} className="text-white">
          hello
        </div>
      </BackgroundImage>
    </div>
  </Page>
);

const EventPage = ({ data }) => {
  return <EventPageTemplate imgFluid={data.file.childImageSharp.fluid} />;
};

export default EventPage;

export const pageQuery = graphql`
  query EventPageTemplate {
    file(relativePath: { eq: "images/uploads/speaker-stage-logo.jpg" }) {
      childImageSharp {
        fluid(quality: 90, sizes: "(max:-width: 2000px)") {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pagesYaml(templateKey: { eq: "EventPage" }) {
      templateKey
    }
  }
`;
