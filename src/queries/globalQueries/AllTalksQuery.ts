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

      if (talk.eventSlug) {
        console.log(talk.eventSlug);
      } else {
        console.log(
          "************** there is no slug ********************************"
        );
      }

      const {
        data: { event },
      } = await graphql(eventQuery, {
        eventSlug: talk.eventSlug,
      });
      if (!event) {
        console.log(
          "******************************** HERE ********************************"
        );
        console.log(talk.eventSlug);
        console.log(event);
      }
      // allEvents[talk.eventSlug] = "poke-the-comfort-zone-2013";

      // const date = new Date(event.date);
      // const date = new Date("24/03/2017").getTime();
      // const date = new Date(event.date);

      allEvents[talk.eventSlug] = event.displayName;
      const date = new Date(event.date).getTime();
      return { ...talk, cover, date };
    })
  );

  talksData.sort((a, b) => b.date - a.date);
  return {
    talks: [...talksData],
    eventNames: allEvents,
  };
};
