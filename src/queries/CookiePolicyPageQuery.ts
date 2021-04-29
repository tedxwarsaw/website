import { Props } from "../templates/CookiePolicyPage";

export const pageQuery = `#graphql
  query CookiePolicyPageTemplate {
    pagesYaml(templateKey: { eq: "CookiePolicyPage" }) {
      cookiePolicyContent
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
