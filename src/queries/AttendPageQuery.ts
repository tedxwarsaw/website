import { Props } from "../templates/AttendPage";
import { getFluidImage } from "./utils";
import { queryForNewsletter, queryForFeatureEvent } from "./globalQueries";

const pageQuery = `#graphql
  query PageQuery {
    pagesYaml(templateKey:{ eq: "AttendPage" }) {
      isHeroNewsletter
      isCurrentEvent
    }
  }
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

  const newsletter = await queryForNewsletter(graphql);
  const featuredEvent = await queryForFeatureEvent(graphql);

  return {
    ...pagesYaml,
    ...newsletter,
    featuredEvent,
  };
};
