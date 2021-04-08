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
    }
  }
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

  return {
    ...pagesYaml,
  };
};
