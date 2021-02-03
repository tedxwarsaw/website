import React from "react";
import { graphql } from "gatsby";
import { MarkdownDoc } from "../types";

interface Props {
  title: String;
}

export const IndexPageTemplate = ({ title }: Props) => <div>{title}</div>;

const IndexPage = ({ data }: { data: MarkdownDoc<Props> }) => {
  return <IndexPageTemplate {...data.markdownRemark.frontmatter} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
