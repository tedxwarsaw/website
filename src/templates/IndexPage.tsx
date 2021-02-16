import React from "react";
import { graphql, Link } from "gatsby";
import { YamlPage } from "../types";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

interface Props {
  title: String;
}

export const IndexPageTemplate = ({ title }: Props) => (
  <>
    <Navbar />
    <main className="main-grid">
      <div className="inner-grid">
        <span>hello</span>
        <span>hello</span>
        <span className="h-96" id="newsletter">
          newsletter
        </span>
      </div>
    </main>
    <Footer />
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
