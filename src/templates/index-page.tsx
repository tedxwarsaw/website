import React from "react";
import { graphql } from "gatsby";

export const IndexPageTemplate = ({ title }) => <div>{title}</div>;

const IndexPage = ({
  data,
}: {
  data: { markdownRemark: { frontmatter: { title: String } } };
}) => {
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
