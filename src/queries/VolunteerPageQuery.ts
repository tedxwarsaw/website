import { Props } from "../templates/IndexPage";
import { getFluidImage } from "./utils";
import { queryForNewsletter } from "./globalQueries";

export const pageQuery = `#graphql
  query SpeakersPageTemplate {
    pagesYaml(templateKey: { eq: "VolunteerPage" }) {
      heroTitle
      heroBackgroundImageUrl
      heroBackgroundImageUrlDesktop
      heroBackgroundImageAlt
      centerTextSectionTitle
      centerTextSectionContent
      centerTextSectionButtonLink
      centerTextSectionButtonText
      volunteerNewsletterTitle
      volunteerNewsletterContent
      meetUsTitle
      meetUsContent
      meetUsImageUrl
      meetUsImageUrlDesktop
      meetUsImageAlt
      meetUsButtonText
      meetUsButtonLink
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

    const meetUsImage = await getFluidImage({
        graphql,
        path: pagesYaml.meetUsImageUrl,
        quality: 90,
        sizes: "(max:-width: 768px)",
    });

    const meetUsImageDesktop = await getFluidImage({
        graphql,
        path: pagesYaml.meetUsImageUrlDesktop,
        quality: 90,
        sizes: "(max:-width: 2000px)",
    });

    const newsletter = await queryForNewsletter(graphql);

    return {
        ...pagesYaml,
        ...newsletter,
        heroBackgroundImage,
        heroBackgroundImageDesktop,
        meetUsImage,
        meetUsImageDesktop
    };
};
