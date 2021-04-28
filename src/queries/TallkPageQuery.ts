import { getFluidImage } from "./utils";
import { Props } from "../templates/EventPage";

const talkQuery = `#graphql
query TalkQuery(
  $talkSlug: String
) {
  talk: talksYaml(slug: {eq: $talkSlug}) {
    slug
    displayName
    talkDescription
    youtubeLink
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

  return {
    ...talk,
    cover,
    eventDisplayName,
  };
};
