import { getFluidImage } from "../utils";
import { RecommendationsProps } from "@/components/shared/Recommendations";

const recommendationsQuery = `#graphql
query RecommendationsQuery {
  recommendationsData:  globalYaml(collectionId: { eq: "recommendations" })  {
    recommendationsTitle
    recommendations {
      events {
        eventSlug
        order
      }
      talks {
        talkSlug
        order
      }
    }
  }
}
`;

const eventQuery = `#graphql
  query EventQuery(
    $eventSlug: String
  ) {
    event: eventsYaml(slug: {eq: $eventSlug}) {
      slug
      displayName
      description
      cover {
        image {
          desktop
          mobile
        }
      }
      speakers {
        speakerName
        speakerPhotoPath
      }
      date
    }
  }
`;

const talkQuery = `#graphql
query TalkQuery(
  $talkSlug: String
) {
  talk: talksYaml(slug: {eq: $talkSlug}) {
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
`;

export const queryForRecommendations = async (
  graphql: (query: string, args?: any) => any
): Promise<RecommendationsProps> => {
  const loadedEvents = {};
  const {
    data: { recommendationsData },
  } = await graphql(recommendationsQuery);

  const queryRecommendationsData = async () => {
    const eventsData = await Promise.all(
      recommendationsData.recommendations.events.map(async (eventQueryData) => {
        if (loadedEvents[eventQueryData.eventSlug]) {
          const cover = await getFluidImage({
            graphql,
            path: loadedEvents[eventQueryData.eventSlug].cover.image.mobile,
            quality: 90,
            sizes: "(max:-width: 768px)",
          });
          const coverDesktop = await getFluidImage({
            graphql,
            path: loadedEvents[eventQueryData.eventSlug].cover.image.desktop,
            quality: 90,
            sizes: "(max:-width: 2000px)",
          });

          return {
            item: {
              ...loadedEvents[eventQueryData.eventSlug],
              cover,
              coverDesktop,
            },
            order: eventQueryData.order,
          };
        } else {
          const {
            data: { event },
          } = await graphql(eventQuery, {
            eventSlug: eventQueryData.eventSlug,
          });
          const cover = await getFluidImage({
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

          return {
            item: { ...event, cover, coverDesktop },
            order: eventQueryData.order,
          };
        }
      })
    );
    const talksData = await Promise.all(
      recommendationsData.recommendations.talks.map(async (talkQueryData) => {
        const {
          data: { talk },
        } = await graphql(talkQuery, {
          talkSlug: talkQueryData.talkSlug,
        });

        const cover = await getFluidImage({
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

        if (loadedEvents[talk.eventSlug]) {
          return {
            item: {
              ...talk,
              eventName: loadedEvents[talk.eventSlug].displayName,
              cover,
              coverDesktop,
            },
            order: talkQueryData.order,
          };
        } else {
          const {
            data: { event },
          } = await graphql(eventQuery, {
            eventSlug: talk.eventSlug,
          });
          return {
            item: {
              ...talk,
              eventName: event.displayName,
              cover,
              coverDesktop,
            },
            order: talkQueryData.order,
          };
        }
      })
    );
    return [...eventsData, ...talksData];
  };

  const recommendations: {
    item: {};
    order: number;
  }[] = await queryRecommendationsData();

  recommendations.sort((a, b) => a.order - b.order);

  return {
    ...recommendationsData,
    recommendations,
  };
};
