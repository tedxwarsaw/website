import React from "react";
import { Page } from "@/components/shared/Page";

export interface Props {}

export const TalkPageTemplate = (props: Props) => {
  console.log(props);
  return (
    <Page>
      <p>talk page</p>
    </Page>
  );
};

const EventPage = ({ pageContext }) => {
  return <TalkPageTemplate {...pageContext.props} />;
};

export default EventPage;
