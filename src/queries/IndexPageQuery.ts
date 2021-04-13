import { Props } from "../templates/IndexPage";
import { getFixedImage, getFluidImage } from "./utils";

export const pageQuery = `#graphql
  query IndexPageTemplate {
    pagesYaml(templateKey: { eq: "IndexPage" }) {
      heroTitle
      heroSubtitle
      heroButtonText
      heroButtonLink
      heroLinks {
        displayName
        path
      }
      heroBackgroundImageUrl
      heroBackgroundImageUrlDesktop
      heroBackgroundImageAlt
      ourStoryTitle
      ourStoryItems {
        boldText
        text
      }
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
      youtubeBannerHeading
      youtubeBannerLinkText
      youtubeBannerLinkUrl
      eventSlug
    }
  }
`;

const eventQuery = `#graphql
  query EventQuery(
    $eventSlug: String
  ) {
    event: eventsYaml(slug: {eq: $eventSlug}) {
      displayName
      description
      cover {
        image {
          desktop
          mobile
        }
      }
      speakerPhotoPaths
    }
  }
`;

const talkQuery = `#graphql
query TalkQuery(
  $talkSlug: String
) {
  talk: talksYaml(slug: {eq: $talkSlug}) {
    displayName
    speaker
    eventSlug
    cover {
        image {
          desktop
          mobile
        }
    }
  }
}
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const loadedEvents = {};
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

  const {
    data: { event },
  } = await graphql(eventQuery, {
    eventSlug: pagesYaml.eventSlug,
  });

  loadedEvents[pagesYaml.eventSlug] = event;

  const heroBackgroundImage = await getFluidImage({
    graphql,
    path: pagesYaml.heroBackgroundImageUrl,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });

  const heroBackgroundImageDesktop = await getFluidImage({
    graphql,
    path: pagesYaml.heroBackgroundImageUrlDesktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  const eventHiglightImage = await getFluidImage({
    graphql,
    path: event.cover.image.mobile,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });
  const eventHiglightImageDesktop = await getFluidImage({
    graphql,
    path: event.cover.image.desktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  const queryRecommendationsData: () => {
    item: {};
    order: number;
  }[] = async () => {
    const eventsData = await Promise.all(
      pagesYaml.recommendations.events.map(async (eventQueryData) => {
        if (loadedEvents[eventQueryData.eventSlug]) {
          return {
            item: loadedEvents[eventQueryData.eventSlug],
            order: eventQueryData.order,
          };
        } else {
          const {
            data: { event },
          } = await graphql(eventQuery, {
            eventSlug: eventQueryData.eventSlug,
          });
          return {
            item: event,
            order: eventQueryData.order,
          };
        }
      })
    );
    const talksData = await Promise.all(
      pagesYaml.recommendations.talks.map(async (talkQueryData) => {
        const {
          data: { talk },
        } = await graphql(talkQuery, {
          talkSlug: talkQueryData.talkSlug,
        });
        if (loadedEvents[talk.eventSlug]) {
          return {
            item: {
              ...talk,
              eventName: loadedEvents[talk.eventSlug].displayName,
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
  console.log(recommendations.sort((a, b) => a.order - b.order));

  const eventSpeakerPhotos: any = await Promise.all(
    event.speakerPhotoPaths.map(async (path) => {
      const image = await getFixedImage({
        graphql,
        path: path,
        height: 60,
        width: 60,
      });
      return image;
    })
  );

  return {
    ...pagesYaml,
    heroBackgroundImage,
    heroBackgroundImageDesktop,
    eventHeader: event.displayName,
    eventDescription: event.description,
    eventHiglightImage,
    eventHiglightImageDesktop,
    eventSpeakerPhotos,
  };
};
