import React from "react";
import { graphql } from "gatsby";
import { YamlPage } from "../types";

interface Props {
  body: String;
}

export const AboutPageTemplate = ({ body }: Props) => <div>{body}</div>;

const AboutPage = ({ data }: { data: YamlPage<Props> }) => {
  return <AboutPageTemplate {...data.pagesYaml} />;
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    pagesYaml(templateKey: { eq: "about-page" }) {
      body
    }
  }
`;
