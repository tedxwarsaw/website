import { Props } from "../templates/IndexPage";
import { getFixedImage, getFluidImage } from "./utils";
import { queryForNewsletter } from "./globalQueries";

export const pageQuery = `#graphql
  query MeetUsPageTemplate {
    pagesYaml(templateKey: { eq: "MeetUsPage" }) {
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
