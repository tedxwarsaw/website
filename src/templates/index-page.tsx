import React from "react";
import { graphql, Link } from "gatsby";
import { MarkdownDoc } from "../types";
import { Navbar } from "../components/Navbar";

interface Props {
  title: String;
}

export const IndexPageTemplate = ({ title }: Props) => (
  <>
    <Navbar />
    {title}
    <div>
      <Link to="/about.html">About</Link>
    </div>
  </>
);

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
