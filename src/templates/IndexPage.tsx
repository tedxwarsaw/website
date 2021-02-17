import React from "react";
import { graphql } from "gatsby";
import { YamlPage } from "../types";
import { Page } from "../components/Page/Page";

interface Props {
  title: String;
}

export const IndexPageTemplate = ({ title }: Props) => (
  <Page>
    <span>hello</span>
    <span>hello</span>
    <span className="h-96" id="newsletter">
      newsletter
    </span>
  </Page>
);

const IndexPage = ({ data }: { data: YamlPage<Props> }) => {
  return <IndexPageTemplate {...data.pagesYaml} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    pagesYaml(templateKey: { eq: "IndexPage" }) {
      title
    }
  }
`;
