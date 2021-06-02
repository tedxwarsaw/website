import { getFixedImage, getFluidImage } from "./utils";
import { Props } from "../templates/EventPage";
import { queryForNewsletter } from "./globalQueries";

const talkQuery = `#graphql
query TalkQuery(
  $talkSlug: String
) {
  talk: talksYaml(slug: {eq: $talkSlug}) {
    slug
    displayName
    talkDescription
    youtubeVideoId
    speaker
    speakerProfileImage
    speakerDescription
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

const relatedTalksQuery = `#graphql
query RelatedTalks (
  $talkSlug: String,
  $eventSlug: String,
){
    allTalksYaml(filter: {collectionId: {eq: "talk"}, eventSlug: {eq: $eventSlug}, slug: {ne: $talkSlug}}) {
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

export const queryForProps = async (
  graphql: (query: string, args?: any) => any,
  slug: string
): Promise<Props> => {
  const {
    data: { talk },
  } = await graphql(talkQuery, {
    talkSlug: slug,
  });

  const {
    data: { event },
  } = await graphql(eventQuery, {
    eventSlug: talk.eventSlug,
  });

  const {
    data: { allTalksYaml },
  } = await graphql(relatedTalksQuery, {
    talkSlug: talk.slug,
    eventSlug: talk.eventSlug,
  });

  const eventDisplayName = event.displayName;

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
  const speakerProfileImage = await getFixedImage({
    graphql,
    path: talk.speakerProfileImage,
    height: 80,
  });

  const relatedTalks = await Promise.all(
    allTalksYaml.nodes.map(async (relatedTalk) => {
      const coverMobile = await getFluidImage({
        graphql,
        path: relatedTalk.cover.image.mobile,
        quality: 90,
        sizes: "(max:-width: 768px)",
      });
      const coverDesktop = await getFluidImage({
        graphql,
        path: relatedTalk.cover.image.desktop,
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

      const eventDisplayName = event.displayName;
      const duration = relatedTalk.duration.replace('"', "").replace('"', "");
      return { ...relatedTalk, cover, eventDisplayName, duration };
    })
  );

  const newsletter = await queryForNewsletter(graphql);
  const duration = talk.duration.replace('"', "").replace('"', "");
  return {
    ...talk,
    ...newsletter,
    speakerProfileImage,
    cover,
    eventDisplayName,
    relatedTalks,
    duration,
  };
};
