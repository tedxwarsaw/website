import { Props } from "../templates/IndexPage";
import {getFixedImage, getFluidImage} from "./utils";
import {queryForNewsletter, queryForRecommendations} from "./globalQueries";

export const pageQuery = `#graphql
  query PartnersPageTemplate {
    pagesYaml(templateKey: { eq: "PartnersPage" }) {
      heroTitle
      heroBackgroundImageUrl
      heroBackgroundImageUrlDesktop
      heroBackgroundImageAlt
      partnerSectionTitle
      partnerLogoPaths
      partnersContactContent
      partnersContacts {
        image
        name
        title
        email
        phone        
      }
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

    const newsletter = await queryForNewsletter(graphql);

    const {
        recommendationsTitle,
        recommendations,
    } = await queryForRecommendations(graphql);

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

    const partnerContactsImages: any = await Promise.all(
        pagesYaml.partnersContacts.map(x => x.image).map(
            async (path) => await getFixedImage({ graphql, path, height: 100 })
        )
    );

    pagesYaml.partnersContacts[0].image = partnerContactsImages[0];
    pagesYaml.partnersContacts[1].image = partnerContactsImages[1];

    return {
        ...pagesYaml,
        ...newsletter,
        heroBackgroundImage,
        heroBackgroundImageDesktop,
        recommendationsTitle,
        recommendations,
        partnerLogos,
        partnerLogosDesktop
    };
};
