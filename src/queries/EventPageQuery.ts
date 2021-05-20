import { parse as parseHTML, HTMLElement } from "node-html-parser";
import { Props } from "../templates/EventPage";
import { getFixedImage, getFluidImage } from "./utils";
import { queryForJoinSpeakers, queryForNewsletter } from "./globalQueries";

const firstQuery = `#graphql
  query FirstEvent {
    suggestedEventYaml(collectionId: { eq: "suggestedEvent" }) {
      slug
      photos
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
    $eventSlug: String
    $suggestedEventSlug: String,
  ) {
    event: eventsYaml(slug: {eq: $eventSlug}) {
      displayName
      city
      date
      description
      hook
      callToAction {
        buttonText
        buttonUrl
        subtitle
        title
      }
      cover {
        variant
        image {
          desktop
          mobile
        }
        button {
          show
          text
          link
        }
      }
      partnerLogoPaths {
        partnerName
        partnerLogoPath
      }
      isOnline
      location {
        city
        displayName
        image
        mapIframe
      }
      speakers {
        speakerName
        speakerPhotoPath
      }
      ticketProviderLogo
    }
    suggestedEventInfo: eventsYaml(slug: {eq: $suggestedEventSlug}) {
      slug
      displayName
    }
  }
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any,
  slug: string
): Promise<Props> => {
  const {
    data: { partnershipTeamYaml, suggestedEventYaml },
  } = await graphql(firstQuery);

  const {
    data: { suggestedEventInfo, event },
  } = await graphql(secondQuery, {
    eventSlug: slug,
    suggestedEventSlug: suggestedEventYaml.slug,
  });

  const partnershipTeam: any = await Promise.all(
    partnershipTeamYaml.members.map(async (member) => {
      member.photo = await getFixedImage({
        graphql,
        path: member.photo,
        height: 100,
      });
      return member;
    })
  );

  const suggestedEvent: any = {
    displayName: suggestedEventInfo.displayName,
    slug: suggestedEventInfo.slug,
    photos: await Promise.all(
      suggestedEventYaml.photos.map(
        async (path) => await getFluidImage({ graphql, path })
      )
    ),
  };

  const partnerLogosDesktop: any = await Promise.all(
    event.partnerLogoPaths.map(x => x.partnerLogoPath).map(
      async (path) => await getFixedImage({ graphql, path, height: 60 })
    )
  );

  const partnerLogos: any = await Promise.all(
    event.partnerLogoPaths.map(x => x.partnerLogoPath).map(
      async (path) => await getFixedImage({ graphql, path, height: 30 })
    )
  );

  let ticketProviderLogo : any;
  if(event.ticketProviderLogo) {
    ticketProviderLogo = await getFixedImage({ graphql, path: event.ticketProviderLogo, height: 15 });
  }

  const cover: any = {
    ...event.cover,
    image: {
      desktop: await getFluidImage({
        graphql,
        path: event.cover.image.desktop,
        quality: 90,
        sizes: "(max:-width: 2000px)",
      }),
      mobile: await getFluidImage({
        graphql,
        path: event.cover.image.mobile,
        quality: 90,
        sizes: "(max:-width: 768px)",
      }),
    },
  };

  const location: any = {
    ...event.location,
    mapSrc: (parseHTML(event.location.mapIframe).childNodes[0] as HTMLElement)
      .attrs.src,
  };

  const newsletter = await queryForNewsletter(graphql);
  const joinSpeakers = await queryForJoinSpeakers(graphql);

  const eventSpeakers: any = await Promise.all(
    event.speakers.map(async (speaker) => {
      const image = await getFixedImage({
        graphql,
        path: speaker.speakerPhotoPath,
        height: 60,
        width: 60,
      });
      return {
        speakerName: speaker.speakerName,
        speakerPhoto: image,
      };
    })
  );

  return {
    ...event,
    partnerLogos,
    partnerLogosDesktop,
    partnershipTeam,
    suggestedEvent,
    cover,
    location,
    eventSpeakers,
    ...newsletter,
    joinSpeakers,
    ticketProviderLogo
  };
};
