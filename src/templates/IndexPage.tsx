import React from "react";
import { graphql, Link } from "gatsby";
import { YamlPage } from "../types";
import { Navbar } from "../components/Navbar/Navbar";

interface Props {
  title: String;
}

export const IndexPageTemplate = ({ title }: Props) => (
  <>
    <Navbar />
    <main className="main-grid">
      <span>hello</span>
      <span>hello</span>
      <div className="inner-grid">
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96">hey 1</span>
        <span className="h-96" id="newsletter">
          newsletter
        </span>
      </div>
    </main>
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
