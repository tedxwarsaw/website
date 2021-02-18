import React from "react";
import { graphql, Link } from "gatsby";
import { FluidObject } from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { Button } from "../components/Button/Button";
import { Page } from "../components/Page/Page";

interface Props {
  eventSplash: FluidObject;
  locationImage: FluidObject;
}

export const EventPageTemplate = (props: Props) => (
  <Page>
    <div className="main-grid-full-span">
      <BackgroundImage
        fluid={props.eventSplash}
        alt="Cover photo"
        Tag="section"
      >
        <div style={{ height: "40rem" }} className="main-grid overflow-hidden">
          <div className="flex flex-row items-center">
            <div className="flex flex-col w-full items-center h-full justify-end p-20">
              <div className="text-center m-8 text-white text-medium text-3xl text-shadow">
                13 June 2019, Warsaw
              </div>
              <Button className="px-20 shadow-2xl">Attend</Button>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
    <div className="inner-grid py-20 space-y-10 md:space-y-0">
      <div className="font-bold text-3xl col-span-1">
        We passionately believe in the power of ideas to change the attitudes,
        lives, and, ultimately, the world.
      </div>
      <div className="text-lg xl:col-span-2">
        In today's World challenges are now coming at us constantly, and from
        every direction. To deal with them in the time-honoured way of "wait and
        see" is no longer a viable option. Solutions to housing problems, social
        inequality, cultural tensions and environmental pollution are only going
        to be found if we dare to face the problems, instead of waiting for
        someone to figure out the way forward. To lead is to dare, to hope is to
        dare. To solve problems is to dare.
      </div>
    </div>
    <div className="main-grid-full-span seamless-grid">
      <div className="col-span-3">
        <BackgroundImage
          fluid={props.locationImage}
          alt="Cover photo"
          Tag="section"
          style={{ height: "30rem" }}
        >
          <div className="absolute w-screen main-grid h-60 overflow-hidden text-white space-y-0 py-10">
            <div className="font-medium text-3xl text-shadow">
              Billenium,
              <br />
              <span className="font-light">Warsaw</span>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <iframe
        src="http://maps.google.com/maps?q=52.18772567948866,21.047430461589542&z=14&output=embed"
        height="100%"
        width="100%"
        className="col-span-3 md:col-span-2 xl:col-span-4"
        style={{ height: "30rem" }}
      ></iframe>
    </div>
  </Page>
);

const EventPage = ({ data }) => {
  return (
    <EventPageTemplate
      eventSplash={data.eventSplash.childImageSharp.fluid}
      locationImage={data.locationImage.childImageSharp.fluid}
    />
  );
};

export default EventPage;

export const pageQuery = graphql`
  query EventPageTemplate {
    eventSplash: file(relativePath: { eq: "images/uploads/dare-splash.jpg" }) {
      childImageSharp {
        fluid(quality: 90, sizes: "(max:-width: 2000px)") {
          ...GatsbyImageSharpFluid
        }
      }
    }
    locationImage: file(relativePath: { eq: "images/uploads/billenium.jpg" }) {
      childImageSharp {
        fluid(quality: 90, sizes: "(max:-width: 600px)") {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pagesYaml(templateKey: { eq: "EventPage" }) {
      templateKey
    }
  }
`;
