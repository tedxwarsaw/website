import { Props } from "../templates/EventPage";
import { gatsbyImageFixedFragment, gatsbyImageFluidFragment } from "./utils";

const firstQuery = `#graphql
  query FirstEvent {
    eventSplash: file(relativePath: { eq: "images/uploads/dare-splash.jpg" }) {
      childImageSharp {
        fluid(quality: 90, sizes: "(max:-width: 768px)") {
          ${gatsbyImageFluidFragment}
        }
      }
    }
    locationImage: file(relativePath: { eq: "images/uploads/billenium.jpg" }) {
      childImageSharp {
        fluid(quality: 90, sizes: "(max:-width: 600px)") {
          ${gatsbyImageFluidFragment}
        }
      }
    }
    partnershipTeamYaml(collectionId: { eq: "eventPartnershipTeam" }) {
      members {
        areaOfResponsibility
        email
        name
        phoneNumber
        photo
      }
    }
  }
`;

const secondQuery = `#graphql
  query SecondEvent(
    $partnerLogosFolder: String
    $partnershipTeamPhotoPaths: [String]
  ) {
    partnerLogos: allFile(
      filter: { relativeDirectory: { eq: $partnerLogosFolder } }
      sort: { fields: base }
    ) {
      nodes {
        childImageSharp {
          fixed(height: 60) {
            ${gatsbyImageFixedFragment}
          }
        }
      }
    }
    partnershipTeamPhotos: allFile(
      filter: { relativePath: { in: $partnershipTeamPhotoPaths } }
    ) {
      nodes {
        childImageSharp {
          fixed(height: 150) {
            ${gatsbyImageFixedFragment}
          }
        }
      }
    }
  }
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any,
  slug: string
): Promise<Props> => {
  const {
    data: { partnershipTeamYaml, eventSplash, locationImage },
  } = await graphql(firstQuery);
  const partnershipTeamPhotoPaths = partnershipTeamYaml.members.map(
    ({ photo }) => photo
  );

  const {
    data: { partnerLogos, partnershipTeamPhotos },
  } = await graphql(secondQuery, {
    partnerLogosFolder: `events/${slug}/partnerLogos`,
    partnershipTeamPhotoPaths,
  });

  return {
    eventSplash: eventSplash.childImageSharp.fluid,
    locationImage: locationImage.childImageSharp.fluid,
    partnerLogos: partnerLogos.nodes.map((node) => node.childImageSharp.fixed),
  };
};
