import React from "react";
import { Page } from "@/components/shared/Page";
import { Watch, WatchProps } from "@/components/Watch";

export interface Props extends WatchProps {}
export const WatchPageTemplate = (props: Props) => (
  <Page>
    <Watch
      headerTitle={props.headerTitle}
      headerSubtitle={props.headerSubtitle}
    />
  </Page>
);

const WatchPage = ({ pageContext }) => {
  console.log(pageContext);
  return <WatchPageTemplate {...pageContext.props} />;
};

export default WatchPage;
