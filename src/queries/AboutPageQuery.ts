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
      aboutTedWarsawTitle
      aboutTedWarsawContent
      aboutTedWarsawImageUrl
      aboutTedWarsawImageUrlDesktop
      aboutTedWarsawImageAlt
      meetUsBackgroundImage
      meetUsBackgroundImageDesktop
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
      });

      const profileImageDesktop = await getFluidImage({
        graphql,
        path: teamMember.profileImageUrl,
        quality: 100,
        sizes: "(max:-width: 2000px)",
      });

      return {
        ...teamMember,
        profileImage,
        profileImageDesktop,
      };
    })
  );

  const meetUsBackgroundImage = await getFluidImage({
    graphql,
    path: pagesYaml.meetUsBackgroundImage,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });

  const meetUsBackgroundImageDesktop = await getFluidImage({
    graphql,
    path: pagesYaml.meetUsBackgroundImageDesktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  const aboutTedWarsawImage = await getFluidImage({
    graphql,
    path: pagesYaml.aboutTedWarsawImageUrl,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });

  const aboutTedWarsawImageDesktop = await getFluidImage({
    graphql,
    path: pagesYaml.aboutTedWarsawImageUrlDesktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  const newsletter = await queryForNewsletter(graphql);

  return {
    ...pagesYaml,
    ...newsletter,
    heroBackgroundImage,
    heroBackgroundImageDesktop,
    meetUsBackgroundImage,
    meetUsBackgroundImageDesktop,
    associates,
    teamMembersSlider,
    aboutTedWarsawImage,
    aboutTedWarsawImageDesktop,
  };
};
