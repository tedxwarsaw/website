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
      youtubeBannerHeading
      youtubeBannerLinkText
      youtubeBannerLinkUrl
      eventHiglightImage
      eventHeader
      eventSubheader
      eventPartnersProfilesUrls
      eventDescriptonColOne
      eventDescriptonColTwo
      eventReadMoreLink
    }
  }
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

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
    path: pagesYaml.eventHiglightImage,
    quality: 90,
  });

  const eventPartnersProfiles: any = await Promise.all(
    pagesYaml.eventPartnersProfilesUrls.map(async (path) => {
      console.log(path);
      const image = await getFixedImage({
        graphql,
        path: path,
        height: 60,
        width: 60,
      });
      console.log(image);
      return image;
    })
  );

  return {
    ...pagesYaml,
    heroBackgroundImage,
    heroBackgroundImageDesktop,
    eventHiglightImage,
    eventPartnersProfiles,
  };
};
