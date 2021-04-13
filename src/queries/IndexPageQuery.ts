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
      eventSlug
    }
  }
`;

const secondQuery = `#graphql
  query SecondEvent(
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
      organizersProfilePaths
    }
  }
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

  const {
    data: { event },
  } = await graphql(secondQuery, {
    eventSlug: pagesYaml.eventSlug,
  });

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

  console.log(event.cover.image.mobile);
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

  console.log(event.organizersProfilePaths);
  const eventPartnersProfiles: any = await Promise.all(
    event.organizersProfilePaths.map(async (path) => {
      console.log(path);
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
    eventPartnersProfiles,
  };
};
