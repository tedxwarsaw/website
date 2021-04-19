import { Props } from "../templates/AttendPage";
import { getFixedImage, getFluidImage } from "./utils";
import { queryForNewsletter } from "./globalQueries";

const pageQuery = `#graphql
  query PageQuery(
    $eventSlug: String
    $suggestedEventSlug: String,
  ) {
    pageYaml(templateKey: { eq: "AttendPage" }) {
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

  return {
    ...pagesYaml,
  };
};
