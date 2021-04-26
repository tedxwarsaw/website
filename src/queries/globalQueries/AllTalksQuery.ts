import { getFluidImage } from "../utils";

const talksQuery = `#graphql
  query Talks {
    allTalksYaml(filter: {collectionId: {eq: "talk"}}) {
      nodes {
        slug
        displayName
        speaker
        eventSlug
        cover {
          image {
            desktop
            mobile
          }
        }
        duration
      }
    }
  }
`;

const eventQuery = `#graphql
  query EventQuery(
    $eventSlug: String
  ) {
    event: eventsYaml(slug: {eq: $eventSlug}) {
      displayName
    }
  }
`;

export const queryForAllTalks = async (
  graphql: (query: string, args?: any) => any
): Promise<any> => {
  const { data } = await graphql(talksQuery);
  const talks = data.allTalksYaml.nodes;

  const allEventsSlugs = [];

  const talksData = await Promise.all(
    talks.map(async (talk) => {
      const coverMobile = await getFluidImage({
        graphql,
        path: talk.cover.image.mobile,
        quality: 90,
        sizes: "(max:-width: 768px)",
      });
      const coverDesktop = await getFluidImage({
        graphql,
        path: talk.cover.image.desktop,
        quality: 90,
        sizes: "(max:-width: 2000px)",
      });

      const cover = {
        image: {
          desktop: coverDesktop,
          mobile: coverMobile,
        },
      };
      allEventsSlugs.push(talk.eventSlug);
      return { ...talk, cover };
    })
  );

  const allEvents = await Promise.all(
    allEventsSlugs.map(async (eventSlug) => {
      const {
        data: { event },
      } = await graphql(eventQuery, {
        eventSlug: eventSlug,
      });

      return event.displayName;
    })
  );

  return {
    talks: [...talksData],
    eventNames: [...new Set(allEvents)],
  };
};
