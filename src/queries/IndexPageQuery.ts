import { Props } from "../templates/IndexPage";
import { getFixedImage, getFluidImage } from "./utils";
import { queryForFeatureEvent, queryForNewsletter, queryForRecommendations } from "./globalQueries";

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
      youtubeBannerHeading
      youtubeBannerLinkText
      youtubeBannerLinkUrl
      joinUsTitle
      joinUsSubtitle
      joinUsImagePath
      joinUsImageDesktopPath
      joinUsVolunteerText
      joinUsVolunteerLink
      joinUsGetToKnowOurTeamText
      joinUsGetToKnowOurTeamLink
      joinUsBecomeSpeakerText
      joinUsBecomeSpeakerLink
      partnerSectionTitle
      getToKnowOurPartnersText
      getToKnowOurPartnersLink
      joinOurPartnersText
      joinOurPartnersLink
      partnerLogoPaths
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



export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const loadedEvents = {};
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

  const featuredEvent = await queryForFeatureEvent(graphql);

  const {
    data: { event },
  } = await graphql(eventQuery, {
    eventSlug: featuredEvent.slug,
  });

  loadedEvents[featuredEvent.slug] = event;

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

  const eventSpeakerPhotos: any = await Promise.all(
    event.speakers.map(async (speaker) => {
      const image = await getFixedImage({
        graphql,
        path: speaker.speakerPhotoPath,
        height: 60,
        width: 60,
      });
      return image;
    })
  );

  const joinUsImage = await getFluidImage({
    graphql,
    path: pagesYaml.joinUsImagePath,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });
  const joinUsImageDesktop = await getFluidImage({
    graphql,
    path: pagesYaml.joinUsImageDesktopPath,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  const partnerLogos: any = await Promise.all(
    pagesYaml.partnerLogoPaths.map(
      async (path) => await getFixedImage({ graphql, path, height: 30 })
    )
  );
  const partnerLogosDesktop: any = await Promise.all(
    pagesYaml.partnerLogoPaths.map(
      async (path) => await getFixedImage({ graphql, path, height: 60 })
    )
  );

  const newsletter = await queryForNewsletter(graphql);

  const {
    recommendationsTitle,
    recommendations,
  } = await queryForRecommendations(graphql);

  return {
    ...pagesYaml,
    heroBackgroundImage,
    heroBackgroundImageDesktop,
    eventHeader: event.displayName,
    eventDescription: event.description,
    eventHiglightImage,
    eventHiglightImageDesktop,
    eventSpeakerPhotos,
    recommendationsTitle,
    recommendations,
    joinUsImage,
    joinUsImageDesktop,
    partnerLogos,
    partnerLogosDesktop,
    ...newsletter,
  };
};
