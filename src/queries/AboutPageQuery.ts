import { Props } from "../templates/IndexPage";
import { getFixedImage, getFluidImage } from "./utils";
import { queryForNewsletter } from "./globalQueries";

export const pageQuery = `#graphql
  query AboutPageTemplate {
    pagesYaml(templateKey: { eq: "AboutPage" }) {
      heroTitle
      heroBackgroundImageUrl
      heroBackgroundImageUrlDesktop
      heroBackgroundImageAlt
      aboutTedContent
      aboutTedSpeakers{
        name
      }
      aboutTedEventsTitle
      aboutTedEvents{
        content
      }
      mediaInitiativesTitle
      mediaInitiatives{
        content
      }
      AboutUsTitle
      AboutUsContent
      AboutUsImageUrl
      AboutUsImageUrlDesktop
      AboutUsImageAlt
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

  const AboutUsImage = await getFluidImage({
    graphql,
    path: pagesYaml.AboutUsImageUrl,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });

  const AboutUsImageDesktop = await getFluidImage({
    graphql,
    path: pagesYaml.AboutUsImageUrlDesktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  return {
    ...pagesYaml,
    heroBackgroundImage,
    heroBackgroundImageDesktop,
    AboutUsImage,
    AboutUsImageDesktop
  };
};
