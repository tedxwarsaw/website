import { parse as parseHTML, HTMLElement } from "node-html-parser";
import { Props } from "../templates/EventPage";
import { getFixedImage, getFluidImage } from "./utils";
import { queryForJoinSpeakers, queryForNewsletter } from "./globalQueries";

const firstQuery = `#graphql
  query FirstEvent {
    suggestedEventYaml:  suggestedEventYaml(collectionId: { eq: "suggestedEvent" })  {
      slug
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
      slug
      displayName
      edition
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
      partnerLogos {
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
      eventPhotos {
        eventPhoto
      }
    }
    suggestedEventInfo: eventsYaml(slug: {eq: $suggestedEventSlug}) {
      slug
      displayName
      eventPhotos {
        eventPhoto
      }
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

  const suggestedEvent = suggestedEventInfo;
  suggestedEvent.photos = await Promise.all(
    suggestedEventInfo.eventPhotos.map(async (item) => {
      const path = item.eventPhoto;
      return await getFluidImage({ graphql, path });
    })
  );

  let partnerLogos = [];
  let partnerLogosDesktop = [];
  if (event.partnerLogos?.length > 0) {
    partnerLogos = await Promise.all(
      event.partnerLogos.map(
        async (logo) =>
          await getFixedImage({
            graphql,
            path: logo.partnerLogoPath,
            height: 30,
          })
      )
    );

    partnerLogosDesktop = await Promise.all(
      event.partnerLogos.map(
        async (logo) =>
          await getFixedImage({
            graphql,
            path: logo.partnerLogoPath,
            height: 50,
          })
      )
    );
  }

  let ticketProviderLogo: any;
  if (event.ticketProviderLogo) {
    ticketProviderLogo = await getFixedImage({
      graphql,
      path: event.ticketProviderLogo,
      height: 15,
    });
  }

  let eventPhotosDesktop = [];
  if (event.eventPhotos.length > 0) {
    eventPhotosDesktop = await Promise.all(
      event.eventPhotos.map(
        async (event) =>
          await getFluidImage({
            graphql,
            path: event.eventPhoto,
            quality: 90,
            sizes: "(max:-width: 2000px)",
          })
      )
    );
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
    image: await getFluidImage({
      graphql,
      path: event.location.image,
      quality: 90,
      sizes: "(max:-width: 2000px)",
    }),
  };

  const newsletter = await queryForNewsletter(graphql);
  const joinSpeakers = await queryForJoinSpeakers(graphql);

  let eventSpeakers;
  if (event.speakers) {
    eventSpeakers = await Promise.all(
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
  }

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
    ticketProviderLogo,
    eventPhotosDesktop,
  };
};
