import { Props } from "../templates/IndexPage";
import { getFluidImage } from "./utils";

export const pageQuery = `#graphql
  query SpeakersPageTemplate {
    pagesYaml(templateKey: { eq: "SpeakersPage" }) {
      heroTitle
      heroBackgroundImageUrl
      heroBackgroundImageUrlDesktop
      heroBackgroundImageAlt
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

    return {
        ...pagesYaml,
        heroBackgroundImage,
        heroBackgroundImageDesktop
    };
};
