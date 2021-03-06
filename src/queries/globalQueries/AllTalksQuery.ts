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
      edition
      date
    }
  }
`;

export const queryForAllTalks = async (
  graphql: (query: string, args?: any) => any
): Promise<any> => {
  const { data } = await graphql(talksQuery);
  const talks = data.allTalksYaml.nodes;

  const allEvents = {};

  const talksData = await Promise.all(
    talks.map(async (talk) => {
      try {
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

        const {
          data: { event },
        } = await graphql(eventQuery, {
          eventSlug: talk.eventSlug,
        });

        allEvents[talk.eventSlug] = event.displayName + " - " + event.edition;
        const date = new Date(event.date).getTime();
        const duration = talk.duration.replace('"', "").replace('"', "");
        return { ...talk, cover, date, duration };
      } catch (err) {
        console.error(`thrown at talk ${JSON.stringify(talk)}`);
        throw err;
      }
    })
  );

  talksData.sort((a, b) => b.date - a.date);
  return {
    talks: [...talksData],
    eventNames: allEvents,
  };
};
