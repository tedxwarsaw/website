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
        eventTypeKey
        sectionName
        description
      }
      joinUsTitle
      joinUsContent1
      joinUsContent2
      joinUsButton1
      joinUsButton2
      joinUsButtonUrl1
      joinUsButtonUrl2
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

  const categoryCount = {};
  for (const { category } of events) {
    if (category in categoryCount) {
      categoryCount[category] += 1;
    } else {
      categoryCount[category] = 0;
    }
  }

  const pastEventsItems = pagesYaml.pastEventsItems.map((item) => ({
    ...item,
    count: categoryCount[item.eventTypeKey] ?? 0,
  }));

  return {
    ...pagesYaml,
    ...newsletter,
    joinSpeakers,
    featuredEvent,
    events,
    categories,
    pastEventsItems,
  };
};
