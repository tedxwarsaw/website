import React from "react";
import { graphql } from "gatsby";
import { MarkdownDoc } from "../types";

interface Props {
  body: String;
}

export const AboutPageTemplate = ({ body }: Props) => <div>{body}</div>;

const AboutPage = ({ data }: { data: MarkdownDoc<Props> }) => {
  return <AboutPageTemplate {...data.markdownRemark.frontmatter} />;
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        body
      }
    }
  }
`;
