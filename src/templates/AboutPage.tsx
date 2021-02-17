import React from "react";
import { graphql } from "gatsby";
import { YamlPage } from "../types";
import { Page } from "../components/Page/Page";

interface Props {
  body: String;
}

export const AboutPageTemplate = ({ body }: Props) => <Page>{body}</Page>;

const AboutPage = ({ data }: { data: YamlPage<Props> }) => {
  return <AboutPageTemplate {...data.pagesYaml} />;
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    pagesYaml(templateKey: { eq: "AboutPage" }) {
      body
    }
  }
`;
