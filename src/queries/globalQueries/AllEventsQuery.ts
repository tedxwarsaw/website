import { getFluidImage } from "../utils";

const eventsQuery = `#graphql
  query Events {
    allEventsYaml(filter: {collectionId: {eq: "event"}}) {
      nodes {
        slug
        displayName
        description
        category
        date
        cover {
          image {
            desktop
            mobile
          }
        }
      }
    }
  }
`;

export const queryForAllEvents = async (
  graphql: (query: string, args?: any) => any
): Promise<any> => {
  const { data } = await graphql(eventsQuery);
  const events = data.allEventsYaml.nodes;

  const eventsData = await Promise.all(
    events.map(async (event) => {
      const coverMobile = await getFluidImage({
        graphql,
        path: event.cover.image.mobile,
        quality: 90,
        sizes: "(max:-width: 768px)",
      });
      const coverDesktop = await getFluidImage({
        graphql,
        path: event.cover.image.desktop,
        quality: 90,
        sizes: "(max:-width: 2000px)",
      });

      const cover = {
        image: {
          desktop: coverDesktop,
          mobile: coverMobile,
        },
      };
      console.log({ ...event, cover });
      return { ...event, cover };
    })
  );

  return {
    ...eventsData,
  };
};
