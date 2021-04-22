import { Props } from "../templates/AttendPage";
import {
  queryForNewsletter,
  queryForFeatureEvent,
  queryForJoinSpeakers,
  queryForAllEvents,
} from "./globalQueries";

const pageQuery = `#graphql
  query PageQuery {
    pagesYaml(templateKey:{ eq: "AttendPage" }) {
      isHeroNewsletter
      isCurrentEvent
      ctaBannerText
      ctaButtonText
      ctaButtonLink
      pastEventsSectionTitle
      pastEventsItems {
        title
        sectionName
        description
      }
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
  const joinSpeakers = await queryForJoinSpeakers(graphql);
  const { events, categories } = await queryForAllEvents(graphql);

  return {
    ...pagesYaml,
    ...newsletter,
    joinSpeakers,
    featuredEvent,
    events,
    categories,
  };
};
