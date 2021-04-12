import React from "react";
import { graphql, Link } from "gatsby";
import { FluidObject } from "gatsby-image";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { Button } from "@/components/shared/Button";
import { HiMenuAlt2 } from "react-icons/hi";
import { Page } from "@/components/shared/Page";

interface Props {
  imgFluid: FluidObject;
}

export const AttendPageTemplate = (props: Props) => (
  <Page>
    <div className="main-grid-full-span">
      <BackgroundImage
        style={{ height: "28rem" }}
        image={props.imgFluid}
        alt="Cover photo"
      >
        <div className="h-full main-grid overflow-hidden">
          <div className="flex flex-row items-center">
            <div className="pl-8 pr-8 py-8 md:pr-2 max-w-xl space-y-10">
              <h1 className="text-white font-medium text-3xl">
                We passionately believe in the power of ideas to change the
                attitudes, lives, and, ultimately, the world.
              </h1>
              <div className="flex space-x-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://google.com/"
                >
                  <Button>Attend</Button>
                </a>
                <div className="text-customRed font-medium flex flex-row items-center hover:text-white">
                  <Link to="/event/2019">
                    <span>
                      Read more <HiMenuAlt2 className="inline w-6 h-6" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  </Page>
);

const AttendPage = ({ data }) => {
  return <AttendPageTemplate imgFluid={data.file.childImageSharp.fluid} />;
};

export default AttendPage;

export const pageQuery = graphql`
  query AttendPageTemplate {
    file(relativePath: { eq: "images/uploads/speaker-stage-logo.jpg" }) {
      childImageSharp {
        fluid(quality: 90, sizes: "(max:-width: 2000px)") {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pagesYaml(templateKey: { eq: "AttendPage" }) {
      templateKey
    }
  }
`;
