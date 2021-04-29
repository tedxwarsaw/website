import React from "react";
import { Page } from "./Page";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export interface Props {
  privacyPolicyContent: string;
}
export const PrivacyPolicyPageTemplate = (props: Props) => (
  <Page>
    <div className="about-ted-content">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {props.privacyPolicyContent}
      </ReactMarkdown>
    </div>
  </Page>
);

const PrivacyPolicyPage = ({ pageContext }) => {
  console.log(pageContext);
  return <PrivacyPolicyPageTemplate {...pageContext.props} />;
};

export default PrivacyPolicyPage;
