import React from "react";
import { graphql, Link } from "gatsby";
import { YamlPage } from "../types";
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
