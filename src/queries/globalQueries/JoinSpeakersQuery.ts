import { FluidObject } from "gatsby-image";
import { getFluidImage } from "../utils";

export interface JoinSpeakersSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionButtonText: string;
  sectionButtonLink: string;
  sectionLinks: [{ displayName: string; path: string }];
  sectionBackgroundImageUrl: string;
  sectionBackgroundImageUrlDesktop: string;
  sectionBackgroundImageAlt: string;
  sectionBackgroundImage: FluidObject;
  sectionBackgroundImageDesktop: FluidObject;
}

const joinSpeakersQuery = `#graphql
query JoinSpeakersQuery {
  joinSpeakers:  globalYaml(collectionId: { eq: "joinSpeakersCta" })  {
    sectionTitle
    sectionSubtitle
    sectionButtonText
    sectionButtonLink
    sectionLinks {
      displayName
      path
    }
    sectionBackgroundImageUrl
    sectionBackgroundImageUrlDesktop
    sectionBackgroundImageAlt
  }
}
`;

export const queryForJoinSpeakers = async (
  graphql: (query: string, args?: any) => any
): Promise<JoinSpeakersSectionProps> => {
  const {
    data: { joinSpeakers },
  } = await graphql(joinSpeakersQuery);

  const sectionBackgroundImage = await getFluidImage({
    graphql,
    path: joinSpeakers.sectionBackgroundImageUrl,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });

  const sectionBackgroundImageDesktop = await getFluidImage({
    graphql,
    path: joinSpeakers.sectionBackgroundImageUrlDesktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  return {
    ...joinSpeakers,
    sectionBackgroundImage,
    sectionBackgroundImageDesktop,
  };
};
