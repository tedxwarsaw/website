import { queryForAllTalks, queryForNewsletter } from "./globalQueries";
import { Props } from "../templates/WatchPage";

export const pageQuery = `#graphql
  query WatchPageTemplate {
    pagesYaml(templateKey: { eq: "WatchPage" }) {
      headerTitle
      headerSubtitle
    }
  }
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

  const { talks, eventNames } = await queryForAllTalks(graphql);
  const newsletter = await queryForNewsletter(graphql);

  return {
    ...pagesYaml,
    ...newsletter,
    talks,
    eventNames,
  };
};
