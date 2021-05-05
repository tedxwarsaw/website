import { Props } from "../templates/PrivacyPolicyPage";

export const pageQuery = `#graphql
  query PrivacyPolicyPageTemplate {
    pagesYaml(templateKey: { eq: "PrivacyPolicyPage" }) {
      privacyPolicyContent
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
