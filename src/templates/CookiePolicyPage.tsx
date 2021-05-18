import React from "react";
import { Page } from "./Page";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export interface Props {
  cookiePolicyContent: string;
}
export const CookiePolicyPageTemplate = (props: Props) => (
  <Page>
    <div className="about-ted-content">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {props.cookiePolicyContent}
      </ReactMarkdown>
    </div>
  </Page>
);

const CookiePolicyPage = ({ pageContext }) => (
  <CookiePolicyPageTemplate {...pageContext.props} />
);

export default CookiePolicyPage;
