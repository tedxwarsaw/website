import React from "react";
import { Page } from "./Page";
import { Link } from "gatsby";

export interface Props {
  NotFoundContent: string;
}

export const NotFoundPageTemplate = (_props: Props) => (
  <Page>
    <div className="text-center h-full flex flex-col justify-center">
      <h1 className="font-bold">404</h1>
      <h3>Page not found :(</h3>
      <Link className="mt-4 text-red-500 font-bold hover:opacity-50" to="/">
        Go home
      </Link>
    </div>
  </Page>
);

const NotFoundPage = ({ pageContext }) => (
  <NotFoundPageTemplate {...pageContext.props} />
);

export default NotFoundPage;
