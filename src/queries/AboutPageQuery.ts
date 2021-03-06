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
      teamMembersSlider {
        name
        title
        description
        profileImageUrl
      }
      associates {
        name
        title
        profileImageUrl
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

  const associates: any = await Promise.all(
    pagesYaml.associates.map(async (associate) => {
      const image = await getFixedImage({
        graphql,
        path: associate.profileImageUrl,
        height: 150,
        width: 150,
        grayscale: true,
      });
      return {
        ...associate,
        profileImage: image,
      };
    })
  );
  const teamMembersSlider: any = await Promise.all(
    pagesYaml.teamMembersSlider.map(async (teamMember) => {
      const profileImage = await getFluidImage({
        graphql,
        path: teamMember.profileImageUrl,
        quality: 100,
        sizes: "(max:-width: 768px)",
        grayscale: true,
      });

      const profileImageDesktop = await getFluidImage({
        graphql,
        path: teamMember.profileImageUrl,
        quality: 100,
        sizes: "(max:-width: 2000px)",
        grayscale: true,
      });

      return {
        ...teamMember,
        profileImage,
        profileImageDesktop,
      };
    })
  );

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

  const newsletter = await queryForNewsletter(graphql);

  return {
    ...pagesYaml,
    ...newsletter,
    heroBackgroundImage,
    heroBackgroundImageDesktop,
    associates,
    teamMembersSlider,
    AboutUsImage,
    AboutUsImageDesktop,
  };
};
